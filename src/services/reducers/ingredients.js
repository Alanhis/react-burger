

const initialState = {
    ingredient: [],
    isRequired: false,
    isRequiredError: false,
    isModalIngredientOpen: false,
    selectredIngredient: []
}


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}