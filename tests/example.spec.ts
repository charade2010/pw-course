import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('//div[@class="wp-block-group alignwide is-content-justification-space-between is-layout-flex wp-container-core-group-is-layout-1 wp-block-group-is-layout-flex"]')).toContainText('Học automation test từ chưa biết gì');
});

test('get started link', async ({ page }) => {
  await page.goto('https://pw-blog.congcu.org/');

  // Click the link "Khóa học automation test cho người chưa biết gì"
  await page.getByRole('link', { name: 'Khóa học automation test cho người chưa biết gì' }).click();

  // Expects page to have a heading with the content "Thông tin khoá học"
  await expect(page.locator('//strong[contains(text(),"Thông tin khoá học")]')).toBeVisible();
});

