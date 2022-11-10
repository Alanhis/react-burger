import { url } from "../../components/app/app";
import { checkResponce } from "../../utils/checkResponse";
import { updateToken } from "./auth";
export const USER_DATA_REGUEST = 'USER_DATA_REGUEST';
export const USER_DATA_ERROR = 'USER_DATA_ERROR';
export const USER_DATA_SUCCESS = 'USER_DATA_SUCCESS';
export const UPDATE_DATA_REGUEST = 'UPDATE_DATA_REGUEST';
export const UPDATE_DATA_ERROR = 'UPDATE_DATA_ERROR';
export const UPDATE_DATA_SUCCESS = 'UPDATE_DATA_SUCCESS';
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
        dispatch({
            type: USER_DATA_SUCCESS,
            payload: data
        });
        setName(data.user.name)
        setEmail(data.user.email)
    }).catch(err => {
        console.log(err)
        if (err.message === 'jwt expired') {

            dispatch(updateToken(setName, setEmail))

        } else {
            dispatch({
                type: USER_DATA_ERROR,
            });

        }

    })

}

export const updateUserData = (authorization, email, name, history) => (dispatch) => {
    dispatch({
        type: UPDATE_DATA_REGUEST
    })

    fetch(url + '/auth/user', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authorization
        },
        body: JSON.stringify({
            "email": email,
            "name": name
        })
    }).then(checkResponce).then(data => {
        dispatch({
            type: UPDATE_DATA_REGUEST,
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