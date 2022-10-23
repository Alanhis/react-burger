import { url } from "../../components/app/app"
import { checkResponce } from "../../utils/checkResponse";
export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_FAILED = 'GET_DATA_FAILED'



export const fetchData = () => (dispatch, getState) => {
    const usedURL = url + '/ingredients'
    dispatch({
        type: GET_DATA_REQUEST
    });
    fetch(usedURL).then(checkResponce)
        .then(data => {

            dispatch({
                type: GET_DATA_SUCCESS,
                data
            });
        }).catch(err => {
            dispatch({
                type: GET_DATA_FAILED,
            });
        })

} 