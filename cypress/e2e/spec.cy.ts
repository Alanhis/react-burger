/// <reference types="cypress" />,
describe('Перенос объектов', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000');
  })
  it('passes', () => {
    const dataTransfer = new DataTransfer();
    cy.get('.ingredient-card_foodCard__xXuPN ').eq(1).trigger('dragstart', {dataTransfer})
    cy.get('.burger-constructor_IngredientList__nlhWm').trigger('drop',{dataTransfer})
  })
})