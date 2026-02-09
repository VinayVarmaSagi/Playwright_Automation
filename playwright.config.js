import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 100 * 1000,
  workers: 5,
  expect: {
    timeout: 40 * 1000
  },
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure'
  },
  reporter: 'html',



});

module.exports = config;

