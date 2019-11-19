import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let moveStateToProps =(state)=>{
    return {
        Posts: state.profilePage.Posts,
        newPostText: state.profilePage.newPostText,
    }
};
let moveDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText : (text)=>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost:() =>{
            dispatch(addPostActionCreator());
        }

    }
};
const MyPostsContainer = connect (moveStateToProps, moveDispatchToProps)(MyPosts);
export default MyPostsContainer;