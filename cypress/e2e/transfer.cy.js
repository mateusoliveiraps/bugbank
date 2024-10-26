/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import register_page from "../support/pages/register/register_page"
import homepage_page from "../support/pages/homepage/homepage_page"
import transfer_page from '../support/pages/transfer/transfer_page';

const elements = require('../support/pages/transfer/elements').ELEMENTS
const randomNameReceive = faker.person.fullName();
const randomEmailReceive = faker.internet.email();

const randomNameSend = faker.person.fullName();
const randomEmailSend = faker.internet.email();

describe('Tranferência bancária', () => {
  let outAccountNumber
  let outDigitNumber
    beforeEach(() => {      
      cy.visit('https://bugbank.netlify.app/')

      const receive = {
        email: randomEmailReceive,
        name: randomNameReceive,
        password: '123',
        confirmPassword: '123'
      }

      const send = {
        email: randomEmailSend,
        name: randomNameSend,
        password: '123',
        confirmPassword: '123'
      }

      
    /// Realizar cadastro Recebedor
        homepage_page.clickBtnRegister()
        register_page.writeEmail(receive.email)
        register_page.writeName(receive.name)
        register_page.writePassword(receive.password)
        register_page.writeConfirmPassword(receive.confirmPassword)
        register_page.activateAddBalance()  
        register_page.clickSubmit()
        register_page.validateRegister()

        cy.get(elements.mAccountNumber).then(el =>{
          const account = el[0].innerText.split(' ')
          const accountId = account[2].split('-')

          outAccountNumber = accountId[0]
          outDigitNumber = accountId[1]
        })

        register_page.clickClose()
        homepage_page.writeEmail(receive.email)
        homepage_page.writePassword(receive.password)
        homepage_page.clickBtnAccess()
        transfer_page.clickClose()
        
    ///
        homepage_page.clickBtnRegister()
        register_page.writeEmail(send.email)
        register_page.writeName(send.name)
        register_page.writePassword(send.password)
        register_page.writeConfirmPassword(send.confirmPassword)
        register_page.activateAddBalance()  
        register_page.clickSubmit()
        register_page.validateRegister()
        register_page.clickClose()

    ///
        homepage_page.writeEmail(send.email)
        homepage_page.writePassword(send.password)
        homepage_page.clickBtnAccess()
    })

    it('CT04 - Realizar uma transferência para uma conta existente', () => {
        transfer_page.clickBtnTransfer()
        transfer_page.writeAccount(outAccountNumber)
        transfer_page.writeDigit(outDigitNumber)
        transfer_page.writeTransferValue()
        transfer_page.writeDescription()
        transfer_page.btnTransferNow()
        transfer_page.validateTransfer()
    })

    it('CT05 - Realizar uma transferência sem informar nenhum campo', () => {
        transfer_page.clickBtnTransfer()
        transfer_page.btnTransferNow()
        transfer_page.validatevalidateTransferWithoutInformation()
    })
})