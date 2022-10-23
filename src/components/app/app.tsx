import AppStyle from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstuctor from '../burger-constructor/burger-constructor';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className={`${AppStyle.MainBody} `}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstuctor />
        </DndProvider>
      </div>
    </div>
  );
}
