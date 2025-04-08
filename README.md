# cypress.js
автотесты на клиентскую часть Cypress JavaScript
<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://github.com/Naila861/cypress.js/blob/main/baseUrl.png)

3. Применение хуков beforeEach и afterEach
![image](https://github.com/Naila861/cypress.js/blob/main/hooks.png)

4. Переменные данные для авторизации вынесены в отдельный файл
![image](https://github.com/Naila861/cypress.js/blob/main/user_data.png)

5. Каждая страница описана в формате объекта с локаторами
![image](https://github.com/Naila861/cypress.js/blob/main/locators.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://github.com/Naila861/cypress.js/blob/main/Cypress_UI.png)


## Автор

Наиля Габдрахманова([[@gnnnn14](https://t.me/gnnnn14)])
