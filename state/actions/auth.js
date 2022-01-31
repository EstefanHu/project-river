import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc, serverTimestamp } from 'firebase/firestore';

export const addAuthErrorMessage = dispatch => (message) => dispatch({ type: 'ADD_ERROR', payload: message })
export const clearAuthErrorMessage = dispatch => () => dispatch({ type: 'CLEAR_AUTH_ERROR_MESSAGE' });

export const startAuthing = dispatch => () => dispatch({ type: 'START_AUTHING' });
export const endAuthing = dispatch => () => dispatch({ type: 'END_AUTHING' });

export const signIn = dispatch => ({ email, password }) => {
    try {

    } catch (ex) {
        console.log(ex);
        dispatch({ type: 'ADD_ERROR', payload: ex.message });
    };
};

export const register = dispatch => async ({ firstName, lastName, email, password, confirmPassword }) => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) return dispatch({ type: 'ADD_ERROR', payload: 'all fields are required' });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return dispatch({ type: 'ADD_ERROR', payload: 'invalid email' });
    // if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)) return dispatch({ type: 'ADD_ERROR', payload: 'password too weak' })
    if (password !== confirmPassword) return dispatch({ type: 'ADD_ERROR', payload: 'passwords do not match' });
    try {
        const { user } = await createUserWithEmailAndPassword(getAuth(), email, password);
        await setDoc(doc(getFirestore(), 'Users', user.uid), {
            firstName,
            lastName,
            email,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        dispatch({ type: 'REGISTER', payload: user.token })
    } catch ({ code }) {
        console.log(code);
        let message;
        switch (code) {
            case 'auth/email-already-in-use':
                message = 'email already used';
                break;
            case 'auth/invalid-email':
                message = 'invalid email';
            case 'auth/weak-password':
                message = 'password too weak';
            default:
                message = 'something went wrong';
        }
        dispatch({ type: 'ADD_ERROR', payload: message });
    }
}