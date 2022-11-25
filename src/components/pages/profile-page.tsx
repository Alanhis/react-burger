import React, { useEffect } from 'react';
import PagesStyle from './pages.module.css';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { logOutFetch } from '../../services/actions/auth';
import { useHistory } from 'react-router-dom';
import { getUserData } from '../../services/actions/user';
import { store } from '../../services/store';
import { useAppDispatch } from '../../services/store';
import { updateUserData } from '../../services/actions/user';
import { RootState } from '../../services/store';
export function ProfilePage() {
  const [EmailChanges, setEmailChanges] = React.useState(true);
  const [LoginChanges, setLoginChanges] = React.useState(true);
  const [PasswordChanges, setPasswordChanges] = React.useState(true);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const data = useSelector((store: RootState) => store);
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('Password');
  // оставить на неопределенный срок const [passwordType, setPasswordType] = React.useState('password');
  useEffect(() => {
    dispatch(getUserData(setName, setEmail));
  }, []);
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
          to="/profile/order"
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
      <div className={`${PagesStyle.ButtonDiv} ml-15`}>
        <form
          onReset={e => {
            e.preventDefault();
            setName(data.user.name);
            setEmail(data.user.email);
            setPassword('Password');
          }}
          onSubmit={e => {
            e.preventDefault();
            dispatch(updateUserData(email, name, setName, setEmail, history));
          }}
        >
          <Input
            type={'text'}
            placeholder={'Имя'}
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={LoginChanges}
            onIconClick={() => setLoginChanges(!LoginChanges)}
            icon={'EditIcon'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
          />
          <div className="pt-3 pb-3">
            <Input
              type={'email'}
              placeholder={'Логин'}
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={EmailChanges}
              onIconClick={() => setEmailChanges(!EmailChanges)}
              icon={'EditIcon'}
              name={'name'}
              error={false}
              errorText={'Ошибка'}
            />
          </div>
          <Input
            type={'password'}
            placeholder={'Пароль'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={PasswordChanges}
            //   onIconClick={() => {
            //     setPasswordChanges(!PasswordChanges);
            //     if (passwordType === 'password') {
            //       setPasswordType('text');
            //     } else {
            //       setPasswordType('password');
            //     }
            //   }}
            icon={'EditIcon'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
          />

          {(data.user.name !== name ||
            data.user.email !== email ||
            password !== 'Password') && (
            <div className="mt-5">
              <Button htmlType="reset" type="secondary" size="medium">
                Отмена
              </Button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
