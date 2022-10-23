import { checkResponce } from "../../utils/checkResponse";
import { url } from "../../components/app/app"
import { useDispatch, useSelector } from 'react-redux';
export const ORDER_DATA_REQUEST = 'ORDER_DATA_REQUEST';
export const ORDER_DATA_SUCCESS = 'ORDER_DATA_SUCCESS';
export const ORDER_DATA_FAILED = 'ORDER_DATA_FAILED';

export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const ORDER_NUMBER_REQUEST = 'ORDER_NUMBER_REQUEST';
export const ORDER_NUMBER_DELETE = 'ORDER_NUMBER_DELETE';

export const ADD_COMPONENT = 'ADD_COMPONENT';
export const DELETE_COMPONENT = 'DELETE_COMPONENT';
export const UPDATE_CONSTRUCTOR_LIST = 'UPDATE_CONSTRUCTOR_LIST'

export const DELETE_BUN = 'DELETE_BUN';


export const sendOrder = (ingredient) => (dispatch, getState) => {
    dispatch({
        type: ORDER_DATA_REQUEST
    });
    const returnedData = { "ingredients": (ingredient.map(data => data._id)) }

    const fetching = fetch(url + '/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(returnedData)
    }).then(checkResponce)


    return fetching
}
