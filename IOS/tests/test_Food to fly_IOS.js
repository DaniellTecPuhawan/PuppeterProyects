const puppeteer = require('puppeteer');

const { KnownDevices } = puppeteer;

const iPhone = KnownDevices['iPhone 12']; 

(async () => {

  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();

  await page.emulate(iPhone);

  const response = await page.goto('https://foodtofly.aena.es/es/');

  if (response.status() === 200) {

    console.log('✅ Response 200');

  } else {

    console.log(`⚠️ Error: Código de estado ${response.status()}`);

  }

  await browser.close();

})();
