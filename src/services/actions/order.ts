import { checkResponce } from "../../utils/checkResponse";
import { url } from "../../components/app/app"
import { Iingredient } from "../../utils/types";
import { Dispatch } from "react";
export const ORDER_DATA_REQUEST: 'ORDER_DATA_REQUEST' = 'ORDER_DATA_REQUEST';
export const ORDER_DATA_SUCCESS: 'ORDER_DATA_SUCCESS' = 'ORDER_DATA_SUCCESS';
export const ORDER_DATA_ERROR: 'ORDER_DATA_ERROR' = 'ORDER_DATA_ERROR';
export const MODAL_CLOSE: 'MODAL_CLOSE' = 'MODAL_CLOSE';

export interface IOrderDataReguestAction{
    readonly type: typeof ORDER_DATA_REQUEST
}
export interface IOrderDataSuccessAction{
    readonly type: typeof ORDER_DATA_SUCCESS,
    payload: {name: string;
    order:{number:number};
success: boolean} 
}
export interface IOrderDataErrorAction{
    readonly type: typeof ORDER_DATA_ERROR
}
export interface IModalCloseAction{
    readonly type: typeof MODAL_CLOSE
}
export type TOrderActions = | IOrderDataReguestAction | IOrderDataSuccessAction | IOrderDataErrorAction | IModalCloseAction;
export const sendOrder = (ingredient: Iingredient[]) => (dispatch: Dispatch<TOrderActions>) => {

    dispatch({
        type: ORDER_DATA_REQUEST
    });
    ingredient.push(ingredient[0])

    const returnedData = { "ingredients": (ingredient.map(data => data._id)) }

    fetch(url + '/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": document.cookie
        },
        body: JSON.stringify(returnedData)
    }).then(checkResponce).then(data => {
        
        dispatch({
            type: ORDER_DATA_SUCCESS,
            payload: data
        });
    }).catch(err => {
        dispatch({
            type: ORDER_DATA_ERROR,
        });
    })

}
