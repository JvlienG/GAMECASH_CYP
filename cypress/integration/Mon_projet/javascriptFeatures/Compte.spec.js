/// <reference types="cypress"/>
    
before(() => {
    cy.log('I run once before all tests')
    cy.visit('')
    cy.url().should('eq', "https://www.gamecash.fr/")
    cy.get('#axeptio_btn_acceptAll').click()

})
    
beforeEach(() => {
    cy.log('I run before every test')
})
    
afterEach(() => {
    cy.log('I run after every test')
})
    
after(() => {
    cy.log('I run once after all tests')
})





