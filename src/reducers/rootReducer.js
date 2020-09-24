import { combineReducers } from 'redux';
import { recipeReducer } from '../reducers/recipes';
import { accountReducer } from '../reducers/index';

export default combineReducers({ recipeReducer, accountReducer });