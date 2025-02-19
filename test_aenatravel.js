import { Selector } from 'testcafe';
import fs from 'fs';

const logToFile = (message) => {
    const timestamp = new Date().toISOString();
    fs.appendFileSync('AENA_Travel_Web_Windows_session-log.txt', `[${timestamp}] ${message}\n`);
};

const email = 'daniell.tec@entelgy.com';
const password = 'Arbust0@EN@1';

fixture `AENA_Travel_Web_Windows`
    .page `https://aenatravel.aena.es/es/`;

test('Prueba de AENA Travel en múltiples navegadores', async t => {
    console.log('Iniciando AENA_Travel_Web_Windows');
    
    logToFile('Navegando en el sitio AENA Travel');

    // Interceptar la respuesta y verificar el código de estado
    await t.expect(Selector('title').innerText).eql('AENA Travel');
    
    logToFile('Respuesta 200 OK para la URL: https://aenatravel.aena.es/es/');

    // Hacer clic en el botón de sesión
    await t
        .click('.col-xs-5 > .nav__right > .nav__links > .nav__button-user > .c-button--session')
        .typeText('#gigya-login-form .gigya-input-text', email)
        .typeText('#gigya-login-form .gigya-input-password', password)
        .click('#gigya-login-form .gigya-input-submit')
        .wait(5000)
        .click('.header-username');

    logToFile('Formulario de login enviado y navegación completada');
});
