import axios from "axios";

export const getComments = (data) => {
    return {
        type: "getComments",
        payload: data
    }
}
export const postComments = (data) => {
    return {
        type: "postComments",
        payload: data
    }
}


export function fetchComments() {
    return dispatch => {
        axios.get('http://ascentrotechnologies.com/api/comments').then((response) => {
            dispatch(getComments(response.data.data));
        });
    }
}

export function postComment(data) {
    return dispatch => {
        axios.post('http://ascentrotechnologies.com/api/comments',data).then((response) => {
            console.log(response.data);
            dispatch(postComments(response.data.data));
        });
    }
}