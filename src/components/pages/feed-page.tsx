import PagesStyle from './pages.module.css';

import FeedOrder from '../feed-order/feed-order';
import { useAppDispatch } from '../../services/store';
import { useEffect, useState } from 'react';
import {
  wsDisconnect,
  WS_CONNECTION_START,
} from '../../services/actions/wsAction';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { IOriginalFeed } from '../../utils/types';
export function FeedPage() {
  const dispatch = useAppDispatch();
  const RootData = useSelector((data: RootState) => data.feed);
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: 'wss://norma.nomoreparties.space/orders/all',
    });
  }, []);
  useEffect(() => {
    if (RootData.messages[0] === undefined) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: 'wss://norma.nomoreparties.space/orders/all',
      });
    }
    return () => {
      if (RootData.messages[0]) {
        dispatch(wsDisconnect());
      }
    };
  }, [RootData.messages[0], dispatch]);
  return (
    <>
      {RootData.messages[0] && (
        <div className={`${PagesStyle.feedPage} `}>
          <div>
            <p className="text text_type_main-large"> Лента заказов</p>
            <div className={`${PagesStyle.scroller} custom-scroll`}>
              {RootData.messages[0].orders.map((element: IOriginalFeed) => {
                return <FeedOrder key={element._id} data={element} />;
              })}
            </div>
          </div>
          <>
            <div className="pl-15">
              <div className={`${PagesStyle.infoPanel}`}>
                <div className="pr-10">
                  <p>Готовы:</p>
                  {RootData.messages[0].orders.filter(
                    (element: IOriginalFeed) => element.status == 'done'
                  ).length ? (
                    <div>
                      {RootData.messages[0].orders.map(
                        (element: IOriginalFeed, index: number) => {
                          if (element.status == 'done') {
                            if (index > 10) {
                              return;
                            }

                            if (index % 2 === 0) {
                              return (
                                <div
                                  className={`${PagesStyle.column} `}
                                  key={index}
                                >
                                  <div className="pr-4">{element.number}</div>
                                  {RootData.messages[0].orders[index + 1]
                                    ?.number ? (
                                    <div>
                                      {
                                        RootData.messages[0].orders[index + 1]
                                          .number
                                      }
                                    </div>
                                  ) : null}
                                </div>
                              );
                            }
                          }
                        }
                      )}
                    </div>
                  ) : (
                    <div> --</div>
                  )}
                </div>
                <div>
                  <p>В работе:</p>
                  {RootData.messages[0].orders.filter(
                    (element: IOriginalFeed) => element.status == 'pending'
                  ).length ? (
                    <div>
                      {RootData.messages[0].orders
                        .filter(
                          (element: IOriginalFeed) =>
                            element.status == 'pending'
                        )
                        .map((element: IOriginalFeed, index: number) => {
                          if (element.status == 'pending') {
                            if (index > 10) {
                              return;
                            }

                            if (index % 2 === 0) {
                              return (
                                <div
                                  className={`${PagesStyle.column} `}
                                  key={index}
                                >
                                  <div className="pr-4">{element.number}</div>
                                  {RootData.messages[0].orders[index + 1]
                                    ?.number ? (
                                    <div>
                                      {
                                        RootData.messages[0].orders[index + 1]
                                          .number
                                      }
                                    </div>
                                  ) : null}
                                </div>
                              );
                            }
                          }
                        })}
                    </div>
                  ) : (
                    <div> --</div>
                  )}
                </div>
              </div>
              <div className="pt-15">
                <p className="text text_type_main-medium">
                  Выполнено за все время:
                </p>
                <p className="text text_type_digits-large">
                  {RootData.messages[0].total}
                </p>
              </div>
              <div className="pt-15">
                <p className="text text_type_main-medium">
                  Выполнено за сегодня:
                </p>
                <p className="text text_type_digits-large">
                  {RootData.messages[0].totalToday}
                </p>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
}
