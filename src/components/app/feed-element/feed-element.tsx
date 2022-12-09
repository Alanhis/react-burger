import { useParams } from 'react-router-dom';
import { data } from '../../../utils/testdata';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';
import FeedStype from './/feed-element.module.css';
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components';
export function FeedElement() {
  const RootData = useSelector((data: RootState) => data);

  const testData = data;
  const { id } = useParams<{ id?: string }>();
  const feedData = testData.orders.filter((data: any) => data.number == id);
  let finalPrice = 0;

  const getDate = <FormattedDate date={new Date(feedData[0].createdAt)} />;
  console.log('success');
  return (
    <>
      {RootData.ingredients.ingredient.length > 0 && (
        <>
          <p
            className={`${FeedStype.top} pl-4 text text_type_main-default pb-10`}
          >
            #{feedData[0].number}
          </p>
          <div className={`${FeedStype.top} pl-4`}>
            <p className="text text_type_main-default">{feedData[0].name}</p>
            {feedData[0].status === 'pending' ? (
              <p className={`${FeedStype.status_doing}`}>Готовится</p>
            ) : feedData[0].status === 'done' ? (
              <p>Выполнен</p>
            ) : (
              <p className={`${FeedStype.status_cancel}`}>Отменен</p>
            )}
            <p className="text text_type_main-default pb-4">Состав:</p>
            {feedData[0].ingredients.map(element => {
              const countIngredient = feedData[0].ingredients.filter(
                (data: any) => data === element
              ).length;
              const ingredientFeed = RootData.ingredients.ingredient.filter(
                (data: any) => data._id === element
              );
              finalPrice += ingredientFeed[0].price;
              console.log(ingredientFeed);
              return (
                <div className={`${FeedStype.elements} mb-4 pr-4`}>
                  <div className={`${FeedStype.elements} `}>
                    <img
                      className={`${FeedStype.image}`}
                      src={ingredientFeed[0].image}
                    ></img>
                    <p className="text text_type_main-default pl-2">
                      {ingredientFeed[0].name}
                    </p>
                  </div>
                  <div className={`${FeedStype.elements}`}>
                    <p className="text text_type_digits-default pr-2">
                      {countIngredient} x {ingredientFeed[0].price}
                    </p>
                    <CurrencyIcon type={'primary'} />
                  </div>
                </div>
              );
            })}
            <div className={`${FeedStype.elements} pb-4 pr-4`}>
              <p className="text text_type_main-small text_color_inactive">
                {getDate} i-GTM+3
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
