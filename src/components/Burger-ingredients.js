import {Tab,CurrencyIcon,Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import BurgerIngredientsStyles from "./Burger-ingredients.module.css";
import {Data} from "../utils/data"

const Ingredients=(props)=>{
  return(
    <div className='mt-6 mr-4 mb-10' >{
      Data.map(element =>{
        if(element.type == props.ingredientType){
          return(<IngredientCard data={element}/>)
        }
        
      })
    }</div>
  )
}
const IngredientCard =(props)=>{
  console.log(Data)
  return(  
  <div className={`${BurgerIngredientsStyles.foodCard}`}>
    <Counter extraClass={`${BurgerIngredientsStyles.foodCounter}`}/>
  <img src={props.data.image}></img> 
  <div className={`${BurgerIngredientsStyles.foodPrice}`}>
  <p className='text text_type_main-default mr-2'>{props.data.price} </p> <CurrencyIcon type="primary" />
  </div>
  <p  className={`text text_type_main-default ${BurgerIngredientsStyles.foodText}`}>{props.data.name}</p>
</div>)
}
function BurgerIngredients(){
  
    const [current, setCurrent] = React.useState('one')
return(
    <section className={`${BurgerIngredientsStyles.border}`}>
        <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
        <div style={{ display: 'flex' }}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинка
      </Tab>
      </div>
      <div className={`${BurgerIngredientsStyles.food} mt-10 custom-scroll`}>
      <p  className='text text_type_main-medium mb-6'>Булки</p>
      <Ingredients ingredientType="bun"/>
      <p className='text text_type_main-medium mb-6'>Соусы</p>
      <Ingredients ingredientType="sauce"/>
      <p className='text text_type_main-medium mb-6'>Начинка</p>
      <Ingredients ingredientType="main"/>
      </div>
    </section>
    
)
}
export default BurgerIngredients