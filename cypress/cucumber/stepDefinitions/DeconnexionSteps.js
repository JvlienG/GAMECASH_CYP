describe('Deconnexion', () => {
    it('selecion mon compte', () => {
        cy.pause()
        cy.get('#menuTop > .nav > :nth-child(2) > :nth-child(1)').click()
        cy.url().should('eq', 'https://www.gamecash.fr/client/compte.html')
    })

    /*it('Se déconnecter', () => {
        cy.get('.disconnection').click()
    })*/
})