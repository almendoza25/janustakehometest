This is the take home project for the role of Test Engineer at Janus. It contains test cases to verify that products can be added to the cart on Amazon.com. It performs a search by product name and product id (ASIN). To install project, run 'npm i' on terminal. I created a gitignore file to remove node_modules since it's big from uploading to github. It should install when you run npm i.

- AmazonProductTests.cy.js is the main test file that contains the test cases. It is found under e2e folder
- The Page Objects can be found under support/pageObjects
- You can run the test file on command line by running 'npm run test'
- A video of the test run can be found under videos folder after running npm run test
- If you would like to use the Cypress Test Runner as the UI to run the test, you can run 'npm run cypressTestRunner' which I have also configured
