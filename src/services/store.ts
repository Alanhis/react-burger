import { rootReducer } from './reducers';
import {  configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { socketMiddleware } from './socketMiddlewar';
import { useLocation } from 'react-router-dom';
import {WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
  } from "../services/actions/wsAction"

  export const wsUrlFeed = 'wss://norma.nomoreparties.space/orders/all';
  const wsUrlFeedProfile = 'wss://norma.nomoreparties.space/orders/' + document.cookie
  const wsActions = {
    wsInit: WS_CONNECTION_START,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_MESSAGE
  };
  
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: () => any) => getDefaultMiddleware().concat(socketMiddleware(wsUrlFeed,wsActions),socketMiddleware(wsUrlFeedProfile,wsActions)),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch