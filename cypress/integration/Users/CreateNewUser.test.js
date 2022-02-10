/// <reference types = "cypress" />

const { type } = require("os")

it('Create an Agent', function(){
  cy.visit('http://23.22.151.143/login')
  cy.get('#inputEmail').type('pietro55@xbpantibody.com {enter}')
  cy.get('#inputPassword').type('1{enter}')
  cy.get('.btn-group.ng-scope > .btn').click({force: true}) 
  cy.get('[href="/settings/users/new"]').click({force:true})
  cy.get('#exampleInputEmail1').type('Adele {enter}')
  cy.get(':nth-child(2) > #exampleInputEmail2').type('Lah {enter}')
  cy.get(':nth-child(3) > #exampleInputEmail4').type('adele@xpantibody.com {enter}')
  cy.get(':nth-child(4) > #exampleInputEmail4').type('08000000000 {enter}')
  cy.get(':nth-child(5) > #exampleInputEmail2').type('Gbangbala Crescent {enter}')

  //cy.get('#exampleFormControlSelect5').eq('Select Gender_male').select('male', {force: true}).should('contain', 'male');
  //cy.get('#exampleFormControlSelect5').eq('1').select('Gender').should('contain', 'male');


  //cy.get('#exampleFormControlSelect5').each(($ele) => {
    //if ($ele.text() == 'Select Gender') {
        //cy.wrap($ele).click({force:true})}

    //})

  //cy.get('.search.selection.dropdown').click() 
  //cy.contains('Select Gender').click({force: true}).select('male')
  //cy.select('#exampleFormControlSelect5').select('male')

//cy.get('[ng-hide="createUserVm.logging"]').click({force: true})

})