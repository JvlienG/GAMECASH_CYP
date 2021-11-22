/// <reference types="cypress"/>

describe('Selectionner le premier article', () => {
    it('Selectionne un article', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => { 
            for (const gamecashDatas of data.selectionDatas) {
                cy.get(':nth-child('+gamecashDatas.numSelect+') > .blockProduct-1 > .blockTitle > .title').click()
            }
        })
        
    })
})