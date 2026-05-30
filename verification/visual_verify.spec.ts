import { test, expect } from '@playwright/test';

const businesses = [
  { id: 'pizza-paradise', name: 'Pizza' },
  { id: 'grand-view-dining', name: 'Hotel' },
  { id: 'smoke-house', name: 'BBQ' },
  { id: 'bean-haven', name: 'Coffee' },
  { id: 'pure-squeeze', name: 'Juice' },
  { id: 'moon-platters', name: 'Moon' }
];

const viewports = [
  { width: 375, height: 667, name: 'Mobile' },
  { width: 1440, height: 900, name: 'Desktop' }
];

test('Visual Verification of Onboarded Businesses', async ({ page }) => {
  test.setTimeout(120000); // Increase timeout to 2 minutes

  await page.goto('http://localhost:4201');

  for (const biz of businesses) {
    console.log(`Switching to ${biz.id}`);

    // Find the button in the theme switcher
    const switcherBtn = page.locator('button').filter({ hasText: biz.name });
    await switcherBtn.click();

    // Small delay for theme application
    await page.waitForTimeout(1000);

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.screenshot({
        path: `verification/screenshots/final_${biz.id}_${vp.name.toLowerCase()}.png`,
        fullPage: vp.name === 'Desktop'
      });
      console.log(`Captured ${biz.id} ${vp.name}`);
    }
  }
});
