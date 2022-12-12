import { checkResponce } from "../../utils/checkResponse";
import { url } from "../../components/app/app"
import { getUserData } from "./user";
import { Dispatch } from "react";
import { History } from "history";
export const LOGIN_REGUEST: 'LOGIN_REGUEST' = 'LOGIN_REGUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const REGISTER_REGUEST: 'REGISTER_REGUEST' = 'REGISTER_REGUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR';

export const LOGOUT_REGUEST: 'LOGOUT_REGUEST' = 'LOGOUT_REGUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';

export const TOKEN_REGUEST: 'TOKEN_REGUEST' = 'TOKEN_REGUEST';
export const TOKEN_SUCCESS: 'TOKEN_SUCCESS' = 'TOKEN_SUCCESS';
export const TOKEN_ERROR: 'TOKEN_ERROR' = 'TOKEN_ERROR';

export const FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST' = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS' = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR: 'FORGOT_PASSWORD_ERROR' = 'FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR: 'RESET_PASSWORD_ERROR' = 'RESET_PASSWORD_ERROR';

export interface ILoginReguestAction {
    readonly type: typeof LOGIN_REGUEST
}
export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS
}
export interface ILoginErrorAction {
    readonly type: typeof LOGIN_ERROR
}
export type TLoginActions = | ILoginReguestAction | ILoginSuccessAction | ILoginErrorAction;
export interface IRegisterReguestAction {
    readonly type: typeof REGISTER_REGUEST
}
export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS
}
export interface IRegisterErrorAction {
    readonly type: typeof REGISTER_ERROR
}
export type TRegisterActions = | IRegisterReguestAction | IRegisterSuccessAction | IRegisterErrorAction;
export interface ILogoutReguestAction {
    readonly type: typeof LOGOUT_REGUEST
}
export interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS
}
export interface ILogoutErrorAction {
    readonly type: typeof LOGOUT_ERROR
}
export type TLogoutActions = | ILogoutReguestAction | ILogoutSuccessAction | ILogoutErrorAction;
export interface ITokenReguestAction {
    readonly type: typeof TOKEN_REGUEST
}
export interface ITokenSuccessAction {
    readonly type: typeof TOKEN_SUCCESS
}
export interface ITokenErrorAction {
    readonly type: typeof TOKEN_ERROR
}
export type TTokenActions = | ITokenReguestAction | ITokenSuccessAction | ITokenErrorAction | any; // Оставил any до нахождения возможноссти передачи данных без цикличности
export interface IForgotPasswordReguestAction {
    readonly type: typeof FORGOT_PASSWORD_REQUEST
}
export interface IForgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS
}
export interface IForgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR
}
export type TForgotPasswordActions = | IForgotPasswordReguestAction | IForgotPasswordSuccessAction | IForgotPasswordErrorAction;
export interface IResetPasswordReguestAction {
    readonly type: typeof RESET_PASSWORD_REQUEST
}
export interface IResetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS
}
export interface IResetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR
}
export type TResetPasswordActions = | IResetPasswordReguestAction | IResetPasswordSuccessAction | IResetPasswordErrorAction;

export type TAuthActions = | TLoginActions |TLogoutActions | TRegisterActions | TTokenActions | TResetPasswordActions | TForgotPasswordActions;
export const fetchLogin = (email:string, password:string, history:  History<unknown>) => (dispatch: Dispatch<TLoginActions>) => {

    dispatch({
        type: LOGIN_REGUEST
    })
    const usedData = {
        email: email,
        password: password
    }

    fetch(url + '/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usedData)
    }).then(checkResponce).then(data => {

        localStorage.setItem('refreshToken', data.refreshToken)
        document.cookie = ("accessToken=" + data.accessToken + "; max-age=1200")
        dispatch({
            type: LOGIN_SUCCESS
        });
        history.push('/')
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGIN_ERROR
        });
    })
}

export const updateToken = (setName:Function, setEmail: Function) => (dispatch: Dispatch<TTokenActions>) => {
    dispatch({
        type: TOKEN_REGUEST
    })
    fetch(url + '/auth/token', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkResponce).then(data => {


        dispatch({
            type: TOKEN_SUCCESS,
        });
        document.cookie = ("accessToken=" + data.accessToken + "; max-age=1200")
        dispatch(getUserData(setName, setEmail))
    }).catch(err => {
        console.log(err)
        dispatch({
            type: TOKEN_ERROR
        });
    })
}

export const registerFetch = (email: string, password: string, name: string, history: History<unknown>) => (dispatch: Dispatch<TRegisterActions>) => {
    dispatch({
        type: REGISTER_REGUEST
    })
    const dataForm = {
        email: email,
        password: password,
        name: name
    }
    fetch(url + `/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataForm)
    }).then(checkResponce).then(data => {
        localStorage.setItem('refreshToken', data.refreshToken)
        document.cookie = ("accessToken=" + data.accessToken + "; max-age=1200")
        dispatch({
            type: REGISTER_SUCCESS
        });
        alert("Регистрация прошла успешно")
        history.push('/login')
    }).catch(err => {
        console.log(err)
        dispatch({
            type: REGISTER_ERROR
        });
    })
}

export const logOutFetch = (history: History<unknown>) => (dispatch: Dispatch<TLogoutActions>) => {

    dispatch({
        type: LOGOUT_REGUEST
    })
    fetch(url + '/auth/logout', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: localStorage.getItem('refreshToken')
        })
    }).then(checkResponce).then(data => {

        dispatch({
            type: LOGOUT_SUCCESS,
        });
        localStorage.removeItem('refreshToken');
        document.cookie = ("accessToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT")
        history.push('/')
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGOUT_ERROR,
        });

    })

}

export const forgotPasswordLogic = (history:  History<unknown>, email: string) => (dispatch: Dispatch<TForgotPasswordActions>) => {
    if (email !== '') {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        })
        const data = { email: email }
        fetch(url + `/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(checkResponce).then(data => {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS
            })
            alert("Код проверки отправлен на почту")
            history.push("/reset-password")
        }).catch(err => {
            dispatch({
                type: FORGOT_PASSWORD_ERROR
            })
            console.log(err)
        })
    } else {
        alert('Введите данные в почту')
    }
}

export const resetPasswordLogic = (code: string, password: string, history: History<unknown>) => (dispatch: Dispatch<TResetPasswordActions>) => {
    dispatch({
        type: RESET_PASSWORD_REQUEST
    })
    const data = {
        password: password,
        token: code
    }
    fetch(url + `/password-reset/reset`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then(checkResponce).then(data => {
        dispatch({
            type: RESET_PASSWORD_SUCCESS
        })
        alert("Пароль обновлен")
        history.push("/")
    }).catch(err => {
        console.log(err)
        dispatch({
            type: RESET_PASSWORD_ERROR
        })
    })

}