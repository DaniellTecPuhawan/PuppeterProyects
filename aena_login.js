const puppeteer = require('puppeteer');
const { KnownDevices } = puppeteer;

const androidDevice = KnownDevices['Galaxy S5']; // Emular Galaxy S5

(async () => {
  // Lanzar navegador en modo gráfico (headless: false)
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Emular un dispositivo Android
  await page.emulate(androidDevice);

  // Navegar a Google
  await page.goto('https://www.google.com');

  console.log('✅ Google abierto en modo Android');

  // Mantener el navegador abierto indefinidamente
  await new Promise(() => {}); // El script sigue corriendo hasta que cierres el navegador manualmente
})();
