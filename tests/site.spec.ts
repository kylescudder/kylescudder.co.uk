import { expect, test } from '@playwright/test'

test('home page introduces Kyle and his experience', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Kyle Scudder - Back End Developer')
  await expect(page.locator('#site-title')).toBeVisible()
  await expect(page.locator('#experience-title')).toBeVisible()
  await expect(page.locator('#personal-title')).toHaveText(
    'The personal corners that still matter.'
  )
})

test('work page lists projects', async ({ page }) => {
  await page.goto('/work/')

  await expect(page.locator('h2').first()).toBeVisible()
})

test('theme toggle switches to dark and remembers it', async ({ page }) => {
  await page.goto('/work/')
  // Wait for the React island to hydrate before opening its menu
  await page
    .locator('astro-island:not([ssr])', {
      has: page.getByRole('button', { name: 'Toggle theme' })
    })
    .waitFor()
  await page.getByRole('button', { name: 'Toggle theme' }).click()
  await page.getByRole('menuitem', { name: 'Dark' }).click()

  await expect(page.locator('html')).toHaveClass(/\bdark\b/)
  await page.reload()
  await expect(page.locator('html')).toHaveClass(/\bdark\b/)
})

test('CV download is served', async ({ request }) => {
  const cv = await request.get('/CV.pdf')
  expect(cv.ok()).toBe(true)
  expect(cv.headers()['content-type']).toContain('application/pdf')
})

test('unknown pages show the 404 page', async ({ page }) => {
  const response = await page.goto('/missing-page')

  expect(response?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Page not found' })
  ).toBeVisible()
})
