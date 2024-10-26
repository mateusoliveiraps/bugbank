const elements = require('./elements').ELEMENTS

class Transfer {

    clickBtnTransfer(){
        cy.get(elements.btnTransfer).click()
    }

    writeAccount(account){
        cy.get(elements.inputAccount).type(account)
    }

    writeDigit(digit){
        cy.get(elements.inputDigit).type(digit)
    }

    writeTransferValue(){
        cy.get(elements.inputTransferValue).type('20', {force: true})
    }

    writeDescription(){
        cy.get(elements.inputDescription).type('tranferencia', {force: true})
    }

    btnTransferNow(){
        cy.contains(elements.btnTransferNow).click({ force: true })
    }

    clickClose(){
        cy.contains(elements.btnClose).click({ force: true })
    }

    validateTransfer(){
        cy.contains(elements.mTransferConfirm, 'Transferencia realizada com sucesso')
    }

    validatevalidateTransferWithoutInformation(){
        cy.contains(elements.inputWarning, 'transferValue must be a `number` type, but the final value was: `NaN` (cast from the value `""`).')
    }
}

export default new Transfer()