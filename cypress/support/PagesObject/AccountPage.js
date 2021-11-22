class AccountPage{

    goToLoginPage(){
        request = cy.get('#menuTop > .nav > :nth-child(2) > a').click()
        request += cy.url().should('eq','https://www.gamecash.fr/connexion.html')

        return request
    }
}
export default AccountPage