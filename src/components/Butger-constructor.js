import {ConstructorElement,CurrencyIcon,Button,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstuctorStyle from "./Butger-constructor.module.css";
import Modal from './Modal'
import React from 'react';
import { OrderDetails } from './OrderDetails';

function BurgerConstuctor(props){
    var FinalPrice = 0
    const [isOpen, setIsOpen] = React.useState(false);
    const handleOpenModal=() => {
    setIsOpen(true);
  }

   const handleCloseModal=() =>{
    setIsOpen(false);
  }
    return(<div>
        <ul className={`${BurgerConstuctorStyle.IngredientList} ${BurgerConstuctorStyle.AnotherScroller} custom-scroll mt-25 `}>
            {props.ingredient.map(element =>{
                FinalPrice=FinalPrice + element.price;
               if(element._id == props.ingredient[0]._id){
                    return(<div className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}>
                        <ConstructorElement 
                        text={element.name} 
                        price={element.price}
                        type="top"
                        isLocked={true}
                        thumbnail={element.image}
                        key={element._id}  />
                        </div>)
               } else if (element._id == props.ingredient[props.ingredient.length - 1 ]._id){
                return(<div className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}>
                    <ConstructorElement 
                    text={element.name} 
                    price={element.price}
                    type="bottom"
                    isLocked={true}
                    thumbnail={element.image}
                    key={element._id}  />
                    </div>)
           }else {return(<div className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-3 mr-2`}>
           <DragIcon type="secondary" /><ConstructorElement 
             text={element.name} 
             price={element.price} 
             thumbnail={element.image}
             key={element._id}  />
          </div>)}
                }
            )}
        </ul>
        <div style={{display:'inline-flex'}} className={`${BurgerConstuctorStyle.finalIngeredientdiv} `}>
         <p className='text text_type_main-medium mr-2'>{FinalPrice}</p> 
         <CurrencyIcon/>
         <div className='ml-10'><Button type="primary" size="large" onClick={handleOpenModal} >
            Оформить заказ
        </Button></div>
         
        </div>
        <div >
   
     {isOpen&&<>
     
     <Modal isFood='false' onClose={handleCloseModal}> 
     <OrderDetails orderNumber='111111'/>
        
      </Modal></>}
      </div>
        </div>
    )
}
export default BurgerConstuctor;