import FeedOrderStyle from './feed-order.module.css';
import {
  FormattedDate,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { NavLink, useLocation } from 'react-router-dom';
import { Iingredient, IOriginalFeed } from '../../utils/types';
import { v4 } from 'uuid';
export default function FeedOrder(data: { data: IOriginalFeed }) {
  const location = useLocation();
  const getDate = (
    <FormattedDate key={v4()} date={new Date(data.data.createdAt)} />
  );
  const info = useSelector((store: RootState) => store.ingredients.ingredient);
  const imageOrder: any[] = [];
  let OrderPrice = 0;

  data.data.ingredients.map((data: string) => {
    info.forEach((element: Iingredient) => {
      if (element._id === data) {
        imageOrder.push(element.image_mobile);
        OrderPrice += element.price;
      }
    });
  });

  return (
    <div className={`${FeedOrderStyle.feedElement} pl-5 pr-5 mb-4`}>
      <NavLink
        key={data.data.number}
        className={`${FeedOrderStyle.link}`}
        to={{
          pathname: `/feed/${data.data.number}`,
          state: { background: location },
        }}
      >
        <div className={`${FeedOrderStyle.feedElement_top} pb-3`}>
          <p className="text text_type_main-small">#{data.data.number}</p>
          <p className="text text_type_main-small text_color_inactive">
            {getDate} i-GTM+3
          </p>
        </div>
        <p className="text text_type_main-default">{data.data.name}</p>
        <div // eslint-disable-next-line no-debugger
          key={data.data._id}
          className={`${FeedOrderStyle.feedElement_top} pt-3 pb-4`}
        >
          <div className={`${FeedOrderStyle.feedElement_image_box}`}>
            {imageOrder.map((element, index) => {
              if (index < 5) {
                return (
                  <img
                    key={index}
                    src={element}
                    className={`${FeedOrderStyle.feedElement_image} `}
                  ></img>
                );
              } else if (index === 5) {
                return (
                  <>
                    <img
                      key={index}
                      src={element}
                      className={`${FeedOrderStyle.feedElement_image} `}
                    ></img>
                    <div
                      className={`${FeedOrderStyle.feedElement_orderNumber_background}`}
                    >
                      <p>+{imageOrder.length - index}</p>
                    </div>
                  </>
                );
              }
            })}
          </div>
          <div className={`${FeedOrderStyle.feedElement_Price} `}>
            <p className="text text_type_digits-default pr-3">{OrderPrice}</p>{' '}
            <CurrencyIcon key={v4()} type="primary" />
          </div>
        </div>
      </NavLink>
    </div>
  );
}
