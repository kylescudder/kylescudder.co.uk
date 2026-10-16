# Portfolio on Herman

`https://kylescudder.co.uk` serves static Astro output in an unprivileged Caddy
container; `www` redirects to the canonical domain, preserving paths and queries.

Every push to `master` runs `.github/workflows/deploy.yml`. GitHub-hosted CI checks
the locked build, formatting, webhook security, provenance rejection and rollback,
then builds AMD64/ARM64 images and publishes an immutable GHCR digest with GitHub
provenance. An Access-authenticated HMAC webhook queues the digest on Herman.
The host verifies the repository, workflow, `master` ref, hosted-runner provenance
and requested revision before deploying. Failed container health checks restore
the previous image. GitHub waits for the public revision before declaring success.
Pull requests run the same CI without publishing or deploying.

## Configuration

Checkout: `/Users/kyle/platform/apps/kylescudder`. App network alias:
`kylescudder-site:8080` on `platform-web`; no host port or database.
Receiver: `kylescudder-site-deploy-hook:9000`, exposed only at
`https://deploy-site.kylescudder.co.uk/hooks/kylescudder-site`.
Cloudflare Access must protect the entire deployment hostname using only the dedicated
`github-kylescudder-site-deploy` service token before its route is exposed. The receiver has no Docker socket
and writes only its private queue. No SSH or self-hosted GitHub runner is used.

GitHub environment `production` permits `master` only and holds
`CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET`, and `DEPLOY_WEBHOOK_SECRET`.
Repository variables: `DEPLOY_ENABLED=true` and
`SITE_BASE_URL=https://kylescudder.co.uk`. The dedicated Cloudflare service token
expires one year after provisioning; rotate it in Access and GitHub before expiry.
The public site has no Access policy.

Private host files: `.env` pins `PORTFOLIO_IMAGE`; `.env.deploy-hook` contains
queue/secret paths and the receiver UID/GID. `secrets/deploy-webhook-secret` holds
the HMAC key. Directories are 0700 and files are 0600, excluded from Git and images.
The existing encrypted NAS backup includes application configuration, deployment
code, secrets and release records.

## Operate and recover

```sh
docker compose -f deploy/compose.deploy-hook.yaml --env-file .env.deploy-hook up -d --wait
python3 -B deploy/install-launchd.py
launchctl print gui/501/com.herman.kylescudder-site-deploy
tail -n 100 state/deploy.log
./deploy/herman-deploy.sh sha256:<previous-verified-digest>
```

The event-driven LaunchAgent runs as Kyle, the Colima owner. Kyle's login session
and Colima must be running. Pause new releases with
`gh variable set DEPLOY_ENABLED --body false --repo kylescudder/kylescudder.co.uk`.
Host deploy tooling and Compose changes require a deliberate checkout update;
normal site releases only change the attested image. The old Netlify project was deleted on 16 October 2026 after public HTTPS and the
attested GitHub image were verified. Its netlify.app URL returns 404.

## Bootstrap status: 16 October 2026

GitHub CI, multi-platform publication, provenance verification and a manual
attested deployment have passed. The production site is running on Herman.
`DEPLOY_ENABLED=false` gates automatic CD until the dedicated Access service token
is provisioned. The current account API credential needs Account → Access:
Service Tokens → Edit; service-token creation returns `403 auth.forbidden`.
The receiver and LaunchAgent are installed privately, and the deployment hostname
is not exposed. After provisioning Access and both GitHub Access secrets, register
the exact hook path, enable deployment and run the workflow to verify automatic CD.
