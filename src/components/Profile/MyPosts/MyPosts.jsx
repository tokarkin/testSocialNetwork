import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Posts/Post";
import AddPostReduxForm from "./Posts/PostForm";



const MyPosts = (props) => {
    let MyPostMap =props.Posts
        .map((p)=><Post message={p.message} logo ={p.name} name={p.name}  key={p.id} likesCount={p.likesCount} id={p.id}/>);

    let addPost = (values) =>{
        props.addPost(values.postText);
    };

    return (
        <div className="content">
            <div className={s.posts__wrapper}>
                <AddPostReduxForm onSubmit = {addPost} />
                <div className={s.post}>
                    {MyPostMap}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;