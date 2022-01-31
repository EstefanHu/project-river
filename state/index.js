import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';
import mainReducer from './reducers';
import mainActions from './actions';

const initState = {
    auth: {
        isLoading: false,
        isAuthing: true,
        authErrorMessage: '',
        user: null,
    },
    format: {
        isDark: false
    }
};

const StateContext = createContext(initState);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initState);

    const actions = {};

    Object.keys(mainActions)
        .forEach(actionName => actions[actionName] = mainActions[actionName](dispatch));

    const colorMode = state.format.isDark ? theme.dark : theme.light;

    return (
        <StateContext.Provider value={{ state, ...actions }}>
            <ThemeProvider theme={{ ...theme, ...colorMode }}>
                {children}
            </ThemeProvider>
        </StateContext.Provider>
    );
};

export const useGlobalState = () => useContext(StateContext);
