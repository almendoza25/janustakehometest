/// <reference types="Cypress" />

import AmazonHomePage from '../support/pageObjects/AmazonHomePage'
import ProductResultsPage from '../support/pageObjects/ProductResultsPage'
import ProductPage from '../support/pageObjects/ProductPage'
import SuccessfullyAddedToCartPage from '../support/pageObjects/SuccessfullyAddedToCartPage'

describe('User is able to search Amazon products and add to cart', () => {

  it('User is able to find product by name and add to cart', () => {
    const amazonHomePage = new AmazonHomePage()
    const productResultsPage = new ProductResultsPage()
    const productPage = new ProductPage()
    const successfullyAddedToCartPage = new SuccessfullyAddedToCartPage()

    cy.visit(Cypress.env('url'))
    amazonHomePage.searchTextBox().type('Dymatize Elite Casein Protein Powder Chocolate')
    amazonHomePage.searchMagnifyLensButton().click()
    productResultsPage.amazonProduct1().click()
    productPage.addToCartButton().click()
    successfullyAddedToCartPage.checkAddedToCartText().should('contain.text', 'Added to Cart')
  })

  it('User is able to find product by product id (ASIN)', () => {
    const amazonHomePage = new AmazonHomePage()
    const productResultsPage = new ProductResultsPage()
    const productPage = new ProductPage()
    const successfullyAddedToCartPage = new SuccessfullyAddedToCartPage()

    cy.visit(Cypress.env('url'))
    amazonHomePage.searchTextBox().type('B09876XDZ2')
    amazonHomePage.searchMagnifyLensButton().click()
    productResultsPage.amazonProduct2().click()
    productPage.addToCartButton().click()
    successfullyAddedToCartPage.checkAddedToCartText().should('contain.text', 'Added to Cart')
  })
})