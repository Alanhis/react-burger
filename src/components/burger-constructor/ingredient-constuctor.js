import { ConstructorContext } from '../../utils/constructor-context';
import { useMemo } from 'react';
export const IngredientConstructor = (props) => {

    const burgerBun = []
    const otherIngredint = []

    useMemo(() => (props.map(element => {
        if (element.type == 'bun') {

            burgerBun.shift()
            burgerBun.push(element)
        } else {
            otherIngredint.push(element)
        }
    })))
    return ([...burgerBun, ...otherIngredint])
}