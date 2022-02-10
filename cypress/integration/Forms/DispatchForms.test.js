/// <reference types = "cypress" />

const { type } = require("os")

it('Form Dispatch', function(){
  cy.visit('http://23.22.151.143/forms/create')
  cy.get('#inputEmail').type('pietro55@xbpantibody.com {enter}')
  cy.get('#inputPassword').type('1{enter}')
  cy.get(':nth-child(31) > :nth-child(4) > [ui-sref=".form.manage({form:form._id})"] > .svg-inline--fa > path').scrollIntoView().click({force: true});
  cy.contains('Dispatch Now').click({force: true})
  cy.get('.card-body > div > .btn').click({force: true})
  //cy.get('.ui-select-search').type('Smart').should('have.value', 'Smart').select('Smart')

  //cy.get('.ui-select-choices-row-inner > div.ng-binding')
  //cy.get('.ui-select-choices-row-inner').select('Smart Ajunwa').should('have.value', 'Smart')
  //cy.get('#ui-select-choices-row-0-2 > .ui-select-choices-row-inner > div.ng-binding').click
})