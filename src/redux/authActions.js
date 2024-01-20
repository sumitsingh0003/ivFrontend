import { LOGIN, SIGNUP, LOGOUT } from './actionType';
import axios from 'axios';
import { giveAlert } from '../redux/promptsActions';
import { loadingFalse, loadingTrue } from '../redux/loadAction';


export const login = (details) => ({
    type: LOGIN,
    payload: details
});

export const signup = (details) => ({
    type: SIGNUP,
    payload: details
});

export const logout = (details) => ({
    type: LOGOUT,
    payload: details
});

const headers = {
    "Content-Type": "application/json",
};

// const url = "https://dev.dktoll2tc18bv.amplifyapp.com/api";
const url = "https://iv-backend.onrender.com/api";
// const url = "https://invoice-backend.netlify.app/api";
// const url = "http://localhost:4000/api";

export const loginDispatcher = ({ email, password }) => {
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.post(`${url}/auth/login`, { email, password }, { headers: headers })
            .then(res => {
                return (
                    console.log("res", res.data),
                    dispatch(login(res.data)),
                    dispatch(loadingFalse()),
                    dispatch(giveAlert({
                        type: "success",
                        text: "Logged in, Successfully !"
                    }))
                    // localStorage.setItem("token", res.data.authToken)
                );
            }).catch(err => {
                err.response && console.log("Login err", err.response.data);
                err.response && dispatch(login(err.response.data));
                dispatch(loadingFalse());
                dispatch(giveAlert({
                    type: "error",
                    text: "Wrong Credentials"
                }));
            });
    };
};
export const signupDispatcher = ({ name, email, password }) => {
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.post(`${url}/auth/createuser`, { name, email, password }, { headers: headers }).then(res => {
            return (
                console.log("res", res.data),
                dispatch(signup(res.data)),
                dispatch(loadingFalse()),
                dispatch(giveAlert({
                    type: "success",
                    text: "Signed up, Successfully!"
                }))
                // localStorage.setItem("token", res.data.authToken)
            );
        }).catch(err => {
            console.log("Signuperr", err.response.data);
            dispatch(signup(err.response.data));
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "error",
                text: "User Already Exist"
            }));
        });
    };
};

export const logoutDispatcher = () => {
    return function (dispatch) {
        dispatch(logout(null));
        localStorage.removeItem("token");
    };
};