/// <reference types = "cypress" />

const { type } = require("os")


it('Admin Restriation Test', function(){
  cy.visit('http://23.22.151.143/login')
  cy.get('a').click()
  cy.get('#exampleInputEmail1').type('Owen {enter}')
  cy.get('#exampleInputEmail2').type('Osai {enter}')
  cy.get(':nth-child(3) > #exampleInputEmail4').type('normf@msny.com.se {enter}')
  cy.get(':nth-child(4) > #exampleInputEmail4').type('08000000000 {enter}')
  cy.get(':nth-child(5) > #exampleInputEmail4').type('Test {enter}')
  cy.get('.btn').click()

})