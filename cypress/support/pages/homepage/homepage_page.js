const elements = require('./elements').ELEMENTS


class Homepage {

    writeEmail(email){
        cy.get(elements.divAccess).find(elements.inputEmail).type(email, {force: true})
    }

    writePassword(password){
        cy.get(elements.divAccess).find(elements.inputPassword).type(password, {force: true})
    }

    clickBtnAccess(){
        cy.contains(elements.btnAccess).click()
    }

    clickBtnRegister(){
        cy.contains(elements.btnRegister).click()
    }

}

export default new Homepage()