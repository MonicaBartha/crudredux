import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types';

// show the alert
export function showAlert(alert) {
    return (dispatch) => {
        dispatch( createAlert(alert) )
    }
}

const createAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

// hide alert
export function hideAlert() {
    return (dispatch) => {
        dispatch( hideAlertAction() )
    }
}

const hideAlertAction = () => ({
    type: HIDE_ALERT
});