import PropTypes from 'prop-types';
import { useEffect } from 'react';
// Подкорректировать и разобрать как оптимальнее все отобразить
export const getIngredientsForConstructor = (props:{calories: number,
    carbohydrates: number,
    fat: number,
    image:string,
    image_large: string,
    image_mobile:string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string}[]) => {

    const burgerBun:  {calories: number,
        carbohydrates: number,
        fat: number,
        image:string,
        image_large: string,
        image_mobile:string,
        name: string,
        price: number,
        proteins: number,
        type: string,
        __v: number,
        _id: string}[] | any = []
    const otherIngredint: {calories: number,
        carbohydrates: number,
        fat: number,
        image:string,
        image_large: string,
        image_mobile:string,
        name: string,
        price: number,
        proteins: number,
        type: string,
        __v: number,
        _id: string}[] | any = []


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