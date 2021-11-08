/// <reference types="cypress"/>

// Variables test :
const login = 'test8@yopmail.com'
const password = 'Cacahuette9102'
const keepConnect = true

describe('Connexion', () => {
    it('Remplir les champs', () => {
        cy.readFile('cypress/fixtures/connexion.json').then(data => {
            for (const connexion of data.connexionDatas) { 
                cy.get('#login').type(connexion.login)
                cy.get('#password').type(connexion.password)
                if(connexion.keepConnect == 'true')
                    cy.get('.autoConnect') 
            }
        })
    })

    it('', () => {
        cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
    })
})