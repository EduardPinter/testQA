class CheckProdDesc {

    get searchField() { return cy.get("#search_query_top")}
    get searchButton() { return cy.get("button[name=submit_search]")}
    get productLink() { return cy.get(".product_img_link")}
    get quickViewOption() { return cy.get(".quick-view")}
    get searchFrameText() { return cy.get('.fancybox-iframe')}

    searchFieldType(word){
        this.searchField.type(word)
    }
    searchButtonClick(){
        this.searchButton.click()
    }
    productLinkHover(){
        this.productLink.trigger("mouseover")
    }
    quickViewClick(){
        this.quickViewOption.click()
    }
    searchDesiredTextInFrame(){
        this.searchFrameText.then($iframe => {
            const $body = $iframe.contents().find('p').eq(3)
            cy.wrap($body).should("have.text", "Short sleeved blouse with feminine draped sleeve detail.")
          })
    }
    wait(){
        cy.wait(1500)
    }
    loadFrame(){
        cy.frameLoaded(".fancybox-iframe")
    }

}

export const checkProdDesc = new CheckProdDesc()