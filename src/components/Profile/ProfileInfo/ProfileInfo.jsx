import React from 'react';
import s from './ProfileInfo.module.css';
import logo from '../../../images/img.png';
import PreLoader from "../../common/PreLoader/PreLoader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div>
            <PreLoader/>
        </div>

    }
    return (
        <div className={s.content}>
            <div className={s.wrapper}>

                <div className={s.content__wrapper}>
                    <div className={s.paingt}>
                        <img className={s.paint} src={props.profile.photos.large} alt=""/>
                    </div>
                    <div className={s.container}>
                        <h2 className={s.containerName}> {props.profile.fullName}</h2>
                        <p>{props.profile.aboutMe}</p>
                        <p className={s.containertext}> Contacts: {props.profile.contacts.facebook}</p>
                        <p className={s.containertext}>Looking for a job{props.profile.lookingForAJob === false ? props.profile.lookingForAJob:props.logo  }</p>
                        <p className={s.containertext}>City:Kyiv </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProfileInfo;