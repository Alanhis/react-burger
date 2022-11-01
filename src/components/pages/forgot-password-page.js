import React from 'react'
import PagesStyle from './pages.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink } from 'react-router-dom'
export function ForgotPasswordPage() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    return (
        <div className={`${PagesStyle.MainDiv} pb-6`}>
            <p className='text text_type_main-medium pb-6'>Восстановление пароля</p>

            <div className='pt-6 pb-6'>
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
            <Button type="primary" size="medium">
                Восстановить
            </Button>
            <div className='pt-15'>
                <div className={`${PagesStyle.buttomText} pb-4`}>
                    <p className='text text_type_main-small' >Вспомнили пароль?   </p>
                    <NavLink className='text text_type_main-small' to='/login' end >Войти</NavLink>
                </div>
            </div>
        </div>
    )
}