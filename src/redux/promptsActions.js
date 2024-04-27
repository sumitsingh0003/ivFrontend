import { GIVE_ALERT, GIVE_MODAL, REMOVE_ALERT, REMOVE_MODAL } from './actionType';

export const giveAlert = (alert) => ({
    type: GIVE_ALERT,
    payload: alert
});

export const giveModal = (modal) => ({
    type: GIVE_MODAL,
    payload: modal
});

export const removeAlert = () => ({
    type: REMOVE_ALERT,
    // payload: alert
});

export const removeModal = () => ({
    type: REMOVE_MODAL,
    // payload: modal
});