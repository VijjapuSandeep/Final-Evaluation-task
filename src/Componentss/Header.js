import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const post = useSelector((state) => state.AddCommentReducer.comments);
    
    return (
        <div className='homediv'>
            <div className='headerdiv'>
                <div className='titlediv'><strong>Comments</strong></div>
                <div className='buttonsdiv'>
                    <div><Link to='/AddComment'><button>Add Comment</button></Link> </div>
                    <div><Link to='/'><button>View Comment</button></Link></div>
                </div>
            </div>

        </div>
    )
}

export default Header
