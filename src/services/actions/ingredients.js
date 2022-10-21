import { url } from "../../components/app/app"

export const FETCH_DATA = 'FETCH_DATA'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILED = 'FETCH_DATA_FAILED'

export const INGREDIENT_MODAL_OPEN = 'INGREDIENT_MODAL_OPEN';
export const INGREDIENT_MODAL_CLOSE = 'INGREDIENT_MODAL_CLOSE';

export const SET_SELECTED_INGREDIENT = 'SET_SELECTED_INGREDIENT';
export const CLEAN_SELECTED_INGREDIENT = 'CLEAN_SELECTED_INGREDIENT';

export const fetchData = () => (dispatch, getState) => {
    const usedURL = url + '/ingredients'
    dispatch({
        type: FETCH_DATA
    });
    fetch(usedURL).then(res => {
        return res.json();
    }).then(data => {

        dispatch({
            type: FETCH_DATA_SUCCESS,
            data
        });
    }).catch(err => {
        dispatch({
            type: FETCH_DATA_FAILED,
        });
    })

} 