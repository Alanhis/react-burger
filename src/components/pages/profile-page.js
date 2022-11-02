import React from 'react'
import PagesStyle from './pages.module.css'
import { NavLink } from 'react-router-dom'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
export function ProfilePage() {
    const [EmailChanges, setEmailChanges] = React.useState('true')
    const [LoginChanges, setLoginChanges] = React.useState('true')
    const [PasswordChanges, setPasswordChanges] = React.useState('true')
    return (
        <div className={`${PagesStyle.profileDiv} `}>
            <div className={`${PagesStyle.Navigation} pb-6`}>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-6`} to='/profile'>Профиль</NavLink>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-6`} to='/profile'>История заказов</NavLink>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-20`} to='/profile'>Выход</NavLink>
                <p className='text text_type_main-small text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className='ml-15'>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    disabled={EmailChanges}
                    onIconClick={() => setEmailChanges(!EmailChanges)}
                    icon={"EditIcon"}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}

                />
                <div className='pt-3 pb-3'>
                    <Input
                        type={'email'}
                        placeholder={'Логин'}
                        // value={email}
                        // onChange={e => setEmail(e.target.value)}
                        disabled={LoginChanges}
                        onIconClick={() => setLoginChanges(!LoginChanges)}
                        icon={"EditIcon"}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}

                    />
                </div>
                <Input
                    type={'password'}
                    placeholder={'Пароль'}
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                    disabled={PasswordChanges}
                    onIconClick={() => setPasswordChanges(!PasswordChanges)}
                    icon={"EditIcon"}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}

                />
            </div>
        </div>
    )
}