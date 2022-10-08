import ModalStyle from './Modal.module.css';
export const IngredientDetails=props =>{
    console.log(props)
    return(
        <div className= {`${ModalStyle.IngredientPanel}`}>
            <img src={props.data.image_large}/>
            <p className="text text_type_main-medium mt-4 mb-8">
                {props.data.name}
            </p>
            <div className= {`${ModalStyle.IngredientDetail} mb-15`}>
                <div className= {`${ModalStyle.IngredientDetailElement} mr-5 `}>
                <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
                </p>
                <p className="text text_type_main-default text_color_inactive">
                 {props.data.calories}
                </p>
                </div>
                <div className= {`${ModalStyle.IngredientDetailElement} mr-5`}>
                <p className="text text_type_main-default text_color_inactive">
                Белки, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                {props.data.proteins}
                </p>
                </div>
                <div className= {`${ModalStyle.IngredientDetailElement} mr-5`}>
                <p className="text text_type_main-default text_color_inactive">
                Жиры, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                {props.data.fat}
                </p>
                </div>
                <div className= {`${ModalStyle.IngredientDetailElement}`}>
                <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
                </p>
                <p className="text text_type_main-default text_color_inactive">
                {props.data.carbohydrates}
                </p>
                </div>
                
            </div>
        </div>
    )
}