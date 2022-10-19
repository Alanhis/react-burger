import React, { useEffect } from 'react';
import AppStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/butger-constructor';
import useFetch from '../../utils/fetch-logic';
import { ConstructorContext } from '../../utils/constructor-context';
import { TestData } from '../../utils/data';
export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  const data = useFetch(url + '/ingredients');
  return (
    <div className="App">
      <AppHeader />
      {data && (
        <div className={`${AppStyle.MainBody} `}>
          <BurgerIngredients ingredient={data} />
          <ConstructorContext.Provider value={TestData}>
            <BurgerConstuctor />
          </ConstructorContext.Provider>
        </div>
      )}
    </div>
  );
}
