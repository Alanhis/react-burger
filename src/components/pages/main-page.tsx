import AppStyle from '../app/app.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/burger-constructor';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
export function MainPage() {


    return (

        <div className={`${AppStyle.MainBody} `}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstuctor />
            </DndProvider>
        </div>

    )
}