/// <reference types="cypress" />

class AdvertiserPage
{
    selectRole()
    {
        const role = cy.get("//input[@id='advertiser']")
        role.click()
       
        
    }

    clickSubmitBtn()
    {
        const submitBtn = cy.get("//button[normalize-space()='Submit']")
        submitBtn.click()
    }

    fillUserID()
    {
        const userID = cy.get('')
        submitBtn.click()
    }
    fillTitle(value)
    {
        const title = cy.get(':nth-child(1) > .col-lg-7 > .form-control')
        title.type(value)
        return this
    }
    selectCategory()
    {
        cy.get('#category')
        .select('Saloon')
        //.should('have.value','Saloon')


    }

    fillDescription (value)
    {
        const description = cy.get(':nth-child(3) > .col-lg-7 > .form-control')
        description.type(value)
        return this
    }
    nextBtn1()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()

    }
    checkAdvertsingInfoPage(){

        cy.get('.card-big-info-title').should('have.length',2)

    }

    fileUpload(value)
    {
        const pcimg = 'images/ProfilePic.png';
        cy.get('#image').attachFile(pcimg);
        
        
    }
    nextBtn2()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()
    }
    addressNo(value)
    {
        const addresNo = cy.get('#addressNo')
        addresNo.type(value)
        return this
    }
    addressLine1(value)
    {
        const addresLine1 = cy.get('#addressLine1')
        addresLine1.type(value)
        return this
    }
    addressLine2(value)
    {
        const addresLine2 = cy.get('#addressLine2')
        addresLine2.type(value)
        return this
    }
    province(value)
    {
        const province = cy.get('#province')
        province.type(value)
        return this
    }
    postalcode(value)
    {
        const province = cy.get('#postalCode')
        province.type(value)
        return this
    }
    Telephone1(value)
    {
        const tele1 = cy.get('#telephone_one')
        tele1.type(value)
        return this
    }
    Telephone2(value)
    {
        const tele2 = cy.get('#telephone_two')
        tele2.type(value)
        return this
    }
    Email(value)
    {
        const email = cy.get('#email')
        email.type(value)
        return this
    }
    nextBtn3()
    {
        const nextBtn = cy.get('.next > .btn')
        nextBtn.click()
    }




    //Validation 
    





}
export default AdvertiserPage