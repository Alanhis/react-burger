import ReadyButton from '../../image/done.png';
import OrderDetailStyle from './order-details.module.css';
import PropTypes from 'prop-types';

export default function OrderDetails(props: { orderNumber: number }) {
  return (
    <div className={`${OrderDetailStyle.OrderDetail}`}>
      <p className="text text_type_digits-large">{props.orderNumber} </p>
      <p className="text text_type_main-default mt-8"> идентификатор заказа </p>
      <img src={ReadyButton} className="mt-15 mb-15" alt="Будущая кнопка"></img>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить{' '}
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитель готовности на орбитальной станции{' '}
      </p>
    </div>
  );
}
OrderDetails.propsTypes = {
  orderNumber: PropTypes.number,
};
