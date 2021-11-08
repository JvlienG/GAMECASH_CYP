/// <reference types="cypress"/>

describe('Ajout d\'un article au panier', () => {
    it('Ajout au panier', () => {
        cy.get('.buttonBuy').click()
    })

    it('Poursuivre achat ?', () => {
        cy.readFile('cypress/fixtures/connexion.json').then(data => {
            for (const connexion of data.panierDatas) { 
                if(connexion.voirPanier == 'true')
                    cy.get('.col-sm-offset-2 > .buttonDefault').click()
                else
                    cy.get(':nth-child(1) > .buttonDefault').click()
            }
        })
    })
})