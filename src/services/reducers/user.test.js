import { userReducer } from './user'

// Проверка на первичное значение
test('Должен возращать изначальное значение', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual(
        {
            email: null,
            name: null,
            isRequired: false,
            isRequiredError: false
        }
    )
})
// Группа заявок
test('Должен отображать заявку на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: false,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'USER_DATA_REGUEST' })).toEqual(
        {
            email: null,
            name: null,
            isRequired: true,
            isRequiredError: false
        }
    )
})
// Тест ошибки 
test('Должен отображать при ошбики на заявке на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: true,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'USER_DATA_ERROR' })).toEqual(
        {
            email: null,
            name: null,
            isRequired: false,
            isRequiredError: true
        }
    )
})
// Тест успешной отправки данных
test('Должен отображать при ответе на заявку на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: true,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'USER_DATA_SUCCESS', payload: { user: { email: "test@gmail.com", name: "test" } } })).toEqual(
        {
            email: "test@gmail.com",
            name: "test",
            isRequired: false,
            isRequiredError: false
        }
    )
})
// Группа заявок
test('Должен отображать заявку на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: false,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'UPDATE_DATA_REGUEST' })).toEqual(
        {
            email: null,
            name: null,
            isRequired: true,
            isRequiredError: false
        }
    )
})
// Тест ошибки 
test('Должен отображать при ошбики на заявке на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: true,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'UPDATE_DATA_ERROR' })).toEqual(
        {
            email: null,
            name: null,
            isRequired: false,
            isRequiredError: true
        }
    )
})
// Тест успешной отправки данных
test('Должен отображать при ответе на заявку на данные пользователя', () => {
    const initialState = {
        email: null,
        name: null,
        isRequired: true,
        isRequiredError: false
    }
    expect(userReducer(initialState, { type: 'UPDATE_DATA_SUCCESS', payload: { user: { email: "test@gmail.com", name: "test" } } })).toEqual(
        {
            email: "test@gmail.com",
            name: "test",
            isRequired: false,
            isRequiredError: false
        }
    )
})