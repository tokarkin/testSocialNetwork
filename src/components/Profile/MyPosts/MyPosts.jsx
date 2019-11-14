import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import {addPostActionCreator, uppdateNewPostTextActionCreator} from "../../../redux/state";




const MyPosts = (props) => {
    let MyPostMap =props.Posts
        .map((p)=><Post message={p.message} logo ={p.name} name={p.name} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = uppdateNewPostTextActionCreator(text);
        props.dispatch(action);
    };
    return (
        <div className="content">
            <div className={s.posts__wrapper}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              className={s.post__area}
                              value={props.text.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}
                            className={s.post__approwed}
                    >Add post</button>
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