import React from 'react';
import c from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
console.log(props);
    return (
        <div>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <MyPostsContainer
            />
        </div>
    )
}
export default Profile;