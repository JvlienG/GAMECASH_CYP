/// <reference types="cypress"/>

describe('Ajout d\'un article au panier', () => {
    it('Ajout au panier', () => {
        cy.get('.buttonBuy').click()
    })

    it('Poursuivre achat ?', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.panierDatas) { 
                if(gamecashDatas.voirPanier == 'true')
                    cy.get('.col-sm-offset-2 > .buttonDefault').click()
                else
                    cy.get(':nth-child(1) > .buttonDefault').click()
            }
        })
    })
})