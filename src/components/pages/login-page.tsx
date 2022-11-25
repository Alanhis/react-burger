import React from 'react';
import PagesStyle from './pages.module.css';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { fetchLogin } from '../../services/actions/auth';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from '../../services/store';
export function LoginPage() {
  const [email, setEmail] = React.useState('test@gmail.com');
  const [password, setPassword] = React.useState('');
  const dispatch = useAppDispatch();
  const history = useHistory();
  const data = useSelector(store => store);
  return (
    <div className={`${PagesStyle.MainDiv} pb-6`}>
      <form
        onSubmit={() => {
          dispatch(fetchLogin(email, password, history));
        }}
      >
        <p className="text text_type_main-medium pb-6">Вход</p>
        <Input
          type={'email'}
          placeholder={'E-mail'}
          value={email}
          onChange={e => setEmail(e.target.value)}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
        />
        <div className="pt-6 pb-6">
          <Input
            type={'password'}
            placeholder={'Пароль'}
            onChange={e => setPassword(e.target.value)}
            value={password}
            icon={'ShowIcon'}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Войти
        </Button>
      </form>
      <div className="pt-15">
        <div className={`${PagesStyle.buttomText} pb-4`}>
          <p className="text text_type_main-small">
            Вы — новый пользователь ?{' '}
          </p>
          <NavLink className="text text_type_main-small" to="/register">
            Зарегистрироваться
          </NavLink>
        </div>
        <div className={`${PagesStyle.buttomText}`}>
          <p className="text text_type_main-small">Забыли пароль ? </p>
          <NavLink className="text text_type_main-small" to="forgot-password">
            {' '}
            Восстановить пароль
          </NavLink>
        </div>
      </div>
    </div>
  );
}
