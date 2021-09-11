import thunk from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from "redux";
import movies from "./movie-reducers";
import  {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(
    combineReducers({
        movies
    }),composeWithDevTools(
        applyMiddleware(thunk))
);

export default store;