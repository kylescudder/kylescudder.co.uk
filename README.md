# Kyle Scudder portfolio

A static Astro site at [kylescudder.co.uk](https://kylescudder.co.uk), hosted on
Herman through Cloudflare Tunnel.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
bun run format:check
```

GitHub Actions runs CI and publishes attested images; a protected webhook triggers
CD on Herman. See [deployment operations](deploy/README.md).
