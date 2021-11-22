//<reference types="cypress" />

before(() => {
    cy.log('I run once before all tests')
    cy.visit('')
    cy.url().should('eq','https://www.gamecash.fr/')
})
    
beforeEach(() => {
    cy.log('I run before every test')
})
    
afterEach(() => {
    cy.log('I run after every test')
})
    
after(() => {
    cy.log('I run once after all tests')
})

describe('Connexion', () => {
    it('Se rendre sur la page de connexion', () => {
        cy.get('#menuTop > .nav > :nth-child(2) > a').click()
        cy.url().should('eq','https://www.gamecash.fr/connexion.html')
    })

    it('Remplir les champs', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.connexionDatas) { 
                cy.get('#login').type(gamecashDatas.login)
                cy.get('#password').type(gamecashDatas.password)
                if(gamecashDatas.keepConnect == 'true')
                    cy.get('.autoConnect') 
            }
        })
    })

    it('Se connecter', () => {
        cy.get(':nth-child(1) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
        cy.get('.content').should('be.visible')
    })
}) 

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

describe('Selectionner l\'article n', () => {
    it('Selectionne un article', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => { 
            for (const gamecashDatas of data.selectionDatas) {
                cy.get(':nth-child('+gamecashDatas.numSelect+') > .blockProduct-1 > .blockTitle > .title').click()
            }
        })
        
    })
})

describe('Ajout d\'un article au panier', () => {
    it('Ajout au panier', () => {
        cy.get('.buttonBuy').click()
        cy.wait(5000)
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

describe('Visualisation du panier', () => {
    it('Se rendre dans le panier', () => {
        if(cy.url() != 'https://www.gamecash.fr/panier.html'){
            cy.get('.basket').click()
            cy.url().should('eq','https://www.gamecash.fr/panier.html')
        }
    })
})

describe('Deconnexion', () => {
    it('selection mon compte', () => {
        cy.get('#menuTop > .nav > :nth-child(2) > :nth-child(1)').click()
        cy.url().should('eq', 'https://www.gamecash.fr/connexion.html')
    }),

    it('Se déconnecter', () => {
        cy.url().should('contains', 'connexion.html')
    })
})
