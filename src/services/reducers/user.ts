import { USER_DATA_REGUEST, USER_DATA_ERROR, USER_DATA_SUCCESS, UPDATE_DATA_ERROR, UPDATE_DATA_REGUEST, UPDATE_DATA_SUCCESS, TUserAction } from "../actions/user"
type TUserState = {
    email: string | null;
    name: string | null;
    isRequired: boolean;
    isRequiredError: boolean;
}
const initialState: TUserState = {
    email: null,
    name: null,
    isRequired: false,
    isRequiredError: false
}
export const userReducer = (state = initialState, action: TUserAction) => {
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
