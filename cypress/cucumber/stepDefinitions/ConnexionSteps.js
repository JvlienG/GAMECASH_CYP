import { Given, And, When, Then, After, Before } from "cypress-cucumber-preprocessor/steps";

describe('', () =>{
    it('', () => {
        cy.visit('')
    })
})

Given(/Je me rends sur le site GameCash/, () => {
    cy.visit('')
    cy.url().should('eq', 'https://www.gamecash.fr/')
})

When(/Je clique sur le menu Compte/, () => {
    cy.get('#menuTop > .nav > :nth-child(2) > a').click()
    cy.url().should('eq','https://www.gamecash.fr/connexion.html')
})

And(/Je renseigne des identifiants valide/, () => {
    cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
        for (const gamecashDatas of data.connexionDatas) { 
            cy.get('#login').type(gamecashDatas.login)
            cy.get('#password').type(gamecashDatas.password)
            if(gamecashDatas.keepConnect == 'true')
                cy.get('.autoConnect') 
        }
    })

    cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
})
    
Then(/Je me connecte/, () => {
    cy.get('.content').should('be.visible')
})