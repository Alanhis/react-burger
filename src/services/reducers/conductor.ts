
import { IingredientFromConstructor } from "../../components/burger-cunstructor-list/burger-constructor-list";
import { ADD_COMPONENT, DELETE_COMPONENT, UPDATE_CONSTRUCTOR_LIST, DELETE_BUN, TConductor } from "../actions/conductor";
type TConductorState = {
    orderDetails:  IingredientFromConstructor 
}
const initialState: any = {orderDetails: []} // Не могу понять как тут правильно поставить тип данных с учетом того, что первичные данные пустые

export const conductorReducer = (state = initialState, action: TConductor) => {
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
            
            return {
                ...state,
                orderDetails: [...state.orderDetails].filter((item: IingredientFromConstructor) => item.dragId !== action.action.dragId)
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
                orderDetails: [...state.orderDetails].filter((item: IingredientFromConstructor) => item.type !== 'bun')
            }
        }
        default: {

            return state;
        }
    }
}