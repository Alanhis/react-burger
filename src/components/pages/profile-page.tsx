import React, { useEffect } from 'react';
import PagesStyle from './pages.module.css';
import { NavLink, Route } from 'react-router-dom';
import { ProfilePageMainElement } from '../app/profile-elements/profile-page-main-element';
import { ProfileOrderPage } from './profile-order-page';
import { logOutFetch } from '../../services/actions/auth';
import { useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import { useAppDispatch } from '../../services/store';

export function ProfilePage() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  // оставить на неопределенный срок const [passwordType, setPasswordType] = React.useState('password');

  return (
    <div className={`${PagesStyle.profileDiv} `}>
      <div className={`${PagesStyle.Navigation} pb-6`}>
        <NavLink
          className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
          activeClassName={`${PagesStyle.activebuttomText} `}
          to="/profile"
          exact
        >
          Профиль
        </NavLink>
        <NavLink
          className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
          activeClassName={`${PagesStyle.activebuttomText} `}
          to="/profile/orders"
          exact
        >
          История заказов
        </NavLink>
        <NavLink
          className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
          activeClassName={`${PagesStyle.activebuttomText} `}
          to="/"
          onClick={e => {
            e.preventDefault();
            dispatch(logOutFetch(history));
          }}
          exact
        >
          Выход
        </NavLink>
        <p className="text text_type_main-small text_color_inactive">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <Route path="/profile" exact>
        <ProfilePageMainElement />
      </Route>
      <Route path="/profile/orders" exact>
        <ProfileOrderPage key={v4()} />
      </Route>
    </div>
  );
}
