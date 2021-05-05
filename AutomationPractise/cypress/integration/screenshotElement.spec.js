/// <reference types="Cypress" />

import {screenshotElement} from "../page_objects/screenshotElement"

var data = require("../fixtures/screenshotElement.json")

describe("Using filter input field", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Clicking on the next button", ()=> {
        screenshotElement.buttonClickTwice()
    })

    it("Check if the properties for the picture are valid", ()=> {
        screenshotElement.sliderCSS(data.element.pixels)
        screenshotElement.sliderPicture(data.element.src)
    })

    it("Screenshot the container", ()=> {
        screenshotElement.containerScreenshot()
    })




})