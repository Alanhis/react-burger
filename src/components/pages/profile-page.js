import React, { useEffect } from 'react'
import PagesStyle from './pages.module.css'
import { NavLink } from 'react-router-dom'
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { logOutFetch } from '../../services/actions/auth'
import { useHistory } from 'react-router-dom'
import { getUserData } from '../../services/actions/user'
import { store } from '../../services/store'
import { updateUserData } from '../../services/actions/user'
export function ProfilePage() {
    const [EmailChanges, setEmailChanges] = React.useState(true);
    const [LoginChanges, setLoginChanges] = React.useState(true);
    const [PasswordChanges, setPasswordChanges] = React.useState(true);
    const dispatch = useDispatch();
    const history = useHistory();
    const data = useSelector(store => store);
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [password, setPassword] = React.useState('Password')
    const [passwordType, setPassowrdType] = React.useState('password')
    useEffect(() => {
        dispatch(getUserData(data.auth.authorization, setName, setEmail))

    }, [])
    return (
        <div className={`${PagesStyle.profileDiv} `}>
            <div className={`${PagesStyle.Navigation} pb-6`}>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
                    activeClassName={`${PagesStyle.activebuttomText} `}
                    to='/profile'
                    exact>Профиль</NavLink>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
                    activeClassName={`${PagesStyle.activebuttomText} `}
                    to='/profile/order'
                    exact>История заказов</NavLink>
                <NavLink className={`${PagesStyle.buttomText} text text_type_main-default pb-6`}
                    activeClassName={`${PagesStyle.activebuttomText} `}
                    to='/' onClick={async () => {
                        dispatch(logOutFetch())
                    }} exact>Выход</NavLink>
                <p className='text text_type_main-small text_color_inactive'>В этом разделе вы можете изменить свои персональные данные</p>
            </div>
            <div className={`${PagesStyle.ButtonDiv} ml-15`}>
                <Input
                    type={'text'}
                    placeholder={'Имя'}
                    value={name}
                    onChange={e => setName(e.target.value)}

                    disabled={LoginChanges}
                    onIconClick={() => setLoginChanges(!LoginChanges)}
                    icon={"EditIcon"}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}

                />
                <div className='pt-3 pb-3'>
                    <Input
                        type={'email'}
                        placeholder={'Логин'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        disabled={EmailChanges}
                        onIconClick={() => setEmailChanges(!EmailChanges)}
                        icon={"EditIcon"}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}

                    />
                </div>
                <Input
                    type={passwordType}
                    placeholder={'Пароль'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={PasswordChanges}
                    onIconClick={() => {
                        setPasswordChanges(!PasswordChanges);
                        if (passwordType === 'password') {
                            setPassowrdType('text')
                        } else {
                            setPassowrdType('password')
                        }
                    }}
                    icon={"EditIcon"}
                    name={'name'}
                    error={false}
                    errorText={'Ошибка'}

                />

                {(data.user.name !== name || data.user.email !== email || password !== 'Password') && (<div className='mt-5'>
                    <Button type="secondary" size="medium" onClick={() => {
                        setName(data.user.name);
                        setEmail(data.user.email);
                        setPassword('Password')
                    }}>Отмена</Button>
                    <Button type="primary" size="medium" onClick={() => { dispatch(updateUserData(data.auth.authorization, email, name, setName, setEmail, history)) }}>Сохранить</Button>
                </div>)}
            </div>
        </div>
    )
}