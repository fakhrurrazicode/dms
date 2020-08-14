import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from "redux-thunk";
import { loadState, saveState } from "../localStorage";

const persistedState = loadState();
console.log(persistedState);
const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(ReduxThunk)
);

store.subscribe(() => {
    saveState({
        ...store.getState(),
    });
});
export default store;
