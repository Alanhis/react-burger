import { url } from "../../components/app/app";
import { checkResponce } from "../../utils/checkResponse";
import { updateToken } from "./auth";
import { History } from "history";
import { Dispatch } from "react";
import { TTokenActions } from "./auth";
import { IUser } from "../../utils/types";
export const USER_DATA_REGUEST: 'USER_DATA_REGUEST' = 'USER_DATA_REGUEST';
export const USER_DATA_ERROR: 'USER_DATA_ERROR' = 'USER_DATA_ERROR';
export const USER_DATA_SUCCESS: 'USER_DATA_SUCCESS' = 'USER_DATA_SUCCESS';
export interface IUserDataReguestAction { 
    readonly type: typeof USER_DATA_REGUEST
}
export interface IUserDataSuccessAction { 
    readonly type: typeof USER_DATA_SUCCESS,
    payload: IUser 
}
export interface IUserDataErrorAction { 
    readonly type: typeof USER_DATA_ERROR
}
export type TUserDataActions = | IUserDataReguestAction | IUserDataSuccessAction | IUserDataErrorAction | TTokenActions;
export const UPDATE_DATA_REGUEST = 'UPDATE_DATA_REGUEST';
export const UPDATE_DATA_ERROR = 'UPDATE_DATA_ERROR';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
export interface IUpdateDataReguestAction {
    readonly type: typeof UPDATE_DATA_REGUEST
}
export interface IUpdateDataSuccessAction {
    readonly type: typeof UPDATE_DATA_SUCCESS,
    payload: IUser 
}
export interface IUpdateDataErrorAction {
    readonly type: typeof UPDATE_DATA_ERROR
}
export type TUpdateDataActions = | IUpdateDataReguestAction | IUpdateDataSuccessAction | IUpdateDataErrorAction | TTokenActions;
export type TUserAction = | TUserDataActions | TUpdateDataActions;
export const getUserData = (setName: Function, setEmail: Function) => (dispatch: Dispatch<TUserDataActions>) => {
    if (document.cookie.length == 0) {
        dispatch(updateToken(setName, setEmail))
    }
    dispatch({
        type: USER_DATA_REGUEST
    })
    fetch(url + '/auth/user', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": document.cookie
        },
    }).then(checkResponce).then(data => {
        
        dispatch({
            type: USER_DATA_SUCCESS,
            payload: data
        });
        setName(data.user.name)
        setEmail(data.user.email)
    }).catch(err => {
        console.log(err)
            dispatch({
                type: USER_DATA_ERROR,
            });
    })

}

export const updateUserData = (email:string, name: string, setName: Function, setEmail: Function, history: History<unknown>) => (dispatch: Dispatch<TUpdateDataActions>) => {
    if (document.cookie.length == 0) {
       dispatch(updateToken(setName, setEmail))
    }
    dispatch({
        type: UPDATE_DATA_REGUEST
    })

    fetch(url + '/auth/user', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": document.cookie
        },
        body: JSON.stringify({
            "email": email,
            "name": name
        })
    }).then(checkResponce).then(data => {
        
        dispatch({
            type: UPDATE_DATA_SUCCESS,
            payload: data
        });
        alert('Данные обновлены, произведена отправка на главную страницу')
        history.push('/')
    }).catch(err => {
        console.log(err)

        dispatch({
            type: UPDATE_DATA_ERROR,
        });
    })
}