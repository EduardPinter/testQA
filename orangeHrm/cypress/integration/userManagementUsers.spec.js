/// <reference types="Cypress" />

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/", {failOnStatusCode: false})
        cy.get("input[type='submit']").click()
    })

    it("Navigate to Admin/User Management/Users", ()=> {
        cy.get("#menu_admin_viewAdminModule > a > span.material-icons.collapsible-indicator").click()
        cy.get("#menu_admin_UserManagement > a > span.material-icons.collapsible-indicator").click()
        cy.get("#menu_admin_viewSystemUsers > .left-menu-title").click()
        cy.wait(13000)

        /*  in order to not get logged out i need to tell Cypress to wait 13 seconds in the same test
            otherwise if i put it into a new test to just cy.wait(), application will log out me out
            preventing me to finish the rest of the tests                                    */
    })

    it("Check if the number of lines is equals with 'Rows per page'", ()=> {

/*           const rowNumber1 = cy.get("#systemUserDiv > crud-panel > div > div > list > ul > li.page-size > div:first-child > ul > li:nth-child(3)").invoke("text").then(numberValue => cy.log(numberValue))

            cy.get("#systemUserDiv > crud-panel > div > div > list > ul > li.page-size > div > input").should(($input) => {
                const val = $input.val()
            })

       const rowNumber = cy.get("#systemUserDiv > crud-panel > div > div > list > ul > li.page-size > div > input").invoke("val").then(numberValue => cy.log(numberValue))
       console.log(Object.values(rowNumber))
        const stringToNumber = rowNumber[] */
        var valueOfRows = "";

        cy.get("#systemUserDiv > crud-panel > div > div > list > ul > li.page-size > div > input").invoke("val").then(val => valueOfRows = val)

        cy.log(valueOfRows)
        cy.get("#systemUserDiv > crud-panel > div > div > list > table > tbody").find('tr').should('have.length', valueOfRows)
    }) 


     it("Printing all the usernames from the rows", ()=> {

        var usernamesArray = []
        for(var i=1; i<=50; i++){
           cy.get(`#systemUserDiv > crud-panel > div > div > list > table > tbody > tr:nth-child(${i}) > td:nth-child(2) > ng-include > span`).invoke("html").then(function(html){
               usernamesArray.push(html)
           })
        }

        cy.log(usernamesArray)
    }) 

    
})