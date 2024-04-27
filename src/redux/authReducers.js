import { LOGIN, SIGNUP, LOGOUT } from './actionType';
const initialState = {
    details: {},
    loading: true,
};
const authReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            action.payload.authToken && localStorage.setItem("token", action.payload.authToken);
            return {
                ...state, details: action.payload, loading: false
            };
        case SIGNUP:
            action.payload.authToken && localStorage.setItem("token", action.payload.authToken);
            return {
                ...state, details: action.payload, loading: false
            };
        case LOGOUT:
            return {
                ...state, details: {}, loading: false
            };
        default:
            return state;
    }
};
export default authReducers;