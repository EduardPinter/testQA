class Shopping {

    get womenNavigationLink() { return cy.get(".sf-with-ul")}
    get checkHoverClass() { return cy.get("#block_top_menu > ul > li:nth-child(1)")}
    get tshirts() { return cy.get(".first-in-line-xs.submenu-container a[title='T-shirts']")}
    get fadedTshirt() { return cy.get(".product-name")}
    get size() { return cy.get("select[id='group_1']")}
    get color() { return cy.get("#color_to_pick_list > li:nth-child(2) > a")}
    get quantity() { return cy.get("input[id='quantity_wanted'")}
    get addToCart() { return cy.get("p#add_to_cart > button[name='Submit']")}
    get textTitle() { return cy.get("#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2")}
    get shirtName() { return cy.get("#layer_cart_product_title")}
    get chosenAttr() { return cy.get("#layer_cart_product_attributes")}
    get shirtQuantity() { return cy.get("#layer_cart_product_quantity")}
    get price() { return cy.get("#layer_cart_product_price")}
    get xClose() { return cy.get(".cross")}
    get cart() { return cy.get("a[title='View my shopping cart']")}
    get cartQuantity() { return cy.get(".quantity")}
    get checkout() { return cy.get("a[title='Check out']")}
    get quantityCheck() { return cy.get(".ajax_cart_quantity")}




    hoverAssert(hover){
        this.womenNavigationLink.realHover()
        this.checkHoverClass.should("have.class", hover)
    }
    clickTshirtSection(){
        this.tshirts.click()
    }
    clickFadedShirt(){
        this.fadedTshirt.eq(2).click()
    }
    pickSize(m){
        this.size.select(m)
    }

    pickColor(){
        this.color.click()
    }

    setQuantity(number){
        this.quantity.clear().type(number)
    }

    addToCartClick(){
        this.addToCart.realClick()
        cy.wait(1000)
        this.addToCart.realClick()
        cy.wait(2500)
    }

    verifyingOrder(textTitle,productTitle,shirtColor,shirtSize,quantityTwo,priceOfTwo){
        this.textTitle.should("have.text", textTitle)
        this.shirtName.should("have.text", productTitle)
        this.chosenAttr.should("have.text", `${shirtColor}, ${shirtSize}`)
        this.shirtQuantity.should("have.text", quantityTwo)
        this.price.should("have.text", priceOfTwo)
    }

    proceedingWithOrder(numberTwo){
        this.xClose.click()
        this.cart.realHover()
        this.cartQuantity.should("have.text", numberTwo)
        this.checkout.click()
        cy.screenshot()
        this.quantityCheck.should("have.text", numberTwo)
    }

}

export const shopping = new Shopping()