class DragDrop {

    get navigate() { return cy.get(".card-up")}
    get droppableLink() { return cy.contains("Droppable")}
    get draggableBox() { return cy.get("#draggable")}
    get droppableBox() { return cy.get("#droppable")}



    navigateToDroppable(){
        this.navigate.eq(4).click()
    }
    droppableLinkClick(){
        this.droppableLink.click()
    }

    dragAndDrop(){
        this.draggableBox.trigger("mousedown", { which : 1})
        this.droppableBox.trigger("mousemove")
        this.draggableBox.trigger("mouseup")
    }
    checkCSS(color){
        this.droppableBox.should("have.css", "background-color", color)
    }


}

export const dragDrop = new DragDrop()