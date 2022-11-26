import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Iingredient } from '../../utils/types';
// Подкорректировать и разобрать как оптимальнее все отобразить
export const getIngredientsForConstructor = (props:Iingredient[]) => {

    const burgerBun:  Iingredient[] | any = []
    const otherIngredint:Iingredient[] | any = []


    props.forEach(element => {
        if (element.type == 'bun') {

            burgerBun.shift()
            burgerBun.push(element)
        } else {
            otherIngredint.push(element)
        }
    })
   
    return ([...burgerBun, ...otherIngredint])
}
getIngredientsForConstructor.propTypes = {
    data: PropTypes.object,
};