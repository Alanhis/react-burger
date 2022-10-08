import {Tab,CurrencyIcon,Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react';
import BurgerIngredientsStyles from "./Burger-ingredients.module.css";
import Modal from '../modal/Modal'
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
const Ingredients=(props)=>{

  return(
    <div className='mt-6 mr-4 mb-10' >{
      props.data.map(element =>{
        
        if(element.type == props.ingredientType){
          return(<IngredientCard data={element} key={element._id}/>)
        }
        
      })
    }</div>
  )
}
const IngredientCard =(props)=>{
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenModal=() => {
    setIsOpen(true);
  }

  const handleCloseModal=() =>{
    setIsOpen(false);
  }
  return( <>
  <div onClick={handleOpenModal} className={`${BurgerIngredientsStyles.foodCard} `}>
    <Counter count={1} extraClass={`${BurgerIngredientsStyles.foodCounter}`}/>
  <img className={`${BurgerIngredientsStyles.foodImage}`} src={props.data.image} ></img> 
  <div className={`${BurgerIngredientsStyles.foodPrice}`}>
  <p className='text text_type_main-default mr-2'>{props.data.price} </p> <CurrencyIcon type="primary" />
  </div>
  <p  className={`text text_type_main-default ${BurgerIngredientsStyles.foodText}`}>{props.data.name}</p>
</div>
<div >
   
   {isOpen&&<>
   
   <Modal isFood='true' onClose={handleCloseModal}> 
   <IngredientDetails data={props.data}/>
      
    </Modal></>}
    </div>
</>)

}
export default function  BurgerIngredients(props){
  
  
  const [current, setCurrent] = React.useState('one')
return(
  <>
  
    <section className={`${BurgerIngredientsStyles.border} mr-10`}>
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
      <Ingredients ingredientType="bun" data={props.ingredient}/>
      <p className='text text_type_main-medium mb-6'>Соусы</p>
      <Ingredients ingredientType="sauce" data={props.ingredient}/>
      <p className='text text_type_main-medium mb-6'>Начинка</p>
      <Ingredients ingredientType="main" data={props.ingredient}/>
      </div>
    </section>
    </>
)
}
BurgerIngredients.propTypes ={
  ingredient: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string,
  })).isRequired
}
