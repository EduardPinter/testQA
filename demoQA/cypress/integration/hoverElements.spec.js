/// <reference types="Cypress" />

import {hoverElem} from "../page_objects/hoverElements"

const data = require("../fixtures/data.json")

describe("Dynamic Properties", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Navigate to 'Tool Tips'", ()=> {
        hoverElem.navigateToToolTips()
        hoverElem.toolTipsLinkClick()
    })

    it("Hovering over the button", ()=> {
        hoverElem.buttonHover()
        hoverElem.messageHoverButton(data.hoverElem.buttonHover)
    })

    it("Hovering over the text field", ()=> {
        hoverElem.textFieldHover()
        hoverElem.messageHoverText(data.hoverElem.fieldHover)
    })

})