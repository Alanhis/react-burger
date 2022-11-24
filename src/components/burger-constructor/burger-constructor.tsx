import BurgerConstuctorStyle from './burger-constructor.module.css';
import { getIngredientsForConstructor } from './ingredient-constuctor';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMPONENT, DELETE_BUN } from '../../services/actions/conductor';
import { useDrop } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../services/store';
import BurgerConstuctorList from '../burger-cunstructor-list/burger-constructor-list';
export default function BurgerConstuctor() {
  const data = useSelector((store: RootState) => store.conductor.orderDetails);

  const dispatch = useDispatch();
  const [{ isHover }, dropTargetRef] = useDrop({
    accept: 'ingredient',
    collect: monitor => ({
      isHover: monitor.isOver(),
    }),
    // TO DO: Поменять тип данных Item с any на что-то нормальное
    drop(item: any) {
      if (item.type === 'bun') {
        dispatch({
          type: DELETE_BUN,
          item: item,
        });
        dispatch({
          type: ADD_COMPONENT,
          item: {
            ...item,
            dragId: uuidv4(),
          },
        });
      } else {
        dispatch({
          type: ADD_COMPONENT,
          item: {
            ...item,
            dragId: uuidv4(),
          },
        });
      }
    },
  });

  const ingredientfimal = getIngredientsForConstructor(data);

  return (
    <section
      ref={dropTargetRef}
      className={`${BurgerConstuctorStyle.IngredientList}  mb-2  mt-25 `}
    >
      {ingredientfimal.length ? (
        <BurgerConstuctorList data={ingredientfimal} />
      ) : (
        <p>Нет данных</p>
      )}
    </section>
  );
}
