
import BurgerConstuctorStyle from './burger-constructor.module.css';
import { getIngredientsForConstructor } from './ingredient-constuctor';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMPONENT, DELETE_BUN } from '../../services/actions/conductor';
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import BurgerConstuctorList from '../burger-cunstructor-list/burger-constructor-list.js'
export default function BurgerConstuctor() {
	const data = useSelector(store => store);

	const dispatch = useDispatch()
	const [{ isHover }, dropTargetRef] = useDrop({
		accept: 'ingredient',
		collect: monitor => ({
			isHover: monitor.isOver()
		}),
		drop(item) {
			if (item.type === 'bun') {
				dispatch({
					type: DELETE_BUN,
					item: item
				})
				dispatch({
					type: ADD_COMPONENT,
					item: {
						...item,
						dragId: uuidv4()
					}
				})
			} else {
				dispatch({
					type: ADD_COMPONENT,
					item: {
						...item,
						dragId: uuidv4()
					}
				})
			}
		}
	})

	const ingredientfimal = getIngredientsForConstructor(data.conductor.orderDetails)



	return (
		<section ref={dropTargetRef} className={`${BurgerConstuctorStyle.IngredientList}  mb-2  mt-25 `}>
			{ingredientfimal.length ? <BurgerConstuctorList data={ingredientfimal} /> : <p>Нет данных</p>}
		</section>
	);
}
