/// <reference types="Cypress" />

import {dragDrop} from "../page_objects/dragDrop"

const data = require("../fixtures/data.json")

describe("Drag And Drop", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Navigate to 'Droppable'", ()=> {
        dragDrop.navigateToDroppable()
        dragDrop.droppableLinkClick()
    })

    it("Dropping smaller rectangle into bigger one", ()=> {
        dragDrop.dragAndDrop()
    })

    it("Checking if the color of the bigger rectangle is yellow", ()=> {
        dragDrop.checkCSS(data.dragDrop.color)
    })





})