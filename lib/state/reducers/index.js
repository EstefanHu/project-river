import authReducer from './auth';
import formatReducer from './format';

const mainReducer = ({ auth, format }, action) => ({
    auth: authReducer(auth, action),
    format: formatReducer(format, action)
});

export default mainReducer;
