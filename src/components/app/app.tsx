import React, { useEffect } from 'react';
import AppStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/butger-constructor';
import useFetch from '../../utils/fetch-logic';
import { ConstructorContext } from '../../utils/constructor-context';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { TestData } from '../../utils/data';
import { rootReducer } from '../../services/reducers';

export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  const data = useFetch(url + '/ingredients');
  const composeEnhancers =
    ((window as any)[
      '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
    ] as typeof compose) || compose;
  const enhancer = composeEnhancers();

  const store = createStore(rootReducer, enhancer);
  return (
    <div className="App">
      <AppHeader />
      {data && (
        <div className={`${AppStyle.MainBody} `}>
          <Provider store={store}>
            <BurgerIngredients ingredient={data} />
            <ConstructorContext.Provider value={TestData}>
              <BurgerConstuctor />
            </ConstructorContext.Provider>
          </Provider>
        </div>
      )}
    </div>
  );
}
