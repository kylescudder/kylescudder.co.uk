# Portfolio on the host

`https://kylescudder.co.uk` serves static Astro output in an unprivileged Caddy
container; `www` redirects to the canonical domain, preserving paths and queries.

Every push to `main` runs `.github/workflows/deploy.yml`. GitHub-hosted CI checks
the locked build, formatting, webhook security, provenance rejection and rollback,
then builds AMD64/ARM64 images and publishes an immutable GHCR digest with GitHub
provenance. An Access-authenticated HMAC webhook queues the digest on the host.
The host verifies the repository, workflow, `main` ref, hosted-runner provenance
and requested revision before deploying. Failed container health checks restore
the previous image. GitHub waits for the public revision before declaring success.
Pull requests run the same CI without publishing or deploying.

## Deployer

`deploy/host-deploy.py` holds this app's settings and hooks; the
shared flow is `deploy/deploy_core.py`, vendored unchanged from
`kylescudder/deploy-core` (see `deploy/deploy_core.lock`). Change the core
there and sync it; CI fails if the vendored copy is edited here.

## Configuration

Checkout: `/Users/kyle/platform/apps/kylescudder`. App network alias:
`kylescudder-site:8080` on `platform-web`; no host port or database.
Receiver: `kylescudder-site-deploy-hook:9000`, exposed only at
`https://deploy-site.kylescudder.co.uk/hooks/kylescudder-site`.
Cloudflare Access protects the entire deployment hostname using only the dedicated
`github-kylescudder-site-deploy` service token. Caddy exposes only the exact hook
path; other authenticated paths return 404. The receiver has no Docker socket
and writes only its private queue. No SSH or self-hosted GitHub runner is used.

GitHub environment `production` must permit `main` only and holds
`CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET`, and `DEPLOY_WEBHOOK_SECRET`.
Repository variables: `DEPLOY_ENABLED=true` and
`SITE_BASE_URL=https://kylescudder.co.uk`. The dedicated Cloudflare service token
expires on 17 October 2027; rotate it in Access and GitHub before expiry.
The public site has no Access policy.

Private host files: `.env` pins `PORTFOLIO_IMAGE`; `.env.deploy-hook` contains
queue/secret paths and the receiver UID/GID. `secrets/deploy-webhook-secret` holds
the HMAC key. Directories are 0700 and files are 0600, excluded from Git and images.
The existing encrypted NAS backup includes application configuration, deployment
code, secrets and release records.

## Operate and recover

```sh
docker compose -f deploy/compose.deploy-hook.yaml --env-file .env.deploy-hook up -d --wait
python3 -B deploy/host-deploy.py --install <host LocalHostName>
launchctl print gui/501/com.kylescudder.kylescudder-site-deploy
tail -n 100 state/deploy.log
./deploy/host-deploy.sh sha256:<previous-verified-digest>
```

The event-driven LaunchAgent runs as Kyle, the Colima owner. Kyle's login session
and Colima must be running. Pause new releases with
`gh variable set DEPLOY_ENABLED --body false --repo kylescudder/kylescudder.co.uk`.
Host deploy tooling and Compose changes require a deliberate checkout update;
normal site releases only change the attested image.

### Branch migration rollout

The default branch and both workflow filters are `main`. GitHub does not update
custom environment branch policies when a branch is renamed: change the
`production` environment's allowed deployment branch to `main` before the first
release. Do not dispatch a release until the host's installed
`deploy/host-deploy.py` requires `--source-ref refs/heads/main`.

The host LaunchAgent invokes that Python file from this checkout for each queued
request. Updating its branch check needs no LaunchAgent restart; normal image
releases do not update the host verifier. Keep `.env`, `.env.deploy-hook`, secrets,
state, backups and the deploy spool intact when updating the source checkout.

The old Netlify project was deleted on 16 October 2026 after public HTTPS and the
attested GitHub image were verified. Its netlify.app URL returns 404.
