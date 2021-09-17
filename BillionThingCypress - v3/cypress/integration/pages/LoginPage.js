/// <reference types="cypress" />

class LoginPage
{
    fillUsername(value)
    {
        const field = cy.get(':nth-child(1) > #username')
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field = cy.get('#password')
        field.type(value)
        return this
    }

    login()
    {
        const button = cy.get('#signIn')
        button.click()
    }

}
export default LoginPage