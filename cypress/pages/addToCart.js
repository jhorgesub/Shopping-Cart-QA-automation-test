class addToCartLocators {
    constructor(){
        this.loginRegisterBtn = '[id="customer_menu_top"]'
        this.loginNameInput = '[id="loginFrm_loginname"]'
        this.passwordInput = '[id="loginFrm_password"]'
        this.loginBtn = '[title="Login"]'
        this.categoryBtn = '[href="https://automationteststore.com/index.php?rt=product/category&path=68"]';
        this.tshirts = ".contentpanel [class='col-md-2 col-sm-2 col-xs-6 align_center']:nth-of-type(2) [width]"
        this.oneTshirt = "[class='col-md-3 col-sm-6 col-xs-12']:nth-of-type(3) [width]"
        this.addToCart = '[class="cart"]'
        this.checkout = '[id="cart_checkout1"]'
        this.confirmOrder = '[id="checkout_btn"]'
    }
}

    export default class login {
        constructor(){
            this.locators = new addToCartLocators();
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

        getCategoryBtn(){
            return cy.get(this.locators.categoryBtn)
        }

        getTshirts(){
            return cy.get(this.locators.tshirts)
        }

        getOneTshirt(){
            return cy.get(this.locators.oneTshirt)
        }

        getAddToCart(){
            return cy.get(this.locators.addToCart)
        } 

        getCheckout(){
            return cy.get(this.locators.checkout)
        }

        getConfirmOrder(){
            return cy.get(this.locators.confirmOrder)
        }
        
    }