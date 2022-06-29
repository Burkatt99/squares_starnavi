import { ActionTypes } from "../constants/action-types";

const initialState = {
    variants: [],
    results: []
};

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_DATA:
            return {
                ...state,
                variants: payload
            };
        case ActionTypes.SAVE_RESULT:
            if (state.results.length > 5) {
                state.results.shift();
            }
            return {
                ...state,
                results: [...state.results, payload]
            };
        case ActionTypes.CLEAR_RESULT:
            return {
                ...state,
                results: []
            };
        default:
            return state;
    }
};
