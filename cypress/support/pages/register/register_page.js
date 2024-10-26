const elements = require('./elements').ELEMENTS

class Register {

    writeEmail(email){
        cy.get(elements.divRegister).find(elements.inputEmail).type(email, {force: true})
    }

    writeName(name){
        cy.get(elements.divRegister).find(elements.inputName).type(name, {force: true})
    }

    writePassword(password){
        cy.get(elements.divRegister).find(elements.inputPassword).type(password, {force: true})
    }

    writeConfirmPassword(confirmPassword){
        cy.get(elements.divRegister).find(elements.inputConfirmPassword).type(confirmPassword, {force: true})
    }

    activateAddBalance(){
        cy.get(elements.lblAddBalance).click({force: true})
    }

    clickSubmit(){
        cy.contains(elements.btnSubmit).click({force: true})
        cy.wait(1000)
    }

    register(){
        this.writeEmail()
        this.writeName()
        this.writePassword()
        this.writeConfirmPassword()
        this.activateAddBalance()
        this.clickSubmit()
    }

    validateRegister(){
        cy.contains(elements.pRegistrationConfirmationMessage, 'criada')
    }

    validateRegistrationWithoutInformation(){
        cy.get(elements.divRegister).contains(elements.pRegistrationWithoutConfirmation, 'É campo obrigatório')
    }

    clickClose(){
        cy.contains(elements.btnClose).click({force: true})
    }
}

export default new Register()