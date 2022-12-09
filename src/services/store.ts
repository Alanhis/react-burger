import { rootReducer } from './reducers';
import { compose, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
export const store = configureStore({
    reducer: rootReducer,
    middleware: compose((getDefaultMiddleware: () => any) => getDefaultMiddleware()),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch