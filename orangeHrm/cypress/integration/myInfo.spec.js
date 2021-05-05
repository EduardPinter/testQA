/// <reference types="Cypress" />

import {myInfo} from "../page_objects/myInfo"

const data = require("../fixtures/data.json")

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/", {failOnStatusCode: false})
        myInfo.submitClick()
    })

    it("Navigate to Admin/User Management/Users", ()=> {
        myInfo.usersClick()
    })

    it("Verify personal details", ()=> {
        myInfo.verifyFirstName(data.personalDetails.firstName)
        myInfo.verifyMiddleName(data.personalDetails.middleName)
        myInfo.verifyLastName(data.personalDetails.lastName)
        myInfo.verifyId(data.personalDetails.id)
        myInfo.verifyBirthday(data.personalDetails.birthday)
        myInfo.verifyMaritalStatus(data.personalDetails.maritStatus)
        myInfo.verifyGender(data.personalDetails.gender)
        myInfo.verifyNationality(data.personalDetails.nationality)
        myInfo.verifyLicExpire(data.personalDetails.expire)
    })

    
    
})