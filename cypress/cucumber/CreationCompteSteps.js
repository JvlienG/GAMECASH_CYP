/// <reference types="cypress"/>

const { random } = require("lodash")

// Variables 

describe('Création compte', () => {
    it('Accès page compte', () => {
        cy.get('#menuTop > .nav > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.gamecash.fr/connexion.html')
    })

    it('renseignement de l\'Email', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.creationDatas) { 
                cy.get('#client_email').type(gamecashDatas.email)
                cy.get(':nth-child(2) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
            }
        })
    })

    it('Renseignement Password', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.creationDatas) { 
                cy.get('#client_password').type(gamecashDatas.password)
                cy.get('#client_checkpassword').type(gamecashDatas.password)
            }
        })
    })

    it('Renseignement informations', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.creationDatas) { 
                cy.get('#client_nickname').type(gamecashDatas.nickameCrea)

                if(gamecashDatas.genre == 'f')
                    cy.get('#client_civility').select(1)
                else if (gamecashDatas.genre =='h')
                    cy.get('#client_civility').select(2)

                cy.get('#client_name').type(gamecashDatas.nom)
                cy.get('#client_firstname').type(gamecashDatas.prenom)
                cy.get('#client_gsm').type(gamecashDatas.portable)

                cy.get('#client_birthdate').click()
                cy.get('#ui-datepicker-div').should('be.visible')
                cy.get('#client_birthdate').clear()
                cy.get('#client_birthdate').type(gamecashDatas.birthDate)
            }
        })
    })

    it('Renseignement adresse', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.creationDatas) { 
                cy.get('#client_address').type(gamecashDatas.adresse)
                cy.get('#client_country').select(gamecashDatas.pays.toUpperCase())
                cy.get('#client_zip').type(gamecashDatas.zipCode)
                cy.get('#client_city').type(gamecashDatas.city)
            }
        })
    })

    it('Renseignement additionnel', () => {
        cy.readFile('cypress/fixtures/gamecashDatas.json').then(data => {
            for (const gamecashDatas of data.creationDatas) { 
                cy.log(gamecashDatas.number)
                cy.get('#nextGenBlock > :nth-child('+gamecashDatas.number+') > input').click()

                if(condition == "1")
                    cy.get('#cgv').click()
                if(gamecashOffer == "1")
                    cy.get('#newsletter').click()
                if(partenaireOffer == "1")
                    cy.get('#partner').click()
            }
        })
    })

    it('Renseignement additionnel', () => {
        cy.log(gamecashDatas.number)
        cy.get('#nextGenBlock > :nth-child('+gamecashDatas.number+') > input').click()

        if(condition == "1")
            cy.get('#cgv').click()
        if(gamecashOffer == "1")
            cy.get('#newsletter').click()
        if(partenaireOffer == "1")
            cy.get('#partner').click()
    })




})