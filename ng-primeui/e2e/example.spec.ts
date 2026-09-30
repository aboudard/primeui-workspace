import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
 await expect(page.locator('h1')).toHaveText('angular primeui')
});
