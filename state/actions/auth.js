import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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

export const register =  dispatch => async payload => {
    try {
        const { email, password } = payload;
        console.log('hello')
        const auth = getAuth();
        console.log(auth)
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        if (!user) return 'fail';
        return {
            status: 200,
            payload: user
        }
    } catch (ex) {
        console.log(ex);
        dispatch({ type: 'ADD_AUTH_ERROR_MESSAGE', payload: ex.message });
    }
}