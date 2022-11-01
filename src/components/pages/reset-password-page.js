import React from 'react'
import PagesStyle from './pages.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useHistory } from 'react-router-dom'
import { url } from '../app/app'
import { checkResponce } from '../../utils/checkResponse'
export function ResetPasswordPage() {
    const [code, setcode] = React.useState('')
    const [password, setPassword] = React.useState('')
    const history = useHistory()
    const functinoOnClick = (code, password) => {

        const data = {
            password: password,
            token: code
        }
        fetch(url + `/password-reset/reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(checkResponce).then(data => {
            console.log(data)
            alert("Пароль обновлен")
            history.push("/")
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div className={`${PagesStyle.MainDiv} pb-6`}>
            <p className='text text_type_main-medium pb-6'>Восстановление пароля</p>
            <Input
                type={'password'}
                placeholder={'Введите новый пароль'}
                onChange={e => setPassword(e.target.value)}
                value={password}
                name={'name'}
                error={false}
                errorText={'Ошибка'}

            />
            <div className='pt-6 pb-6'>
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
            <Button type="primary" size="medium" onClick={() => functinoOnClick(code, password)}>
                Сохранить
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