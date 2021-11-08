/// <reference types="cypress"/>

describe('Selectionner le premier article', () => {
    it('Selectionne un article', () => {
        cy.readFile('cypress/fixtures/connexion.json').then(data => { 
            for (const connexion of data.selectionDatas) {
                cy.get(':nth-child('+connexion.numSelect+') > .blockProduct-1 > .blockTitle > .title').click()
            }
        })
        
    })
})