import {ConstructorElement,CurrencyIcon,Button,DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerConstuctorStyle from "./Butger-constructor.module.css";
import {Data} from "../utils/data"
function BurgerConstuctor(){
    var FinalPrice = 0
     
    return(<div>
        <ul className={`${BurgerConstuctorStyle.IngredientList} ${BurgerConstuctorStyle.AnotherScroller} custom-scroll mt-25 `}>
        
            {Data.map(element =>{
                FinalPrice=FinalPrice + element.price;
               if(element._id == Data[0]._id){
                    return(<div className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}>
                        <ConstructorElement 
                        text={element.name} 
                        price={element.price}
                        type="top"
                        isLocked={true}
                        thumbnail={element.image}
                        key={element._id}  />
                        </div>)
               } else if (element._id == Data[Data.length - 1 ]._id){
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
         <div className='ml-10'><Button type="primary" size="large">
            Оформить заказ
        </Button></div>
         
        </div>
        </div>
    )
}
export default BurgerConstuctor;