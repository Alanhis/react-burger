import ReadyButton from '../../image/done.png'
import ModalStyle from '../modal/Modal.module.css';
import PropTypes from 'prop-types';

export default function OrderDetails  (props){
  
    return(
        <div className= {`${ModalStyle.OrderDetail}`}>
        <p className="text text_type_digits-large">
  {props.orderNumber}
</p>
<p className="text text_type_main-default mt-8">
  идентификатор заказа
</p>
<img src={ReadyButton} className='mt-15 mb-15'></img>
<p className="text text_type_main-default mb-2">
  Ваш заказ начали готовить
</p>
<p className="text text_type_main-default text_color_inactive mb-30">
  Дождитель готовности на орбитальной станции
</p>

    </div>
    )
}
OrderDetails.propsTypes ={
  orderNumber: PropTypes.number
}