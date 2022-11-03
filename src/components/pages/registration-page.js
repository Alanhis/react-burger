import React from 'react'
import PagesStyle from './pages.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerFetch } from '../../services/actions/auth';
export function RegistrationPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const data = useSelector(store => store)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('test@gmail.com')
    const [password, setPassword] = React.useState('')

    const functinoOnClick = (name, email, password) => {
        if (name && email && password) {
            dispatch(registerFetch(email, password, name))
            if (!data.auth.isRequiredError) {
                history.push('/login')
            }
        } else {
            alert("Вы не заполнили все данные, попробуйте еще раз")
        }
    }
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
            <Button type="primary" size="medium" onClick={() => functinoOnClick(name, email, password)}>
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