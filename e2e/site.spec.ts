import { test, expect } from '@playwright/test'

test('visitors can find the work and contact details', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Kyle Scudder'
  )
  if (page.viewportSize()!.width > 920) {
    await page.getByRole('link', { name: 'Scroll to profile details' }).click()
    await expect(page).toHaveURL(/#profile-details$/)
  } else {
    await page
      .getByRole('heading', { name: 'Projects', exact: true })
      .scrollIntoViewIfNeeded()
  }
  await expect(
    page.getByRole('heading', { name: 'Projects', exact: true })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'Email', exact: true })
  ).toHaveAttribute('href', /^mailto:/)
  const cv = await page.request.get('/CV.pdf')
  expect(cv.ok()).toBe(true)
  expect(cv.headers()['content-type']).toContain('pdf')
  await page.evaluate(() => document.fonts.ready)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true)
})
test('unknown pages return 404', async ({ page }) => {
  const response = await page.goto('/e2e-missing-page')
  expect(response?.status()).toBe(404)
  await expect(page.locator('body')).toContainText(/404|not found/i)
})
