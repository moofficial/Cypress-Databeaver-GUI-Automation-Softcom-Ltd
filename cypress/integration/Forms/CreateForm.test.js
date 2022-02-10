/// <reference types = "cypress" />

const { type } = require("os")

it('Form Create', function(){
  cy.visit('http://23.22.151.143/forms/create')
  cy.get('#inputEmail').type('pietro55@xbpantibody.com {enter}')
  cy.get('#inputPassword').type('1{enter}')
  cy.get('.btn-group.ng-scope > .btn').click({force: true}) 
  cy.get('.dropdown-menu > [href="/forms/create"]').click({force: true})
  cy.get(':nth-child(4) > .form-control').type('Request {enter}')
})