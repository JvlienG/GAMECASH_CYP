/// <reference types="cypress"/>

describe('Recherche d\'article', () => {
    it('Recherche', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => { 
            for (const gamecashDatas of data.rechercheDatas) {
                cy.get('#search').type(gamecashDatas.search)
                cy.get('#search').type('{enter}')
            }
        })
    })
})