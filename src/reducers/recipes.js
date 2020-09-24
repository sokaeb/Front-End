import { ADD_RECIPE } from '../actions/recipeActions';

export const initialState = {
    title: "",
    source: "", 
    ingredients: [
    { ingredient: {
            ingredientid: "",
            name: "",
            amount: ""
        }
    }
    ],
    instruction: ""
}

export const recipeReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_RECIPE:
            return {
                ...state, 
                title: state.title,
                source: state.source,
                ingredients: [...state.ingredients],
                instruction: state.instruction
            }
    default:
        return state;
    }
}