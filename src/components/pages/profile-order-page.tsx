import PagesStyle from '../pages/pages.module.css';
import { getCookie } from '../../utils/getCookie';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../services/store';
import { WS_CONNECTION_START } from '../../services/actions/wsAction';
import { ProfileOrder } from '../app/profile-elements/profile-order';
import { IOriginalFeed } from '../../utils/types';
import { v4 } from 'uuid';
export function ProfileOrderPage() {
  const dispatch = useAppDispatch();
  const RootData = useSelector((data: RootState) => data.feed);
  const [currData, setCurrData] = useState(RootData);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload:
        'wss://norma.nomoreparties.space/orders?token=' +
        getCookie('accessToken'),
    });
  }, [dispatch]);
  useEffect(() => {
    setCurrData(RootData);
  });

  return (
    <>
      {currData.messages[0] && (
        <div className={`${PagesStyle.scroller_profile} custom-scroll pl-10`}>
          {currData.messages[0].orders.map((element: IOriginalFeed) => {
            return <ProfileOrder data={element} key={v4()} />;
          })}
        </div>
      )}
    </>
  );
}
