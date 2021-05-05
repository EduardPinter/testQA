/// <reference types="Cypress" />

import {employee} from "../page_objects/employee"

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/", {failOnStatusCode: false})
        employee.submitClick()
    })

    it("Navigate to Admin/User Management/Users", ()=> {
        employee.routing()
    })

    it("Verify that the numbers on the bottom are equal to the number of lines", ()=> {
        employee.verifyEquality()

    })

    it("Printing all the usernames from the rows", ()=> {
        employee.printUsers()

    })  
    
})