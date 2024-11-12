import { test, expect } from '@playwright/test';

test.only('xxページのヴィジュアルリグレッションテスト', async ({ page }, testInfo) => {
  // 本番環境のURLとテスト環境のURLを指定
  const prodUrl = 'https://playwright.dev/docs/intro';
  const testUrl = 'https://playwright.dev/docs/writing-tests'; // テスト環境のURLを指定

  // 本番環境のスクリーンショットを撮影
  await page.goto(prodUrl);
  const prodScreenshot = await page.screenshot({
    fullPage: true,
    path: testInfo.snapshotPath('prod-env-screenshot.png'),
  });

  // テスト環境のスクリーンショットを撮影
  await page.goto(testUrl);
  const testScreenshot = await page.screenshot({
    fullPage: true,
    path: testInfo.snapshotPath('test-env-screenshot.png'),
  });

  // スクリーンショットの比較
  expect(prodScreenshot).toMatchSnapshot('test-env-screenshot.png');
});
