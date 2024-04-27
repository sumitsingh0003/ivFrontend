import { GET_USERS, DELETE_USER, CREATE_USER, UPDATE_USER, CLEAR_USER } from './actionType';
import { giveAlert } from '../redux/promptsActions';
import axios from 'axios';
import { loadingFalse, loadingTrue } from './loadAction';


const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
});

const userDelete = (id) => ({
    type: DELETE_USER,
    payload: id
});

const userCreate = (user) => ({
    type: CREATE_USER,
    payload: user
});

const userUpdate = (users) => ({
    type: UPDATE_USER,
    payload: users
});
export const userClear = () => ({
    type: CLEAR_USER,
});

// const headers = {
//     'Content-Type': 'application/json',
//     'auth-token': auth || localStorage.getItem("token")
// };
 
const url = "https://ivbackend-plnv.onrender.com/api";

// const url = "http://localhost:4000/api";


// Action Dispatcher 
// We are using it because of redux thunk .Our redux is synchronus but when we need to call an api which is an async function the we need to redux thunk which is a middleware which let redux work syncronously and thats, why we need to use this syntax 
export const loadUsers = (auth) => {
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.get(`${url}/notes/fetchnotes`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth || localStorage.getItem("token")
            }
        }).then((res) => {
            // console.log("res", res.data);
            dispatch(getUsers(res.data));
            dispatch(loadingFalse());
        }).catch((err) => {
            console.log("loadError", err.response.data);
            dispatch(loadingFalse());
        });
    };
};


// Action Dispatcher for Delete User
export const deleteUser = (id, auth) => {
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.delete(`${url}/notes/deletenote/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'auth-token': auth || localStorage.getItem("token")
            }
        }).then((res) => {
            console.log("res", res.data);
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "success",
                text: "Successfully Deleted the Invoice"
            }));
            dispatch(userDelete(id));
        }).catch((err) => {
            console.log("Delete error", err.response.data);
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "error",
                text: "Unable to Delete the Invoice"
            }));
        });
    };
};


//Action dispatcher for Create user
export const createUser = (user, auth) => {
    // console.log("user", JSON.stringify(user));
    const { Info, items, subTotalData } = user.data;
    const { img, ...rest } = Info;
    // console.log(Info, items, subTotalData);
    // console.log("iMg", img);
    // console.log("rest", rest);
    // console.log("items", items);


    const formData = new FormData();
    formData.append('items', JSON.stringify(items));
    formData.append("Info[img]", img);

    for (const key in rest) {
        formData.append(`Info[${key}]`, rest[key]);
    }
    for (const key in subTotalData) {
        formData.append(`subTotalData[${key}]`, subTotalData[key]);
    }
    // const a = formData.get("Info[img]");
    // console.log("a", a);
    // console.log("formData", typeof formData);
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.post(`${url}/notes/addnote`, formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'auth-token': auth || localStorage.getItem("token")
            }
        }).then((res) => {
            console.log("res", res.data);
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "success",
                text: "Successfully Created a New Invoice"
            }));
            dispatch(userCreate(res.data));
        }).catch((err) => {
            console.log("user", user);
            console.log("Createerror", err);
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "error",
                text: "Unable to Create New Invoice"
            }));
        });
    };
};


export const updateUser = (users, user, id, auth) => {
    // debugger;
    console.log("user", user);
    const { Info, items, subTotalData } = user.data;
    const formData = new FormData();
    formData.append('items', JSON.stringify(items));
    if (user.data.Info.img) {
        const { img, ...rest } = Info;
        formData.append("Info[img]", img);
        for (const key in rest) {
            formData.append(`Info[${key}]`, rest[key]);
        }
    } else {
        for (const key in Info) {
            formData.append(`Info[${key}]`, Info[key]);
        }
    }
    for (const key in subTotalData) {
        formData.append(`subTotalData[${key}]`, subTotalData[key]);
    }
    const a = formData.get("Info[img]");
    console.log("a", a);
    console.log("formData", formData);
    return function (dispatch) {
        dispatch(loadingTrue());
        axios.put(`${url}/notes/updatenote/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'auth-token': auth || localStorage.getItem("token")
            }
        }).then((res) => {
            console.log("res", res.data);
            console.log("aqa", res.data.note);
            const altData = users.map((item) => {
                if (item._id === res.data.note._id) {
                    return res.data.note;
                } else {
                    return item;
                }
            });
            console.log("all", altData);
            dispatch(userUpdate(altData));
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "success",
                text: "Successfully Updated the Invoice"
            }));
        }).catch((err) => {
            console.log("Update error", err);
            dispatch(loadingFalse());
            dispatch(giveAlert({
                type: "error",
                text: "Unable to Update the Invoice"
            }));
        });
    };
};