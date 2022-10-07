import React, { useEffect } from 'react';
import AppStyle from './App.module.css';
import AppHeader from './components/App-header';
import BurgerIngredients from './components/Burger-ingredients';
import BurgerConstuctor from './components/Butger-constructor';
function App() {
  const url ="https://norma.nomoreparties.space/api/ingredients";
  const [dataAPI,setDataAPI]= React.useState([]);
  useEffect(()=>{
    fetch(url)
    .then(data => data.json())
    .then(data =>setDataAPI(data.data))
    .catch(error => alert(error))
  },[])
  console.log(dataAPI)
  return (
    <div className="App">
     <AppHeader/>
     {dataAPI && 
     <div className={`${AppStyle.MainBody} `}>
      
      <BurgerIngredients />
     <BurgerConstuctor />
      
     
     </div>
     }
    </div>
  );
}

export default App;
