import React from 'react'
import PagesStyle from './pages.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useHistory } from 'react-router-dom'
import { url } from '../app/app'
import { checkResponce } from '../../utils/checkResponse'
export function ForgotPasswordPage() {
    const [email, setEmail] = React.useState('')
    const history = useHistory()
    const functinoOnClick = (email) => {

        const data = { email: email }
        fetch(url + `/password-reset`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then(checkResponce).then(data => {

            alert("Код проверки отправлен на почту")
            history.push("/reset-password")
        }).catch(err => {
            console.log(err)
        })

    }
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
            <Button type="primary" size="medium" onClick={(() => functinoOnClick(email))}>
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