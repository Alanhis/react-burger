import { checkResponce } from "../../utils/checkResponse";
import { url } from "../../components/app/app"
import { useDispatch, useSelector } from 'react-redux';
export const ORDER_DATA_REQUEST = 'ORDER_DATA_REQUEST';
export const ORDER_DATA_SUCCESS = 'ORDER_DATA_SUCCESS';
export const ORDER_DATA_ERROR = 'ORDER_DATA__ERROR';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const sendOrder = (ingredient) => (dispatch, getState) => {

    dispatch({
        type: ORDER_DATA_REQUEST
    });
    ingredient.push(ingredient[0])

    const returnedData = { "ingredients": (ingredient.map(data => data._id)) }

    fetch(url + '/orders', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
