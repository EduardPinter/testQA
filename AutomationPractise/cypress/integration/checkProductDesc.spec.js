/// <reference types="Cypress" />
///<reference types="cypress-iframe" />

import {checkProdDesc} from "../page_objects/checkProdDesc"

var data = require("../fixtures/checkProdDesc.json")

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Search Blouse item", ()=> {
        checkProdDesc.searchFieldType(data.productDesc.product)
        checkProdDesc.searchButtonClick()
    })

    it("Hover over the searched option", ()=>{
        checkProdDesc.productLinkHover()
    })

    it("Click on Quick View of the Blouse", ()=> {
        checkProdDesc.quickViewClick()
    })

    it(" Item Description validation", ()=> {
        checkProdDesc.wait()
        checkProdDesc.loadFrame()
        checkProdDesc.searchDesiredTextInFrame()
    })
})