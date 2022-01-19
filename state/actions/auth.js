// import { db, auth } from './../../config/firebaseConfiguration'

export const addAuthErrorMessage = dispatch => message => dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: message });
export const clearAuthErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_AUTH_ERROR_MESSAGE' });

export const startAuthing = dispatch => () => dispatch({ type: 'START_AUTHING' });
export const endAuthing = dispatch => () => dispatch({ type: 'END_AUTHING' });

export const signIn = dispatch => ({ email, password }) => {
    try {
        
    } catch (ex) {
        console.log(ex);
        dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: ex.message });
    };
};