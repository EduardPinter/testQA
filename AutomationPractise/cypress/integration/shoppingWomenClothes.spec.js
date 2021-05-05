/// <reference types="Cypress" />

import {shopping} from "../page_objects/shopping"

var data = require("../fixtures/shopping.json")

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Hover over 'Women' navigation link", ()=> {
        shopping.hoverAssert(data.shop.hoverClass)
    })

    it("Click on 'T-shirts' section", ()=> {
        shopping.clickTshirtSection()
    })

    it("Click on 'Faded Short Sleeve T-shirts'", ()=> {
        shopping.clickFadedShirt()
    })

    it("Picking size M for the shirt", ()=> {
        shopping.pickSize(data.shop.size)
    })

    it("Picking Blue color shirt", ()=> {
        shopping.pickColor()
    })

    it("Setting quantity to 2 shirts", ()=> {
        shopping.setQuantity(data.shop.quantity)
    })

/*     it("Add to cart", ()=> {
                cy.get("p#add_to_cart > button[name='Submit']").click() 
                cy.get("p#add_to_cart > button[name='Submit']").click()     

                Does not work with just one click on the button.
                .click() is the default Cypress click function
    }) */

    it("Add to cart",()=> {
        shopping.addToCartClick()

        /* Using the real-event plugin i still have to do the command twice in order for 
        the program to recognise it, doing it once won't give me the pop-up */
        
    })

    it("Verifying the order",()=> {
        shopping.verifyingOrder(data.shop.boxTitle, data.shop.productTitle, data.shop.color, data.shop.size, data.shop.quantity, data.shop.price)
    }) 

    /*     it("Proceeding with order", ()=> {
        cy.xpath("/html//div[@id='layer_cart']//a[@title='Proceed to checkout']/span").click()

        // Proceeding in this way leaves my cart empty without anything in it

    }) */

       it("Proceeding with order", ()=> {
            shopping.proceedingWithOrder(data.shop.quantity)

        // Proceeding in this way still leaves my cart empty
        
    })


})