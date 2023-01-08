import { authReducer } from './auth'
import * as type from './auth'
// Проверка на первичное значение
test('Должен возращать изначальное значение', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
// Группа заявок
test('Должен отображать заявку на токен', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'TOKEN_REGUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать заявку на регистрацию', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'REGISTER_REGUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать заявку на выход', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGOUT_REGUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать заявку на изменение пароля', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'FORGOT_PASSWORD_REQUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать заявку на восстановление пароля', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'RESET_PASSWORD_REQUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать заявку на логин', () => {
    const initialState = {
        isRequired: false,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGIN_REGUEST' })).toEqual(
        {
            isRequired: true,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
// Проверка данных при успехе
test('Должен отображать успешное завершение  заявки на токен', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'TOKEN_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать успешное завершение  заявки на логин', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGIN_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать успешное завершение  заявки на регистрацию', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'REGISTER_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать успешное завершение  заявки на выход', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGOUT_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать успешное завершение  заявки на изменение пароля', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'FORGOT_PASSWORD_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: true

        }
    )
})
test('Должен отображать успешное завершение  заявки на восстановление пароля ', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'RESET_PASSWORD_SUCCESS' })).toEqual(
        {
            isRequired: false,
            isRequiredError: false,
            isPasswordReguest: false

        }
    )
})
// Проверка данных при ошибке
test('Должен отображать данные при ошибке в заявке на токен', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'TOKEN_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать данные при ошибке в заявке на логин', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGIN_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать данные при ошибке в заявке на регистрацию', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'REGISTER_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать данные при ошибке в заявке на выход', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'LOGOUT_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать данные при ошибке в заявке на изменение пароля', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'FORGOT_PASSWORD_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})
test('Должен отображать данные при ошибке в заявке на восстановление пароля', () => {
    const initialState = {
        isRequired: true,
        isRequiredError: false,
        isPasswordReguest: false

    }
    expect(authReducer(initialState, { type: 'RESET_PASSWORD_ERROR' })).toEqual(
        {
            isRequired: false,
            isRequiredError: true,
            isPasswordReguest: false

        }
    )
})