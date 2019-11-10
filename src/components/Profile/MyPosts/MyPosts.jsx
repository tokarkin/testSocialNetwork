import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";



const MyPosts = (props) => {

    let MyPostMap =props.Posts
        .map((p)=><Post message={p.message} name={p.name} likesCount={p.likesCount} id={p.id}/>);
    return (
        <div className="content">
            <div className={s.posts__wrapper}>
                <div>
                    <textarea className={s.post__area}></textarea>
                </div>
                <div>
                    <button className={s.post__approwed}>Add post</button>
                </div>
                <div>
                    New post
                </div>
                <div className={s.post}>
                    {MyPostMap}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;