const { After, Before, AfterStep, BeforeStep, Status } = require('@cucumber/cucumber');
const { POManager } = require('../../page-objects/POManager');
const { chromium, expect } = require('@playwright/test');

Before({ tags: "@Validations or @Regression" }, async function () {
  this.browser = await chromium.launch({ headless: true });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
  this.poManager = new POManager(this.page);
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    await page.screenshot({ path: 'cucumber-failure screenshot' });
  }
});

After(function () {
  console.log("Last to execute");
});