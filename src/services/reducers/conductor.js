
import { ADD_COMPONENT, DELETE_COMPONENT, UPDATE_CONSTRUCTOR_LIST, DELETE_BUN } from "../actions/conductor";
const initialState = {
    orderDetails: [],
}

export const conductorReducer = (state = initialState, action) => {
    switch (action.type) {
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