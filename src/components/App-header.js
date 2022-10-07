import { Logo,Button,BurgerIcon,ListIcon,ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import HeaderinkStyles from "./App-header.module.css";
function AppHeader(){
return (
    
    <header  className={`${HeaderinkStyles.header} pt-4`}>
        <div style={{display: "flex"}}><Button type="primary" size="small" className={`${HeaderinkStyles.button} pb-4 pt-4 mr-2`} >
        <BurgerIcon type="primary" className="pl-5" /> <p className={`text text_type_main-default pl-2`}>Констуктор</p>
        </Button>
        <Button type="primary" size="small" className={`${HeaderinkStyles.button} pb-4 pt-4`} >
        <ListIcon type="primary" className="pl-5"/> <p className={`text text_type_main-default p-1`}>Лента заказов</p>
        </Button></div>
        
        <Logo/>
        <Button type="primary" size="small" className={`${HeaderinkStyles.button}  pb-4 pt-4`} >
        <ProfileIcon type="primary" className="pl-5" /> <p className={`text text_type_main-default p-1`}>Личный кабинет</p>
        </Button>
</header>
);
}
export default AppHeader