class Dynamic {

    get navigate() { return cy.get(".card-up")}
    get dynamicLink() { return cy.contains("Dynamic Properties")}
    get text() { return cy.get("#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(1) > p")}
    get disabled() { return cy.get("#enableAfter")}
    get color() { return cy.get("#colorChange")}
    get button() { return cy.contains("Visible After 5 Seconds")}



    navigateToDynamic(){
        this.navigate.eq(0).click()
    }
    dynamicLinkClick(){
        this.dynamicLink.click()
    }

    textCheck(textAssert){
        this.text.should("have.text", textAssert)
    }
    checkDisabled(dis){
        this.disabled.should("have.attr", dis)
        cy.wait(5000)
        this.disabled.should("not.have.attr", dis)
    }

    checkColor(colorr){
        this.color.should("have.css", "color", colorr)
    }

    checkButton(){
        this.button.should("be.visible")
    }


}

export const dynamic = new Dynamic()