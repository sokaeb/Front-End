import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import RecipeForm from './RecipeForm';
import RecipeCard from './RecipeCard';
import { SET_USER_INFO } from '../actions';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { addRecipe } from '../actions/recipeActions';


const UserProfile = (props) => {
    const [ userRecipes, setUserRecipes ] = useState([])
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    // GETTING RECIPES FROM BACKEND
    const getRecipeList = () => {
        axios
        .get('http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipes')
        .then(res => {
            // console.log("the response from back", res)
            setUserRecipes(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        axiosWithAuth()
        .get('/users/userinfo')
        .then(res => {
            dispatch({ type: SET_USER_INFO, payload: res.data})
            // console.log(res)
        })
    }

    // RESETS THE STATE WHEN NEW RECIPE IS ADDED *** needs something in dependency array so state is rerendered with the added recipe ***
    useEffect(() => {
            getRecipeList();
        }, []);

    // useEffect(() => {
    //     axios
    //     .get('http://hsmm-secretfamilyrecipe.herokuapp.com/recipes/recipes')
    //     .then(res => {
    //         // console.log("the response from back", res)
    //         setUserRecipes(res.data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    //     axiosWithAuth()
    //     .get('/users/userinfo')
    //     .then(res => {
    //         dispatch({ type: SET_USER_INFO, payload: res.data})
    //         // console.log(res)
    //     })
    // }, [])
    
    return (
        <>
            <div>
                <h1>My Recipes</h1>
                <p className='title'>Keep track of your family's favorites...</p>

                    <div className="recipeContainer">
                        {userRecipes.map((recipe) => {
                        return (
                                <RecipeCard 
                                    key={recipe.recipeid}
                                    recipe={recipe}
                                    userRecipes={userRecipes}
                                    setUserRecipes={setUserRecipes}
                                />
                                )
                            })}
                    </div>
                    <RecipeForm />
            </div>
        </>
    )
}

export default UserProfile;