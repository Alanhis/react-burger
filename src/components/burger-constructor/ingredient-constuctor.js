import { ConstructorContext } from '../../utils/constructor-context';
import { useContext } from 'react';
export const IngredientConstructor = () => {
    const ingredient = useContext(ConstructorContext);
    const burgerBun = []
    const otherIngredint = []

    ingredient.map(element => {
        if (element.type == 'bun') {

            burgerBun.shift()
            burgerBun.push(element)
        } else {
            otherIngredint.push(element)
        }
    })
    return ([...burgerBun, ...otherIngredint])
}