import { test, expect, type Locator } from '@playwright/test';


test('test', async ({ page }) => {
  console.log('[APP]', 'Test was executed');
  test.setTimeout(200_000);
  await page.goto(
    'https://officer-portal-fish-dev-main.apps.krrt-stage.ncr.gov.ua/officer/process-list'
  );

  console.log('[APP]', 'Try to log in into the system as RA');

  const frame = page.frameLocator('#sign-widget');

  await page.waitForLoadState('domcontentloaded').catch(() => {});

  await page.locator('#sign-widget').contentFrame().locator('#pkCASelect').selectOption('33');

  await frame
    .locator('#pkReadFileInput')
    .setInputFiles('tests/fixtures/Key-6sidorenkoofficer 6 РА.dat');

  const password = frame.locator('#pkReadFilePasswordTextField');
  await expect(password).toBeEnabled({ timeout: 5_000 });
  await password.fill('123');

  await frame.locator('#pkReadFileButton').click();
  await page.getByRole('button', { name: 'Увійти' }).click();

  await page.waitForLoadState('domcontentloaded').catch(() => {});

  console.log('[APP]','Was logged into the system');

  await page.getByText('📁еДоговір').click();

  await page
    .getByText('📝Укладання Договору на право спеціального використання водних біоресурсів')
    .click();
    
});