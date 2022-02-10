/// <reference types = "cypress" />

const { type } = require("os")


it('Login Test', function(){
  cy.visit('http://23.22.151.143/login')
  cy.get('#inputEmail').type('pietro55@xbpantibody.com {enter}')
  cy.get('#inputPassword').type('1{enter}')

})