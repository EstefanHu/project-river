import formatReducer from "./format";

const mainReducer = ({ format }, action) => ({
    format: formatReducer(format, action)
});

export default mainReducer;
