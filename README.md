# Kyle Scudder portfolio

A static Astro site at [kylescudder.co.uk](https://kylescudder.co.uk), hosted on
The host through Cloudflare Tunnel.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run format:check
```

GitHub Actions runs CI and publishes attested images; a protected webhook triggers
CD on the host. See [deployment operations](deploy/README.md).
