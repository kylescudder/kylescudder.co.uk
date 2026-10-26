import { defineConfig } from '@playwright/test'

const port = 4393
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? `http://127.0.0.1:${port}`

export default defineConfig({
  testDir: './tests',
  use: { baseURL },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 } } }
  ],
  // Set PLAYWRIGHT_BASE_URL to test a running production container instead
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: `bunx astro dev --host 127.0.0.1 --port ${port} --ignore-lock`,
        url: baseURL,
        reuseExistingServer: false,
        timeout: 60_000
      }
})
