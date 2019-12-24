import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOK/AuthRedirect";
import {compose} from "redux";


class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = this.props.logginUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render(){

         return <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        </div>




    }
}



let mapStateToProps=(state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    logginUserId: state.auth.id,
    isAuth:state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus,updateStatus}),
    withAuthRedirect,
    withRouter,
)(ProfileContainer)




