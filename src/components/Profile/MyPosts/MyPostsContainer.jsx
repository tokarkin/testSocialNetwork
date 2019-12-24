import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let moveStateToProps =(state)=>{
    return {
        Posts: state.profilePage.Posts,

    }
};
let moveDispatchToProps = (dispatch) =>{
    return{
        addPost:(post) =>{
            dispatch(addPostActionCreator(post));
        }

    }
};
const MyPostsContainer = connect (moveStateToProps, moveDispatchToProps)(MyPosts);
export default MyPostsContainer;