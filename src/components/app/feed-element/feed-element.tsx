import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';
import FeedStype from './/feed-element.module.css';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';

import { useAppDispatch } from '../../../services/store';
import { WS_CONNECTION_START } from '../../../services/actions/wsAction';
import { getCookie } from '../../../utils/getCookie';
export function FeedElement() {
  const RootData = useSelector((data: RootState) => data);
  const dispatch = useAppDispatch();
  const location = useLocation();
  if (RootData.feed.messages[0] === undefined) {
    if (location.pathname.includes('/profile/orders')) {
      dispatch({
        type: WS_CONNECTION_START,
        payload:
          'wss://norma.nomoreparties.space/orders?token=' +
          getCookie('accessToken')?.split(' ')[1],
      });
    } else if (location.pathname.includes('/feed')) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: 'wss://norma.nomoreparties.space/orders/all',
      });
    }
  }

  const testData = RootData.feed.messages[0];
  const { id } = useParams<{ id?: string }>();
  const ingredient = RootData.ingredients.ingredient;
  let finalPrice = 0;
  let finalData: any[] = [];
  let objectData;
  let counts;
  if (testData) {
    counts = testData.orders
      .filter((data: any) => data.number == id)[0]
      .ingredients.reduce((counts: any, name: any) => {
        counts[name] = (counts[name] || 0) + 1;
        return counts;
      }, {});
    for (const [key, value] of Object.entries(counts)) {
      objectData = ingredient.filter((data: any) => data._id === key);
      let test = objectData.map((elements: any) => {
        return {
          ...elements,
          counts: value,
        };
      });
      finalData.push(test[0]);
    }
  }
  return (
    <>
      {ingredient.length > 0 && testData && (
        <>
          <p
            className={`${FeedStype.top} pl-4 text text_type_main-default pb-10`}
          >
            #
            {testData.orders.filter((data: any) => data.number == id)[0].number}
          </p>
          <div className={`${FeedStype.top} pl-4`}>
            <p className="text text_type_main-default">
              {testData.orders.filter((data: any) => data.number == id)[0].name}
            </p>
            {testData.orders.filter((data: any) => data.number == id)[0]
              .status === 'pending' ? (
              <p className={`${FeedStype.status_doing}`}>Готовится</p>
            ) : testData.orders.filter((data: any) => data.number == id)[0]
                .status === 'done' ? (
              <p>Выполнен</p>
            ) : (
              <p className={`${FeedStype.status_cancel}`}>Отменен</p>
            )}
            <p className="text text_type_main-default pb-4">Состав:</p>

            {finalData.map((element: any) => {
              return (
                <div
                  key={element._id}
                  className={`${FeedStype.elements} mb-4 pr-4`}
                >
                  <div className={`${FeedStype.elements} `}>
                    <img
                      className={`${FeedStype.image}`}
                      src={element.image}
                    ></img>
                    <p className="text text_type_main-default pl-2">
                      {element.name}
                    </p>
                  </div>
                  <div className={`${FeedStype.elements}`}>
                    <p className="text text_type_digits-default pr-2">
                      {element.counts} x {element.price}
                    </p>
                    <CurrencyIcon type={'primary'} />
                  </div>
                </div>
              );
            })}
            <div className={`${FeedStype.elements} pb-4 pr-4`}>
              <p className="text text_type_main-small text_color_inactive">
                {
                  <FormattedDate
                    date={
                      new Date(
                        testData.orders.filter(
                          (data: any) => data.number == id
                        )[0].createdAt
                      )
                    }
                  />
                }{' '}
                i-GTM+3
              </p>
              <div className={`${FeedStype.elements} pb-4`}>
                <p className="text text_type_digits-default pr-2 ">
                  {finalPrice}
                </p>
                <CurrencyIcon type={'primary'} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
