import { GIVE_ALERT, GIVE_MODAL, REMOVE_ALERT, REMOVE_MODAL } from './actionType';

const initialValues = {
    alerts: {},
    modals: {},
    loading: true
};

const Prompts = (state = initialValues, action) => {
    switch (action.type) {
        case GIVE_ALERT:
            return {
                ...state,
                alerts: action.payload,
                loading: false
            };
        case GIVE_MODAL:
            return {
                ...state,
                modals: action.payload,
                loading: false
            };
        case REMOVE_ALERT:
            return {
                ...state,
                alerts: {},
                loading: false
            };
        case REMOVE_MODAL:
            return {
                ...state,
                modals: {},
                loading: false
            };
        default:
            return state;
    }
};
export default Prompts;