import React from 'react';
import PagesStyle from './pages.module.css';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useHistory } from 'react-router-dom';
import { resetPasswordLogic } from '../../services/actions/auth';
import { useAppDispatch } from '../../services/store';

export function ResetPasswordPage() {
  const [code, setcode] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const dispatch = useAppDispatch();
  return (
    <div className={`${PagesStyle.MainDiv} pb-6`}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <Input
        type={'password'}
        placeholder={'Введите новый пароль'}
        onChange={e => setPassword(e.target.value)}
        value={password}
        name={'name'}
        error={false}
        errorText={'Ошибка'}
      />
      <div className="pt-6 pb-6">
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => setcode(e.target.value)}
          value={code}
          name={'code'}
          error={false}
          errorText={'Ошибка'}
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={() => dispatch(resetPasswordLogic(code, password, history))}
      >
        Сохранить
      </Button>
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
