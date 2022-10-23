import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const getIngredientsForConstructor = (props) => {

    const burgerBun = []
    const otherIngredint = []


    props.map(element => {
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