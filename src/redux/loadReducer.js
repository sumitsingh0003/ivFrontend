import { LOADINGFALSE, LOADINGTRUE } from "./actionType";

const initialState = {
    loading: false,
};

const loadReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADINGFALSE:
            return { loading: false };
        case LOADINGTRUE:
            return { loading: true };
        default:
            return state;
    }
};

export default loadReducer;