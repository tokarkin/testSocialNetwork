import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";



const MyPosts = (props) => {
    let MyPostMap =props.Posts
        .map((p)=><Post message={p.message} logo ={p.name} name={p.name}  key={p.id} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () =>{
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
         props.updateNewPostText(text);
    };
    return (
        <div className="content">
            <div className={s.posts__wrapper}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              className={s.post__area}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}
                            className={s.post__approwed}
                    >Add post</button>
                </div>

                <div className={s.post}>
                    {MyPostMap}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;