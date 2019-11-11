import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props)=>{
    return(
        <div >
            <ProfileInfo />
            <MyPosts addPost={props.addPost}
                     newPostText = {props.profilePage.newPostText}
                     Posts={props.profilePage.Posts}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}
export  default Profile;