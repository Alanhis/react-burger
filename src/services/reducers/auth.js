import {
    LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_REGUEST,
    REGISTER_REGUEST, REGISTER_SUCCESS, REGISTER_ERROR,
    LOGOUT_REGUEST, LOGOUT_SUCCESS, LOGOUT_ERROR,
    TOKEN_REGUEST, TOKEN_SUCCESS, TOKEN_ERROR,
    FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR
} from "../actions/auth";

const initialState = {
    isRequired: false,
    isRequiredError: false,
    authorization: '',
    isPasswordReguest: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REGUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case LOGIN_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                authorization: action.payload
            }
        }
        case LOGIN_ERROR: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case TOKEN_REGUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case TOKEN_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                authorization: action.payload
            }
        }
        case TOKEN_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case REGISTER_REGUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case REGISTER_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                authorization: action.payload
            }
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case LOGOUT_REGUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case LOGOUT_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                authorization: ''
            }
        }
        case LOGOUT_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                isPasswordReguest: true
            }
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case RESET_PASSWORD_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                isPasswordReguest: false
            }
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        default: {
            return state;
        }
    }
}