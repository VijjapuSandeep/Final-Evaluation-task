const INIT_STATE = {
    pcomments:''
}

export const PostCommentReducer=(state=INIT_STATE, action)=>{
    switch (action.type) {
        case "postComments":
            return {pcomments:'Post Commented Successfully'}
            
        default:
            return state;
    }
}