import React, { useEffect } from 'react';
import AppStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/butger-constructor';
import useFetch from '../../utils/fetch-logic';
import { ConstructorContext } from '../../utils/constructor-context';
import { compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from '../../services/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  const composeEnhancers =
    ((window as any)[
      '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
    ] as typeof compose) || compose;
  const enhancer = composeEnhancers();

  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
  });
  return (
    <div className="App">
      <AppHeader />

      <div className={`${AppStyle.MainBody} `}>
        <Provider store={store}>
          <BurgerIngredients />
          <BurgerConstuctor />
        </Provider>
      </div>
    </div>
  );
}
