/// <reference types="cypress" />,
describe('Проверка страницы <Конструктор>', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000');
  })
  it('Передача булочки', () => {
    const dataTransfer = new DataTransfer();
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
  })
  it('Смена булочек в конструкторе', () => {
    const dataTransfer = new DataTransfer();
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(0).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
  })
  it('Открытие модального окна', () => {
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).click()
  })
  it('Закрытие модального окна', () => {
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).click()
    cy.get('.closeButton').click()
  })
  it('Отображение данных в модальном окне', () => {
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).click()
    cy.get('.modal_modal__sDNAf').contains("Флюоресцентная булка R2-D3")
  })
  it('Проверка работоспособности модального окна заказа',()=>{
    cy.get('.profile').click()
    cy.get('input[type="email"]').clear().type('ala1234765@gmail.com')
    cy.get('input[type="password"]').type('123')
    cy.get('button[type="submit"]').click()
    const dataTransfer = new DataTransfer();
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(4).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(6).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
    cy.get('.submit_order').click().wait(16000)
    cy.get('.modal_modal__sDNAf').contains("Дождитель готовности на орбитальной станции")
  })
})
