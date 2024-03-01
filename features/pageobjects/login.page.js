// const { $ } = require('@wdio/globals')
// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();

const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {return $('#user-name');}
    get inputPassword () {return $('#password');}
    get btnLogin () {return $('#login-button');}
    errorLockedOutUser = (message) => $('/html/body/div[1]/div/div[2]/div[1]/div/div/form/div[3]/h3')

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username) {
        await this.inputUsername.waitForDisplayed({timeout : 2500});
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }
    // // async login () {
    // //     await this.inputUsername.setValue(process.env.USERNAME_lockedOutUser);
    // //     await this.inputPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
    // //     await this.btnLogin.click();
    // //     console.log('USERNAME = ${process.env.USERNAME_LockedOutUser}')
    // }

    async validateLockedOutUserError (message) {
        await this.errorLockedOutUser(message).waitForDisplayed()
        await expect(this.errorLockedOutUser(message)).toBeDisplayed()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();