/// <reference types="cypress"/>

describe('Recherche d\'article', () => {
    it('Recherche', () => {
        cy.readFile('cypress/fixtures/connexion.json').then(data => { 
            for (const connexion of data.rechercheDatas) {
                cy.get('#search').type(connexion.search)
                cy.get('#search').type('{enter}')
            }
        })
    })
})