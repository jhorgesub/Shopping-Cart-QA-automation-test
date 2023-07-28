import loginPage from '../../pages/login.js'
import addToCartPage from '../../pages/addToCart.js'

describe('agregar al carrito', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com/')
    })
  
    it('agregar al carrito', () => {
      
      const login = new loginPage()
      const cart = new addToCartPage()
  
      login.getLoginRegisterBtn().click();
      login.getLoginNameInput().type("JorgeS");
      login.getPasswordInput().type("0314092");
      login.getLoginBtn().click();
      cart.getCategoryBtn().click();
      cart.getTshirts().click();
      cart.getOneTshirt().click();
      cart.getAddToCart().click();
      cart.getCheckout().click();
      cart.getConfirmOrder().click();
    })
  })