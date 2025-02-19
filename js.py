from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Configuración del WebDriver
driver = webdriver.Chrome()
driver.maximize_window()

email = 'daniell.tec@entelgy.com'
password = 'Arbust0@EN@1'

try:
    # Ignorar excepciones relacionadas con cookies
    driver.get('https://clubcliente.aena.es/AenaClub/es/sessionFinished')
    
    # Esperar a que la página se cargue y verificar el estado de respuesta
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.TAG_NAME, 'body')))
    print("Página cargada correctamente.")
    
    # Aceptar las cookies si aparece el banner
    try:
        accept_cookies_button = driver.find_element(By.XPATH, '//button[contains(text(), "Aceptar todas")]')
        if accept_cookies_button.is_displayed():
            accept_cookies_button.click()
            print("Cookies aceptadas.")
    except:
        print("Banner de cookies no encontrado.")
    
    # Verificar y hacer clic en el enlace "Iniciar sesión"
    iniciar_sesion_link = WebDriverWait(driver, 30).until(
        EC.visibility_of_element_located((By.LINK_TEXT, 'Iniciar sesión'))
    )
    iniciar_sesion_link.click()
    print("Enlace 'Iniciar sesión' clickeado.")
    
    # Navegar al dominio de destino y verificar la URL
    driver.get("https://usuarios.aena.es")
    WebDriverWait(driver, 30).until(EC.url_contains('usuarios.aena.es'))
    print("Redirección a usuarios.aena.es exitosa.")
    
    # Escribir en los campos de correo electrónico y contraseña
    email_input = driver.find_element(By.CSS_SELECTOR, '#gigya-login-form .gigya-input-text')
    password_input = driver.find_element(By.CSS_SELECTOR, '#gigya-login-form .gigya-input-password')
    
    email_input.send_keys(email)
    print("Correo electrónico ingresado.")
    password_input.send_keys(password)
    print("Contraseña ingresada.")
    
    # Hacer clic en el botón de submit
    submit_button = driver.find_element(By.CSS_SELECTOR, '#gigya-login-form .gigya-input-submit')
    submit_button.click()
    print("Formulario de login enviado.")
    
    # Esperar a que la página se cargue completamente
    WebDriverWait(driver, 30).until(EC.presence_of_element_located((By.TAG_NAME, 'body')))
    
    # Visitar página privada
    driver.get('https://clubcliente.aena.es/AenaClub/es/private-home')
    driver.refresh()
    print("Página privada cargada y refrescada.")
    
finally:
    # No cerrar el navegador
    pass
