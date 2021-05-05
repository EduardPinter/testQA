class ScreenshotElement {

    get nextButton() { return cy.get(".bx-next")}
    get homeslider() { return cy.get("ul[id='homeslider']")}
    get homesliderPicture() { return cy.get("#homeslider > li:nth-child(4) > a > img")}
    get sliderContainer() { return cy.get(".bx-viewport")}


    buttonClickTwice(){
        this.nextButton.click()
        this.wait()
        this.nextButton.click()
    }
    sliderCSS(pixels){
        this.homeslider.should('have.css', "left", pixels)
    }
    sliderPicture(link){
        this.homesliderPicture.should("have.attr", "src").should("include", link)
    }
    containerScreenshot(){
        this.sliderContainer.screenshot()
    }

    wait(){
        cy.wait(1500)
    }

}

export const screenshotElement = new ScreenshotElement()