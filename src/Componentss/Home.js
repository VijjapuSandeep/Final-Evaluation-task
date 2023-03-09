import React, { useRef } from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, getComments } from '../Actions/CommentActions';

function Home() {
    const clicksPerIdUp = useRef({});
    const clicksPerIdDown = useRef({});
    const [click, setClick] = React.useState(0);
    const [sort, setSort] = React.useState(1);
    const dispatch = useDispatch();
    const post = useSelector((state) => state.AddCommentReducer.comments);

    React.useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch, clicksPerIdUp, clicksPerIdDown]);

    function onClickUp(id) {
        if (!clicksPerIdUp.current[id]) {
            clicksPerIdUp.current[id] = 0;
        }
        clicksPerIdUp.current[id]++;
        setClick(Math.random());
        console.log(clicksPerIdUp.current[id]);

        // whatever you want to do with the clicks count
    }

    function onClickDown(id) {
        if (!clicksPerIdDown.current[id]) {
            clicksPerIdDown.current[id] = 0;
        }
        clicksPerIdDown.current[id]++;
        setClick(Math.random());
        console.log(clicksPerIdDown.current);

    }
    
    const handleClick = () => {
        if (sort === 0) {
            console.log('hello');
            setClick(Math.random());
            setSort(1);
            post.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        } else if (sort === 1) {
            console.log('hello');
            setClick(Math.random());
            setSort(0);
            post.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }

    }
    if (!post) return null;
    return (
        <div className='homediv'>
            {
                post.map((e) => {
                    var date = e.created_at.split("-");
                    var date1 = date[2].split("T");
                    return (
                        <div className='commentdiv' key={e.id}>
                            <div> <strong>{e.title}</strong>
                                <div>
                                    {e.comment}
                                </div>
                            </div>
                            <div>Date - {date1[0]}/{date[1]}/{date[0]}</div>
                            <div className='buttonDisplay'>
                                <button ref={clicksPerIdUp} onClick={() => onClickUp(e.id)} className='upVoteButton'>UpVote {clicksPerIdUp.current[e.id]}</button>
                                <button ref={clicksPerIdDown} onClick={() => onClickDown(e.id)} className='downVoteButton'>DownVote {clicksPerIdDown.current[e.id]}</button>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={handleClick} className='sortButton'>Sort by Date</button>
        </div>
    )
}

export default Home
