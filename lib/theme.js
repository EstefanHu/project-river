const colors = {
    redPrimary: '#940a0a',
    light: {
        textColor: 'rgb(32, 33, 36)',
        backgroundColor: 'rgb(250, 246, 246)',
        componentBackground: 'white',
        textColor: 'black',
        textColorSelected: 'white',
    },
    dark: {
        textColor: 'rgb(250, 246, 246)',
        backgroundColor: 'rgb(32, 33, 36)'
    }
};

const effects = {
    boxShadow: '3px 3px 10px rgba(0, 0, 0, 0.25)'
};

const theme = {
    ...colors,
    ...effects
};

export default theme;
