import React from 'react';
import c from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile =(props)=>{

    return(
        <div >
            <ProfileInfo />
            <MyPosts Posts={props.state.Posts} />
        </div>
    )
}
export  default Profile;