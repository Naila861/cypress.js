import * as data from "../helpers/default_data.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
          });

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
           }); 

    it('Верный логин и верный пароль', function () {
         
         cy.get('#mail').type(data.login); // Ввели верный логин
         cy.get('#pass').type(data.password); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
       

       
     })

     it('Верный логин и неверный пароль', function () {
        
        cy.get('#mail').type(data.login); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        

      
    })

    it('Проверка, что в логине есть @', function () {
        
        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        
    })

    it('Проверка востановления пароля', function () {
        
        
        cy.get('#forgotEmailButton').click(); // Нажимаю кнопку востановить пароль

        cy.get('#mailForgot').type(data.login) // ввожу почту для востановления
        cy.get('#restoreEmailButton').click(); // нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
      
    })

    it('Неверный логин и верный пароль', function () {
        
        cy.get('#mail').type('german@dolnikovv.ru'); // Ввели неверный логин
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        

      
    })

    it('Проверка, если ввести логин строчными буквами', function () {
        
        cy.get('#mail').type('GerMan@Dolnikovv.ru'); // Ввели неверный логин
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        

      
    })


})
 
 

