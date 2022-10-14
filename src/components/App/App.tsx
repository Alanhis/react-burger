import React, { useEffect } from 'react';
import AppStyle from './App.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/butger-constructor';
import fetchLogic from '../../utils/fetch-logic';
import { ConstructorContext } from '../../utils/constructor-context';
import { TestData } from '../../utils/data';
export const url = 'https://norma.nomoreparties.space/api/ingredients';

export default function App() {
  const data = fetchLogic(url);

  return (
    <>
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
    </>
  );
}
