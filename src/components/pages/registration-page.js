import React from 'react'
import PagesStyle from './pages.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
export function RegistrationPage() {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('test@gmail.com')
    const [password, setPassword] = React.useState('')
    return (
        <div className={`${PagesStyle.MainDiv} pb-6`}>
            <p className='text text_type_main-medium pb-6'>Регистрация</p>
            <Input
                type={'text'}
                placeholder={'Имя'}
                value={name}
                onChange={e => setName(e.target.value)}
                name={'name'}
                error={false}
                errorText={'Ошибка'}

            />
            <div className='pt-6 pb-6'>
                <Input
                    type={'email'}
                    placeholder={'E-mail'}
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    icon={'ShowIcon'}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}

                />
            </div>
            <div className=' pb-6'>
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
            <Button type="primary" size="medium">
                Зарегистрироваться
            </Button>
            <div className='pt-15'>

                <div className={`${PagesStyle.buttomText}`}>
                    <p className='text text_type_main-small' >Уже зарегистрированы? </p>
                    <Link className='text text_type_main-small' to='/login' > Войти</Link>
                </div>
            </div>
        </div>
    )
}