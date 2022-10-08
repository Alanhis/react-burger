import React, { useEffect } from 'react';
import AppStyle from './App.module.css';
import AppHeader from './components/App-header';
import BurgerIngredients from './components/Burger-ingredients';
import BurgerConstuctor from './components/Butger-constructor';


function App() {
 
  const url ="https://norma.nomoreparties.space/api/ingredients";
  const [dataAPI,setDataAPI]= React.useState([]);

  const el = document.createElement('div');
  
  
  useEffect(()=>{
   
    fetch(url)
    .then(data => data.json())
    .then(data =>setDataAPI(data.data))
    .catch(error => alert(error))
  },[])
  
  return (<>
    <div id='react-modals' ></div>
    <div className="App">
     <AppHeader/>
     {dataAPI && 
     <div className={`${AppStyle.MainBody} `}> 
      <BurgerIngredients ingredient={dataAPI} />
     <BurgerConstuctor ingredient={dataAPI} />
     </div>

     }
    </div>
    
     
   </>
  );
}

export default App;
