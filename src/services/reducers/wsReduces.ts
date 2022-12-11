import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
  } from "../actions/wsAction"
  type TWSState = {
    wsConnected:boolean,
    messages: [({
      success: boolean,
      order: {_id: string,
      ingredients: string[],
    status: string,
  name: string,
createdAT: string,
updatedAT: string,
number: number }[]
    } | null)] 
}
  const initialState: any = {
    wsConnected: false,
    messages: []
  };
  
  export const wsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case WS_CONNECTION_SUCCESS:
        return {
          ...state,
          wsConnected: true
        };
  
      case WS_CONNECTION_ERROR:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_CONNECTION_CLOSED:
        return {
          ...state,
          wsConnected: false
        };
  
      case WS_GET_MESSAGE:
        return {
          ...state,
          messages: [{ ...action.payload}]
        };
      default:
        return state;
    }
  };