import { checkResponce } from "../../utils/checkResponse";
import { url } from "../../components/app/app"
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
export const LOGIN_REGUEST = 'LOGIN_REGUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTER_REGUEST = 'REGISTER_REGUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const LOGOUT_REGUEST = 'LOGOUT_REGUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const TOKEN_REGUEST = 'TOKEN_REGUEST';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_ERROR = 'TOKEN_ERROR';

export const fetchLogin = (email, password) => (dispatch) => {

    dispatch({
        type: LOGIN_REGUEST
    })
    const usedData = {
        email: email,
        password: password
    }
    console.log(usedData)
    fetch(url + '/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usedData)
    }).then(checkResponce).then(data => {
        console.log(data.accessToken)
        localStorage.setItem('refreshToken', data.refreshToken)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.accessToken
        });
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGIN_ERROR
        });
    })
}

export const updateToken = () => (dispatch) => {
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
        console.log(data.accessToken)

        dispatch({
            type: TOKEN_SUCCESS,
            payload: data.accessToken
        });
    }).catch(err => {
        console.log(err)
        dispatch({
            type: TOKEN_ERROR
        });
    })
}

export const registerFetch = (email, password, name) => (dispatch) => {
    const history = useHistory()
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
        dispatch({
            type: REGISTER_SUCCESS,
            payload: data.accessToken
        });
        alert("Регистрация прошла успешно")

    }).catch(err => {
        console.log(err)
        dispatch({
            type: REGISTER_ERROR,
        });
    })
}

export const logOutFetch = () => (dispatch) => {

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
        console.log(data)

        dispatch({
            type: LOGOUT_SUCCESS,
        });
        localStorage.removeItem('refreshToken');
    }).catch(err => {
        console.log(err)
        dispatch({
            type: LOGOUT_ERROR,
        });
    })
}