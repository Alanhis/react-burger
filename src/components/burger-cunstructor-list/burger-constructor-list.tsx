import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstuctorStyle from '../burger-constructor/burger-constructor.module.css';
import Modal from '../modal/modal';
import { useCallback } from 'react';
import OrderDetails from '../order-details/order-details';
import OrderedIngredient from '../ordered-ingredient/ordered-ingredient';
import { useSelector } from 'react-redux';
import { MODAL_CLOSE } from '../../services/actions/order';
import { sendOrder } from '../../services/actions/order';
import { UPDATE_CONSTRUCTOR_LIST } from '../../services/actions/conductor';
import { RootState } from '../../services/store';
import { useAppDispatch } from '../../services/store';
import { Iingredient } from '../../utils/types';
import { useHistory } from 'react-router-dom';
interface IingredientFromConstructor extends Iingredient {
  dragId: string;
  index: number;
}
export default function BurgerConstuctorList(props: {
  data: IingredientFromConstructor[];
}) {
  console.log(props);
  const dispatch = useAppDispatch();
  const data = useSelector((store: RootState) => store);
  const history = useHistory<History>();
  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = props.data[dragIndex];
      const newCards = [...props.data];

      newCards.splice(dragIndex, 1);

      newCards.splice(hoverIndex, 0, dragCard);

      dispatch({
        type: UPDATE_CONSTRUCTOR_LIST,
        item: newCards,
      });
    },
    [props.data, dispatch]
  );

  const handleCloseModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };
  const bunAmount =
    data.conductor.orderDetails.filter(
      (item: { type: string }) => item.type === 'bun'
    ).length == 1;
  const finalPrice =
    props.data.reduce(
      (previousValue: number, currentValue: { price: number }) =>
        previousValue + currentValue.price,
      0
    ) + props.data[0].price;

  return (
    <>
      {props.data[0].type === 'bun' && (
        <div className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}>
          <ConstructorElement
            text={props.data[0].name + ' (верх)'}
            price={props.data[0].price}
            type="top"
            isLocked={true}
            thumbnail={props.data[0].image}
            key={0}
          />
        </div>
      )}
      <ul className={`${BurgerConstuctorStyle.AnotherScroller} custom-scroll`}>
        {props.data.map(
          (element: IingredientFromConstructor, index: number) => {
            if (element.type !== 'bun') {
              return (
                <OrderedIngredient
                  key={element.dragId}
                  index={index}
                  item={element}
                  moveCard={moveCard}
                />
              );
            }
          }
        )}
      </ul>
      {props.data[0].type === 'bun' && (
        <div className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}>
          <ConstructorElement
            text={props.data[0].name + ' (низ)'}
            price={props.data[0].price}
            type="bottom"
            isLocked={true}
            thumbnail={props.data[0].image}
            key={props.data.length}
          />
        </div>
      )}
      <div className={`${BurgerConstuctorStyle.finalIngeredientdiv}  mt-10`}>
        <p className="text text_type_digits-medium mr-2">{finalPrice}</p>
        <CurrencyIcon type={'secondary'} />
        <div className=" ml-10">
          {bunAmount && (
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={() => {
                if (
                  !document.cookie.match(
                    /^(.*;)?\s*accessToken\s*=\s*[^;]+(.*)?$/
                  )
                ) {
                  history.push('/login');
                } else {
                  dispatch(sendOrder(props.data));
                }
              }}
            >
              Оформить заказ
            </Button>
          )}
        </div>
      </div>
      <>
        {data.order.isOpenModal && (
          <>
            <Modal title="" onClose={handleCloseModal}>
              <OrderDetails orderNumber={data.order.orderNumber} />
            </Modal>
          </>
        )}
      </>
    </>
  );
}
