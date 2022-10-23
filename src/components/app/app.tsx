import React from 'react';
import AppStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/butger-constructor';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { rootReducer } from '../../services/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: true,
  });
  return (
    <div className="App">
      <AppHeader />

      <div className={`${AppStyle.MainBody} `}>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstuctor />
          </DndProvider>
        </Provider>
      </div>
    </div>
  );
}
