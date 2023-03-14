class AmazonHomePage {

    searchTextBox() {
        return cy.get('#twotabsearchtextbox')
    }

    searchMagnifyLensButton() {
        return cy.get('#nav-search-submit-button')
    }

    cartIcon() {
        cy.get('.nav-cart-icon')
    }
}

export default AmazonHomePage;