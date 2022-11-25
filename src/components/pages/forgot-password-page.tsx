import React from 'react';
import PagesStyle from './pages.module.css';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useHistory } from 'react-router-dom';
import { forgotPasswordLogic } from '../../services/actions/auth';
import { useAppDispatch } from '../../services/store';

export function ForgotPasswordPage() {
  const [email, setEmail] = React.useState('');
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <div className={`${PagesStyle.MainDiv} pb-6`}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <form onSubmit={() => dispatch(forgotPasswordLogic(history, email))}>
        <div className="pt-6 pb-6">
          <Input
            type={'email'}
            placeholder={'Укажите e-mail'}
            onChange={e => setEmail(e.target.value)}
            value={email}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <div className="pt-15">
        <div className={`${PagesStyle.buttomText} pb-4`}>
          <p className="text text_type_main-small">Вспомнили пароль? </p>
          <NavLink className="text text_type_main-small" to="/login">
            Войти
          </NavLink>
        </div>
      </div>
    </div>
  );
}
