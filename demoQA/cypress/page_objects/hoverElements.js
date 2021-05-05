class HoverElem {

    get navigate() { return cy.get(".card-up")}
    get toolTipsLink() { return cy.contains("Tool Tips")}
    get button() { return cy.get("#toolTipButton")}
    get messageButton() { return cy.get('.tooltip-inner')}
    get textField() { return cy.get("#toolTipTextField")}
    get messageText() { return cy.get('#textFieldToolTip > .tooltip-inner')}



    navigateToToolTips(){
        this.navigate.eq(3).click()
    }
    toolTipsLinkClick(){
        this.toolTipsLink.click()
    }

    buttonHover(){
        this.button.trigger("mouseover")
    }

    messageHoverButton(msg){
        this.messageButton.should("have.text", msg)
    }

    textFieldHover(){
        this.textField.trigger("mouseover")
    }

    messageHoverText(msg){
        this.messageText.should("have.text", msg)
    }

}

export const hoverElem = new HoverElem()