class loginLocators {
    constructor(){
        this.loginRegisterBtn = '[id="customer_menu_top"]'
        this.loginNameInput = '[id="loginFrm_loginname"]'
        this.passwordInput = '[id="loginFrm_password"]'
        this.loginBtn = '[title="Login"]'

    }

}

export default class login {
    constructor(){
        this.locators = new loginLocators();
    }

    getLoginRegisterBtn(){
        return cy.get(this.locators.loginRegisterBtn)
    }


    getLoginNameInput(){
        return cy.get(this.locators.loginNameInput)
    }

    getPasswordInput(){
        return cy.get(this.locators.passwordInput)
    }

    getLoginBtn(){
        return cy.get(this.locators.loginBtn)
    }
    
}