import { USER_DATA_REGUEST, USER_DATA_ERROR, USER_DATA_SUCCESS, UPDATE_DATA_ERROR, UPDATE_DATA_REGUEST, UPDATE_DATA_SUCCESS } from "../actions/user"
const initialState = {
    email: null,
    name: null,
    isRequired: false,
    isRequiredError: false
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_REGUEST: {

            return {
                ...state,
                isRequired: true
            }
        }
        case USER_DATA_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                email: action.payload.user.email,
                name: action.payload.user.name
            }
        }
        case USER_DATA_ERROR: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case UPDATE_DATA_REGUEST: {

            return {
                ...state,
                isRequired: true
            }
        }
        case UPDATE_DATA_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                email: action.payload.user.email,
                name: action.payload.user.name
            }
        }
        case UPDATE_DATA_ERROR: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        default: {
            return state
        }
    }
}
