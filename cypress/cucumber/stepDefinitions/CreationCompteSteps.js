/// <reference types="cypress"/>

const { random } = require("lodash")

// Variables 

    //Créadtion de compte
        const emailCrea = 'test1@yopmail.com'
        const passwordCrea = 'azertyuiop'
        const nickameCrea = 'SuperU'
        const genre = 'h'
        const nom = 'West'
        const prenom = 'Julien'
        const portable = '0699492619'
        const birthDate = "01/01/1990"
        const adresse = "4 avenue Laurent Cely"
        const pays = 'be'
        const zipCode = "92000"
        const city = "Asnieres"
        const number = random(1,12)
        const condition = 1
        const gamecashOffer = 1
        const partenaireOffer = 0

describe('Création compte', () => {
    it('Accès page compte', () => {
        cy.get('#menuTop > .nav > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.gamecash.fr/connexion.html')
    })

    it('renseignement de l\'Email', () => {
        cy.get('#client_email').type(emailCrea)
        cy.get(':nth-child(2) > .blockPart > .form-horizontal > fieldset > .text-center > .col-xs-12 > .buttonDefault').click()
    })

    it('Renseignement Password', () => {
        cy.get('#client_password').type(passwordCrea)
        cy.get('#client_checkpassword').type(passwordCrea)
    })

    it('Renseignement informations', () => {
        cy.get('#client_nickname').type(nickameCrea)

        if(genre == 'f')
            cy.get('#client_civility').select(1)
        else if (genre =='h')
            cy.get('#client_civility').select(2)

        cy.get('#client_name').type(nom)
        cy.get('#client_firstname').type(prenom)
        cy.get('#client_gsm').type(portable)

        cy.get('#client_birthdate').click()
        cy.get('#ui-datepicker-div').should('be.visible')
        cy.get('#client_birthdate').clear()
        cy.get('#client_birthdate').type(birthDate)


    })

    it('Renseignement adresse', () => {
        cy.get('#client_address').type(adresse)
        cy.get('#client_country').select(pays.toUpperCase())
        cy.get('#client_zip').type(zipCode)
        cy.get('#client_city').type(city)
    })

    it('Renseignement additionnel', () => {
        cy.log(number)
        cy.get('#nextGenBlock > :nth-child('+number+') > input').click()

        if(condition == 1)
            cy.get('#cgv').click()
        if(gamecashOffer == 1)
            cy.get('#newsletter').click()
        if(partenaireOffer == 1)
            cy.get('#partner').click()
    })




})