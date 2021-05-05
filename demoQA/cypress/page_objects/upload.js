class UploadSec {

    get navigate() { return cy.get(".card-up")}
    get toolTipsLink() { return cy.contains("Upload and Download")}
    get file() { return cy.get("input[id='uploadFile']")}
    get messageText() { return cy.get("#uploadedFilePath")}



    navigateUpload(){
        this.navigate.eq(0).click()
    }
    uploadLinkClick(){
        this.toolTipsLink.click()
    }

    selectFile(path){
        this.file.attachFile(path)
    }

    verifyMessage(path){
        this.messageText.should("have.text", `Thanks, you have selected ${path} file to Upload`)
    }

}

export const uploadSec = new UploadSec()