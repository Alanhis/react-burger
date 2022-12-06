import { Dispatch } from "react";
import { url } from "../../components/app/app"
import { checkResponce } from "../../utils/checkResponse";
import { Iingredient } from "../../utils/types";
export const GET_DATA_REQUEST: 'GET_DATA_REQUEST' = 'GET_DATA_REQUEST';
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED: 'GET_DATA_FAILED' = 'GET_DATA_FAILED';

export interface IGetDataReguestAction {
    readonly type: typeof GET_DATA_REQUEST
}
export interface IGetDataSuccessAction {
    readonly type: typeof GET_DATA_SUCCESS,
    data: Iingredient[] // Изменить any на что-то нормальное
}

export interface IGetDataFailedAction {
    readonly type: typeof GET_DATA_FAILED
}
 
export type TIngredientActions = | IGetDataReguestAction | IGetDataSuccessAction | IGetDataFailedAction;

export const fetchData = () => (dispatch: Dispatch<TIngredientActions>) => { 
    const usedURL = url + '/ingredients'
    dispatch({
        type: GET_DATA_REQUEST
    });
    fetch(usedURL).then(checkResponce)
        .then(data => {
            
            dispatch({
                type: GET_DATA_SUCCESS,
                data: data.data
            });
        }).catch(err => {
            dispatch({
                type: GET_DATA_FAILED,
            });
        })

} 