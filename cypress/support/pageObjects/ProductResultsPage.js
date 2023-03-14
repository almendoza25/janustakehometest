class ProductResultsPage {

    amazonProduct1() {
        return cy.get('[data-asin="B00JT8470S"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
    }

    amazonProduct2() {
        return cy.get('[data-asin="B09876XDZ2"] > .sg-col-inner')
    }
}

export default ProductResultsPage;