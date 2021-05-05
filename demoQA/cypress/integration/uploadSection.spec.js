/// <reference types="Cypress" />

import {uploadSec} from "../page_objects/upload"

const data = require("../fixtures/data.json")

describe("Dynamic Properties", ()=> {

    before(()=> {
        cy.visit("/")
    })

    it("Navigate to 'Upload and Download'", ()=> {
        uploadSec.navigateUpload()
        uploadSec.uploadLinkClick()
    })

    it("Select file from the disk", ()=> {
        uploadSec.selectFile(data.uploadSection.filePath)
    })

    it("Verifying the alert message for the uploaded file", ()=> {
        uploadSec.verifyMessage(data.uploadSection.filePath)
    })

})