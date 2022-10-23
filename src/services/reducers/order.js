import { ORDER_DATA_REQUEST, ORDER_DATA_SUCCESS, ORDER_DATA_ERROR, MODAL_CLOSE } from "../actions/order";

const initialState = {
    isRequired: false,
    isRequiredError: false,
    orderNumber: 0,
    isOpenModal: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DATA_REQUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case ORDER_DATA_SUCCESS: {

            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                isOpenModal: action.payload.success,
                orderNumber: action.payload.order.number
            }
        }
        case ORDER_DATA_ERROR: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case MODAL_CLOSE: {
            return {
                ...state,
                isOpenModal: false,
                orderNumber: 0
            };
        }
        default: {
            return state;
        }
    }
}