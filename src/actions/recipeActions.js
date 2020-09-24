import { axiosWithAuth } from "../utils/axiosWithAuth";

export const ADD_RECIPE = 'ADD_RECIPE'

export const addRecipe = (recipe) => {
    return (dispatch) => {
        dispatch({ type: ADD_RECIPE });
        axiosWithAuth()
        .post('/recipes/recipe', recipe)
        .then(res => {
            console.log(res)
            // dispatch({
            //     type: ADD_RECIPE,
            //     payload: res
            // })
        })
        .catch(err => {
            console.log(err)
        })

    }
}