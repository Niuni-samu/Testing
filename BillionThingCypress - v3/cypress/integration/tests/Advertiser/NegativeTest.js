/// <reference types="cypress" />

import HeaderPage from '../../pages/HeaderPage'
import LoginPage from '../../pages/LoginPage'
import AdvertiserPage from '../../pages/AdvertiserPage'
import AdminPage from '../../pages/AdminPage'




describe('Billionthing Advertiser Test', function()  {

    it('Advertiser', function()  {
    
        const headerpage = new HeaderPage()
        const loginpage = new LoginPage()
        const advertiserpage = new AdvertiserPage()
        const adminpage = new AdminPage()
        const faker = require('faker');
       
        
        cy
            .fixture('advertiser')
            .then( testvaliddata => {
            

                headerpage.visit()
                headerpage.signinHeader()
                loginpage.fillUsername(testvaliddata.ValidUsername)
                loginpage.fillPassword(testvaliddata.ValidPassword)
                loginpage.login()
                headerpage.profileMenu();
                headerpage.myProfile();
                adminpage.myAdvertisings();
                adminpage.adProfile();
                adminpage.creatAdvertisments();
                advertiserpage.fillTitle(faker.name.title())
                advertiserpage.selectCategory()
                advertiserpage.fillDescription(faker.name.jobTitle())
                advertiserpage.nextBtn1()
                advertiserpage.checkAdvertsingInfoPage()
              
        
            })

     })

})