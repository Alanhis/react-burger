import { ORDER_DATA_REQUEST, ORDER_DATA_FAILED, ORDER_DATA_SUCCESS, MODAL_OPEN, MODAL_CLOSE, ORDER_NUMBER_REQUEST } from "../actions/order";
import { orderDetails } from '../../utils/data';
const initialState = {
    isRequired: false,
    isRequiredError: false,
    orderDetails,
    orderNumber: 0,
    isOpenModal: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DATA_REQUEST: {
            return {
                ...state,
                isRequired: true
            };
        }
        case ORDER_DATA_SUCCESS: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: false,
                orderDetails: action.data.data
            };
        }
        case ORDER_DATA_FAILED: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case MODAL_OPEN: {
            return {
                ...state,
                isOpenModal: true
            };
        }
        case MODAL_CLOSE: {
            return {
                ...state,
                isOpenModal: false
            };
        }
        case ORDER_NUMBER_REQUEST: {
            return {
                ...state,
                orderNumber: action.order_number
            };
        }
        default: {
            return state;
        }
    }
}