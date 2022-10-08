import React, { useEffect } from 'react';
import AppStyle from './App.module.css';
import AppHeader from '../app-header/App-header';
import BurgerIngredients from '../burger-ingredients/Burger-ingredients';
import BurgerConstuctor from '../burger-constructor/Butger-constructor';
import fetchLogic from '../../utils/fetch-logic';
export  const url ="https://norma.nomoreparties.space/api/ingredients";

export default function App() {
 
 const data = fetchLogic(url)
 console.log(data)
  
  return (<>
    
    <div className="App">
     <AppHeader/>
     {data && 
     <div className={`${AppStyle.MainBody} `}> 
      <BurgerIngredients ingredient={data} />
     <BurgerConstuctor ingredient={data} />
     </div>

     }
    </div>
    
     
   </>
  );
}

