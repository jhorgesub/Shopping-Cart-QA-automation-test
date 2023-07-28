import loginPage from '../../pages/login.js'

describe('Logeo de pagina', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('Logueo valido', () => {
    
    const login = new loginPage()

    login.getLoginRegisterBtn().click();
    login.getLoginNameInput().type("JorgeS");
    login.getPasswordInput().type("0314092");
    login.getLoginBtn().click();
  })
})

describe('Logeo de pagina invalido por password incorrecto', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/')
  })

  it('Logueo invalido', () => {
    
    const login = new loginPage()

    login.getLoginRegisterBtn().click();
    login.getLoginNameInput().type("JorgeS");
    login.getPasswordInput().type("1234");
    login.getLoginBtn().click();
  })
})

