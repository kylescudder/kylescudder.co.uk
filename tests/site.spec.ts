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

test('experience roles expand on the home page', async ({ page }) => {
  await page.goto('/')

  const role = page.locator('.experience-item').nth(1)
  await expect(role).not.toHaveAttribute('open', '')
  await role.locator('summary').click()

  await expect(role).toHaveAttribute('open', '')
  await expect(role.locator('li').first()).toBeVisible()
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
