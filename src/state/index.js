import { createStore, combineReducers} from 'redux';

import valueUpdateReducer from "./reducers/reducers";

const reducer = combineReducers({counter:valueUpdateReducer})

export const initialState={
    counter:{
        value:0
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;