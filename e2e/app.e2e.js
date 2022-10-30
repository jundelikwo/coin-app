describe('Coin App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });

  it('should show list empty state when no coin matches search text', async () => {
    await element(by.id('search-input')).typeText('Hello');
    await expect(element(by.id('coin-button-0'))).not.toBeVisible();
    await expect(element(by.id('coin-list-empty'))).toBeVisible();
  });

  it('should render coin when they are coins', async () => {
    await expect(element(by.id('coin-button-0'))).toBeVisible();
  });

  it('should show only coins that match search text', async () => {
    await element(by.id('search-input')).typeText('btcbtc');
    await expect(element(by.text('BTCBTC'))).toBeVisible();
    await expect(element(by.id('coin-button-1'))).not.toBeVisible();
  });

  it('should show coin details after coin tap', async () => {
    await element(by.id('coin-button-0')).tap();
    await expect(element(by.id('coin-details'))).toBeVisible();
  });

  it('should close coin details after back button tap', async () => {
    await element(by.id('coin-button-0')).tap();
    await element(by.id('coin-details-close')).tap();
    await expect(element(by.id('coin-details'))).not.toBeVisible();
  });
});
