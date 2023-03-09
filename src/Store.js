import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootred from "./Reducers/main";

const Store = createStore(
    rootred,
    applyMiddleware(thunk)
);


export default Store;