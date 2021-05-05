/// <reference types="Cypress" />

import {dynamic} from "../page_objects/dynamicProperties"

const data = require("../fixtures/data.json")

describe("Dynamic Properties", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Navigate to 'Dynamic Properties'", ()=> {
        dynamic.navigateToDynamic()
        dynamic.dynamicLinkClick()
    })

    it("Checking if the text is written properly", ()=> {
        dynamic.textCheck(data.dynamicProp.randomId)
    })

    it("Checking if the button is enabled", ()=> {
      dynamic.checkDisabled(data.dynamicProp.attr)
    })

    it("Checking if the text of a button is red", ()=> {
        dynamic.checkColor(data.dynamicProp.color)
    })

    it("Checking if the button appeared after 5 seconds", ()=>{
        dynamic.checkButton()
    })

})