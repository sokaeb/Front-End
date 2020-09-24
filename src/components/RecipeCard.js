import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RecipeCard = (props) => {
    const { recipe, setUserRecipes, userRecipes } = props
    const history = useHistory();

    // DELETE FUNCTION works when userRecipes is inside dependency array in UserProfile useEffect
    // doesn't work when the dependency array is empty
    const handleDelete = evt => {
        evt.preventDefault();
        axiosWithAuth()
        .delete(`http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipe/${recipe.recipeid}`)
        .then(res => {
            // setUserRecipes(userRecipes);
        })
        .catch(err => {
            console.log(err)
        });
    };

    return (
        <>
            <div className='recipeCard'>
                <h4>{recipe.title}</h4>
                <h5>Source: {recipe.source}</h5>
                <h6>Prep Time: {recipe.preptime}</h6>
                <div>
                    <p style={{fontWeight:"bold"}}>Ingredients</p>
                        {recipe.ingredients.map((item) => {
                            return (
                                <div key={item.ingredient.ingredientid}>{item.ingredient.name} {item.ingredient.amount}</div>
                            )
                        })}
                </div>
                    <br/>
                <div className='instruction'>{recipe.instruction}</div>
                    <p style={{fontWeight:"bold"}}>Categories</p>
                        {recipe.categories.map((item)=>{
                            return(
                                <div key={item.categories.categoryid}>{item.categories.categoryname}</div>
                            )
                        })}
                <button onClick={() => history.push(`/update-recipe/${recipe.recipeid}`)}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default RecipeCard;