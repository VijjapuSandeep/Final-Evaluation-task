import {React, useRef} from 'react';
import './AddComment.css';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../Actions/CommentActions';

function AddComment() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const dispatch = useDispatch();
    let data = {
        title: '',
        comment: '',
        created_at: '',
        upVote:0,
        downVote:0
    }
    const onTitleChange = e => {
        data.title = e.target.value;
    }
    const onCommentChange = e => {
        data.comment = e.target.value;
    }
    const handleSubmit = () => {
        let date = new Date().toJSON();
        data.created_at = date;
        ref1.current.value='';
        ref2.current.value='';
        console.log(data);
        dispatch(postComment(data));
    }
    return (
        <div className='AddCommentDiv'>
            <h3>Add Comment</h3>
            <div className='titleDiv'>Title : <input type="text" ref={ref1} onChange={onTitleChange} placeholder='Comment Title...' name="title" id="" /></div>
            <div className='commentDiv'>Comment : <input type="text" ref={ref2} onChange={onCommentChange} placeholder='Comment Description...' name="comment" id="" /></div>
            <div><button type='submit' onClick={handleSubmit} className='submitButton'>Submit</button></div>
        </div>
    )
}

export default AddComment
