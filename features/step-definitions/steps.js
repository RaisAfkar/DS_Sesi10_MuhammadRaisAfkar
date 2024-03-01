const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

// const pages = {
//     login: LoginPage
// }

Given (/^User is on the login page$/, async() => {
    await LoginPage.open()
})

When (/^user login with "(.*)" credentials$/, async(username) => {
    await LoginPage.login(username)
})

Then (/^user should see homepage$/, async() => {
    await HomePage.validateHomePage()
})

Then (/^user should see error (.*)"$/, async(message) => {
    await LoginPage.validateLockedOutUserError(message)
})


// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });


