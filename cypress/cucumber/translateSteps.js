import { Given, And, When, Then, After, Before } from "cypress-cucumber-preprocessor/steps";

Given(/I open the translation page/, () => {
    cy.visit('/translator')
    cy.url().should('eq','https://www.deepl.com/translator')
})

When(/I change translation language from "([^"]*)" to "([^"]*)"/, (source, target) => {
    cy.get('.lmt__language_container > .lmt__language_select > .lmt__language_select__active > .lmt__language_select__opener').click()
    cy.get('.lmt__language_select__menu').should("be.visible")
    cy.get('[dl-test="translator-lang-option-'+source+'"] > div').click()

    cy.get('.lmt__language_container_prim > .lmt__language_select > .lmt__language_select__active > .lmt__language_select__opener').click()
    cy.get('.lmt__language_select__menu').should("be.visible")
    cy.get('[dl-test="translator-lang-option-fr-'+target+'"] > div').click()

})

And(/I write "([^"]*)" in the translation input/, (sentence) => {
    cy.get('.lmt__source_textarea').type(sentence)
})

Then(/The translation output should equal "([^"]*)"/, (translated) => {
    cy.get('#target-dummydiv').should('contain', translated)
})