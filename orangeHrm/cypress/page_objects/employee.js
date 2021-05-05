class Employee {

    get submit() { return cy.get("input[type='submit']")}
    get expense() { return cy.get("#menu_expense_viewExpenseModule > a > span.left-menu-title")}
    get expenseClaims() { return cy.get("#menu_expense_Claims > a > span.left-menu-title")}
    get view() { return cy.get("#menu_expense_viewExpenseClaims > span.left-menu-title")}


    submitClick(){
        this.submit.click()
    }

    routing(){
        this.expense.click()
        this.expenseClaims.click()
        this.view.click()
        cy.wait(8000)
    }

    verifyEquality(){
        cy.frameLoaded("#noncoreIframe")

        cy.xpath('//*[@id="noncoreIframe"]').then(function($iFrame){

            const iFrameLenght = $iFrame.contents().find("tr.dataRaw")
            const spanText = $iFrame.contents().find("#frmList_ohrmListComponenttotal")

            cy.wrap(spanText).should("have.text", `${iFrameLenght.length}`)

         })  
    }

    printUsers(){
        const idArray = []
         cy.frameLoaded("#noncoreIframe")

         cy.wait(2000)

        cy.xpath('//*[@id="noncoreIframe"]').then(function($iFrame){

            const iFrameLenght = $iFrame.contents().find("tr.dataRaw")
    
            for(var i=1; i<=iFrameLenght.length; i++){

                const iFrameContent = $iFrame.contents().find(`#resultTable > tbody > tr:nth-child(${i}) > td:nth-child(1) > a`).text()
                idArray.push(iFrameContent)

            }

            cy.log(idArray)
         }) 
    }

}

export const employee = new Employee()