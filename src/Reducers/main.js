import {combineReducers} from "redux";
import { AddCommentReducer } from "./AddCommentReducer";
import { PostCommentReducer } from "./PostCommentReducer";

const rootred = combineReducers({
    AddCommentReducer,
    PostCommentReducer
});


export default rootred