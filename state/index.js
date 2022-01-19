import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../shared/theme';
import mainReducer from './reducers';
import mainActions from './actions';

const initState = {
    auth: {
        isLoading: false,
        isLoggedIn: false,
        isAuthing: true,
        authErrorMessage: '',
    }
};

const StateContext = createContext(initState);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initState);

    const actions = {};

    Object.keys(mainActions)
        .forEach(actionName => actions[actionName] = mainActions[actionName](dispatch));

    return (
        <StateContext.Provider value={{ state, ...actions }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StateContext.Provider>
    );
};

export const useGlobalState = () => useContext(StateContext);
