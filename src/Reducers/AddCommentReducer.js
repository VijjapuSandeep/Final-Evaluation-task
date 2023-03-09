const INIT_STATE = {
    comments:[]
}

export const AddCommentReducer=(state=INIT_STATE, action)=>{
    switch (action.type) {
        case "getComments":
            console.log(action.payload);
            return {comments:action.payload}
            
        default:
            return state;
    }
}