import { ActionTypes } from "../constants/action-types";

export const setData = (data) => {
    return {
        type: ActionTypes.SET_DATA,
        payload: data
    };
};

export const saveResult = (result) => {
    return {
        type: ActionTypes.SAVE_RESULT,
        payload: result
    };
};

export const clearResult = () => {
    return {
        type: ActionTypes.CLEAR_RESULT
    };
};
