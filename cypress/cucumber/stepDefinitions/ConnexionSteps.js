/// <reference types="cypress"/>


describe('Connexion', () => {
    it('Remplir les champs', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.gamecashDatasDatas) { 
                cy.get('#login').type(gamecashDatas.login)
                cy.get('#password').type(gamecashDatas.password)
                if(gamecashDatas.keepConnect == 'true')
                    cy.get('.autoConnect') 
            }
        })
    })

    it('', () => {
        cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
    })
})