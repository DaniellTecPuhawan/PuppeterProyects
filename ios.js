const puppeteer = require('puppeteer');

async function run() {
  // Lanzar el navegador con la interfaz gráfica abierta
  const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
  const page = await browser.newPage();
  
  // Ajustar el tamaño de la ventana
  await page.setViewport({ width: 1920, height: 1080 });

  // Navegar a una página de prueba (puedes cambiar la URL)
  await page.goto("https://www.google.com", {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Esperar y hacer clic en el campo de búsqueda
  await page.waitForSelector('textarea[name="q"]'); // Selector del campo de búsqueda en Google
  await page.click('textarea[name="q"]');

  // Escribir un texto en el campo de búsqueda
  await page.type('textarea[name="q"]', "Puppeteer ejemplo", { delay: 100 });

  console.log("✅ Clic y escritura realizados. El navegador se mantendrá abierto.");
}

// Ejecutar la función
run().catch(console.error);
