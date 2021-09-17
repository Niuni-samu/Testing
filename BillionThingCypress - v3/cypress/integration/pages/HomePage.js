/// <reference types="cypress" />

class HomePage
{
    registerBusiness()
    {
        cy.get('.asd > .btn')
        .click()
    }

    service()
    {
        const button = cy.get('#service')
        button.click()
    }
    submit()
    {
        const button = cy.get('.text-right > .btn')
        button.click()
    }

}
export default HomePage
