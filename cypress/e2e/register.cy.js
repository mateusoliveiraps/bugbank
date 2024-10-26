/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import register_page from "../support/pages/register/register_page"
import homepage_page from "../support/pages/homepage/homepage_page"

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
  })

  it('CT01 - Verifica se o usuário consegue se cadastrar na plataforma ', () => {
    const user = {
      email: randomEmail,
      name: randomName,
      password: '123',
      confirmPassword: '123'
    }

    homepage_page.clickBtnRegister()
    register_page.writeEmail(user.email)
    register_page.writeName(user.name)
    register_page.writePassword(user.password)
    register_page.writeConfirmPassword(user.confirmPassword)
    register_page.activateAddBalance()  
    register_page.clickSubmit()
    register_page.validateRegister()
  })

  it('CT02 - Cadastrar um usuário sem informar nenhum campo', () => {
    homepage_page.clickBtnRegister()
    register_page.clickSubmit()
    register_page.validateRegistrationWithoutInformation()
  })
})