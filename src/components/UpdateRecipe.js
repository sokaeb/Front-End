import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialRecipeFormValues = {
        ///// TEXT INPUTS /////
        title: '',
        source: '',
        preptime: '',
        ingredients: [],
        categories: [],
        instruction: '',
    }
    
const ingredientsObj = {
        ingredientid: 42,
        name: '',
        amount: '',
    }
    
const categoriesObj = {
      categoryid: 56,
      categoryname: '',
    }

const UpdateRecipe = (props) => {
    const [ recipeDetails, setRecipeDetails ] = useState(initialRecipeFormValues)
    const [ ingredients, setIngredients ] = useState(ingredientsObj)
    const [categories, setCategories ] = useState(categoriesObj)
    const userInfo = useSelector(state => state.accountReducer.user)
    const { id } = useParams();
    const history = useHistory();
    const { userRecipes, setUserRecipes } = props;

    const inputChange = evt => {
        setRecipeDetails({
            ...recipeDetails,
            [evt.target.name]: evt.target.value
        });
    };

    const postUpdatedRecipe = updatedRecipe => {
        axiosWithAuth()
        .put(`http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipe/${id}`, updatedRecipe)
        .then(res => {
            console.log('put response', res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleSubmit = evt => {
        evt.preventDefault();

        const updatedRecipe = {
            title: recipeDetails.title.trim(),
            source: recipeDetails.source.trim(),
            preptime: recipeDetails.preptime.trim(),
            ingredients: [{ingredient: ingredients}],
            categories: [{categories: categories}],
            instruction: recipeDetails.instruction.trim(),
            user: {
              userid: userInfo.userid,
              username: userInfo.username,
              email: userInfo.email,
              roles: [
                  {
                      role: {
                          roleid: userInfo.roles[0].role.roleid,
                          name: userInfo.roles[0].role.name
                      }
                  }
              ],
          }
        }
    postUpdatedRecipe(updatedRecipe)
    }
        // axiosWithAuth()
        // .put(`http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipe/${id}`, recipeDetails)
        // .then(res => {
        //     console.log('put response', res)
        // })
        // .catch(err => {
        //     console.log(err)
        // })

    // REPOPULATES EDIT FORM WITH THE RECIPE INFO OF THE ID REQUESTED
    useEffect(() => {
        axiosWithAuth()
        .get(`http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipe/${id}`)
        .then(res => {
            setRecipeDetails(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return (
        <div>
      <form className='form container' onSubmit={handleSubmit}>
            <div className='form-recipe inputs'>       
        
                 <label>Recipe Title&nbsp;
                        <input
                            value={recipeDetails.title}
                            onChange={inputChange}
                            name='title'
                            type='text'
                        />
                        </label>
                        <br/>
                <label>Source&nbsp;
                        <input
                            value={recipeDetails.source}
                            onChange={inputChange}
                            name='source'
                            type='text'
                        />
                        </label>
                        <br/>
                <label>Prep + Cook Time&nbsp;
                        <textarea 
                            value={recipeDetails.preptime}
                            onChange={inputChange}
                            name='preptime'
                            type='text'
                            placeholder='prep:30min total time:2hr'
                        />
                        </label>
                        <br/>
                        
                <label>Ingredients&nbsp;
                        <input
                            value={recipeDetails.ingredients}
                            onChange={inputChange}
                            name='ingredients'
                            type='text'
                        />
                        </label>
                        <br/>

                      <label>Instructions&nbsp;
                        <textarea rows = "10" cols ="30"
                            value={recipeDetails.instruction}
                            onChange={inputChange}
                            name='instruction'
                            type='text'
                        />
                        </label>
                        <br/>
              
                        <label>Recipe Category&nbsp;
                        <input
                            value={recipeDetails.categories}
                            onChange={inputChange}
                            name='categories'
                            type='text'
                        />
                        </label>   
                        <br/>
                <button>Submit</button>   
            </div>
        </form>
        </div>
    )
}

export default UpdateRecipe;