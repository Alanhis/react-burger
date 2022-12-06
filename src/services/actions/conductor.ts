import { IingredientFromConstructor } from "../../components/burger-cunstructor-list/burger-constructor-list";
export const ADD_COMPONENT: 'ADD_COMPONENT' = 'ADD_COMPONENT';
export const DELETE_COMPONENT: 'DELETE_COMPONENT' = 'DELETE_COMPONENT';
export const UPDATE_CONSTRUCTOR_LIST: 'UPDATE_CONSTRUCTOR_LIST' = 'UPDATE_CONSTRUCTOR_LIST'

export const DELETE_BUN: 'DELETE_BUN' = 'DELETE_BUN';

export interface IAddComponentAction { 
    readonly type: typeof ADD_COMPONENT,
    item: IingredientFromConstructor
}
export interface IDeleteComponentAction { 
    readonly type: typeof DELETE_COMPONENT,
    action: IingredientFromConstructor
}
export interface IUpdateConstructorListAction { 
    readonly type: typeof UPDATE_CONSTRUCTOR_LIST,
    item: IingredientFromConstructor[]
}
export interface IDeleteBunAction { 
    readonly type: typeof DELETE_BUN,
    item: IingredientFromConstructor
}
export type TConductor = | IAddComponentAction | IDeleteComponentAction | IUpdateConstructorListAction | IDeleteBunAction;