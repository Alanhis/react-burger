import {
  Logo,
  Button,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import HeaderinkStyles from './app-header.module.css';
function AppHeader() {
  const history = useHistory();
  return (
    <header className={`${HeaderinkStyles.header} pt-4`}>
      <div className={`${HeaderinkStyles.button_panel}`}>
        <Button
          type="primary"
          size="small"
          className={`${HeaderinkStyles.button} pb-4 pt-4 mb-4 mr-2`}
          onClick={() => {
            history.push('/');
          }}
          htmlType="button"
        >
          <BurgerIcon type="primary" />{' '}
          <p className={`text text_type_main-default pr-5 pl-2`}>Констуктор</p>
        </Button>
        <Button
          type="primary"
          size="small"
          className={`${HeaderinkStyles.button} pb-4 pt-4`}
          onClick={() => {
            history.push('/feed');
          }}
          htmlType="button"
        >
          <ListIcon type="primary" />{' '}
          <p className={`text text_type_main-default pr-5 p-1`}>
            Лента заказов
          </p>
        </Button>
      </div>

      <Logo />
      <Button
        type="primary"
        size="small"
        className={`${HeaderinkStyles.button}  pb-4 pt-4`}
        htmlType="button"
        onClick={() => {
          history.push('/profile');
        }}
      >
        <ProfileIcon type="primary" />{' '}
        <p className={`text text_type_main-default pr-5 p-1`}>Личный кабинет</p>
      </Button>
    </header>
  );
}
export default AppHeader;
