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


describe('Connexion', () => {
    it('', () =>{
        cy.get('#menuTop > .nav > :nth-child(2) > a').click()
        cy.log('J\'ai cliqué sur "Compte"')
    })

    

    it('Remplir les champs', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.connexionDatas) { 
                cy.get('#login').type(gamecashDatas.login)
                cy.get('#password').type(gamecashDatas.password)
                if(gamecashDatas.keepConnect == 'true')
                    cy.get('.autoConnect') 
            }
        })
    })

    it('', () => {
        cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
        cy.get('.content').should('be.visible')
    })

}) 




