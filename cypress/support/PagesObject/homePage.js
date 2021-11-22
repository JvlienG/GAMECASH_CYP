class homePage{
    
    goToHomePage(){
        return cy.visit('')
    }

    isLogged(){
        return cy.get('.content').should('be.visible')
    }
}

export default homePage