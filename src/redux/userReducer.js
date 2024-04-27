// import { DELETE_USER, GET_USERS, CREATE_USER, UPDATE_USER, CLEAR_USER } from './actionType';
// const initialValues = {
//     user: {},
//     users: [],
//     loading: true
// };
// const userReducers = (state = initialValues, action) => {
//     switch (action.type) {
//         case GET_USERS:
//             return {
//                 ...state,
//                 users: action.payload,
//                 loading: false
//             };
//         case DELETE_USER:
//             return {
//                 ...state,
//                 users: state.users.filter(item => item._id !== action.payload),
//                 loading: false
//             };
//         case CREATE_USER:
//             const create = state.users;
//             // create.splice(0, 0, action.payload);
//             create.unshift(action.payload);
//             return {
//                 ...state,
//                 // users: [...state.users, action.payload],
//                 users: create,
//                 loading: false
//             };
//         case UPDATE_USER:
//             return {
//                 ...state,
//                 users: action.payload,
//                 loading: false
//             };
//         case CLEAR_USER:
//             return {
//                 ...state,
//                 users: [],
//                 loading: false
//             };
//         default:
//             return state;
//     };
// };
// export default userReducers;



import { DELETE_USER, GET_USERS, CREATE_USER, UPDATE_USER, CLEAR_USER } from './actionType';
const initialValues = {
    user: {},
    users: [],
    loading: true
};
const userReducers = (state = initialValues, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(item => item._id !== action.payload),
                loading: false
            };
        case CREATE_USER:
            const create = state.users;
            // create.splice(0, 0, action.payload);
            create.unshift(action.payload);
            return {
                ...state,
                // users: [...state.users, action.payload],
                users: create,
                loading: false
            };
        case UPDATE_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case CLEAR_USER:
            return {
                ...state,
                users: [],
                loading: false
            };
        default:
            return state;
    };
};
export default userReducers;    