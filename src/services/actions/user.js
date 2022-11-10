import { url } from "../../components/app/app";
import { checkResponce } from "../../utils/checkResponse";
import { updateToken } from "./auth";
export const USER_DATA_REGUEST = 'USER_DATA_REGUEST';
export const USER_DATA_ERROR = 'USER_DATA_ERROR';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';

export const getUserData = (authorization, setName, setEmail) => (dispatch) => {

    dispatch({
        type: USER_DATA_REGUEST
    })
    fetch(url + '/auth/user', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authorization
        },

    }).then(checkResponce).then(data => {
        console.log(data)

        dispatch({
            type: USER_DATA_SUCCESS,
            payload: data
        });
        setName(data.user.name)
        setEmail(data.user.email)
    }).catch(err => {
        console.log(err)
        if (err.message === 'jwt expired') {

            dispatch(updateToken())
            dispatch(getUserData())
        } else {
            dispatch({
                type: USER_DATA_ERROR,
            });

        }

    })

} 