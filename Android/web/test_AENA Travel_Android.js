const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto("https://aenatravel.aena.es/es/sessionFinished", { waitUntil: 'domcontentloaded', timeout: 60000 });
  
  await page.setViewport({ width: 1920, height: 951 });
  
  await page.waitForSelector('.col-xs-5 > .nav__right > .nav__links > .nav__button-user > .c-button--session');
  await page.click('.col-xs-5 > .nav__right > .nav__links > .nav__button-user > .c-button--session');
  
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  
  await page.waitForSelector('.col-xs-5 > .nav__right > .nav__links > .nav__button-user > .c-button--session');
  await page.click('.col-xs-5 > .nav__right > .nav__links > .nav__button-user > .c-button--session');
  
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  
  await page.waitForSelector('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text');
  await page.click('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text');
  
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-text', "daniell.tec@entelgy.com");
  
  await page.type('#gigya-login-form > .gigya-layout-row > .gigya-layout-cell > .gigya-composite-control > .gigya-input-password', "Arbust0@EN@1");
  
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  
  await page.waitForSelector('.nav__right > .nav__links > .header-option > a > .icon');
  await page.click('.nav__right > .nav__links > .header-option > a > .icon');
  
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  
  await browser.close();
})();
