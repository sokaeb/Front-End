import { SET_LOGGED_IN, SET_LOGGED_OUT, USER_SUCCESS, USER_LOGOUT, SET_USER_INFO } from '../actions/index';

export const initialState = {
    loggedIn: false,
    user: {
        userid: "",
        username: " ",
        email: " ",
        roles: [
            {
                role: {
                    roleid: "",
                    name: ""
                }
            }
        ],
        
    }
};

export const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGGED_IN: 
        return {
            ...state,
            loggedIn: true,
            user: {...state.user}
        };
        case SET_LOGGED_OUT:
            return {
                ...state,
                loggedIn: false,
            }
        case USER_SUCCESS: 
        return {
            ...state,
            loggedIn: true,
            user: {...state.user}
        }
        case USER_LOGOUT: 
        return {
            ...state,
            loggedIn: false,
        }
        case SET_USER_INFO: 
        return {
            ...state,
            user: action.payload
        }
        default: 
        return state;
    }
}