import { SET_LOADING, SET_ACCESS_TOKEN } from "./actions";
import { combineReducers } from "redux";

const authReducerInitialState = {
    isLoading: false,
    accessToken: null,
};

const authReducer = (state = authReducerInitialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };

        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload.accessToken,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
