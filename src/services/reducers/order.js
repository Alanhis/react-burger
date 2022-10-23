import { ORDER_DATA_REQUEST, ORDER_DATA_SUCCESS, ORDER_DATA_FAILED, MODAL_OPEN, MODAL_CLOSE, ORDER_NUMBER_REQUEST, ADD_COMPONENT, DELETE_COMPONENT, UPDATE_CONSTRUCTOR_LIST, DELETE_BUN, ORDER_NUMBER_DELETE } from "../actions/order";

const initialState = {
    isRequired: false,
    isRequiredError: false,
    orderDetails: [],
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
                ingredient: action.data.data,
                isRequired: false,
                isRequiredError: false
            }
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
        case ORDER_NUMBER_DELETE: {
            return {
                ...state,
                orderNumber: 0
            }
        }
        case ADD_COMPONENT: {
            return {
                ...state,
                orderDetails: [
                    ...state.orderDetails,
                    action.item
                ]
            }
        }
        case DELETE_COMPONENT: {
            // 
            return {
                ...state,
                orderDetails: [...state.orderDetails].filter(item => item.dragId !== action.action.dragId)
            }
        }
        case UPDATE_CONSTRUCTOR_LIST: {


            return {
                ...state,
                orderDetails: action.item
            }
        }
        case DELETE_BUN: {
            return {
                ...state,
                orderDetails: [...state.orderDetails].filter(item => item.type !== 'bun')
            }
        }
        default: {
            return state;
        }
    }
}