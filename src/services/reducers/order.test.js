import { orderReducer } from './order'

// Проверка на первичное значение
test('Должен возращать изначальное значение', () => {
    expect(orderReducer(undefined, { type: undefined })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            orderNumber: 0,
            isOpenModal: false,
        }
    )
})
// Группа заявок
test('Должен отображать заявку на заказ', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        orderNumber: 0,
        isOpenModal: false,
    }
    expect(orderReducer(initialState, { type: 'ORDER_DATA_REQUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            orderNumber: 0,
            isOpenModal: false,
        }
    )
})
test('Должен отображать успешное завершение заявки на заказ', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        orderNumber: 0,
        isOpenModal: false,
    }
    expect(orderReducer(initialState, { type: 'ORDER_DATA_SUCCESS', payload: { success: true, order: { number: 34888 } } })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            orderNumber: 34888,
            isOpenModal: true,
        }
    )
})
test('Должен отображать ошибку при заявке на заказ', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        orderNumber: 0,
        isOpenModal: false,
    }
    expect(orderReducer(initialState, { type: 'ORDER_DATA_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            orderNumber: 0,
            isOpenModal: false,
        }
    )
})
test('Должен закрывать модальное окно', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        orderNumber: 34888,
        isOpenModal: true,
    }
    expect(orderReducer(initialState, { type: 'MODAL_CLOSE' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            orderNumber: 0,
            isOpenModal: false,
        }
    )
})