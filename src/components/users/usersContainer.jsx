import React, {Component} from 'react';
import {connect} from "react-redux";
import Users from "./user";
import PreLoader from "../common/PreLoader/PreLoader";
import {
    follows,
    searchFriend,
    setCurrentPage, setIsLoading,
    getUsersThunkCreator, setToggleFollowingProgress, follow, unfollow
} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../HOK/AuthRedirect";

import {compose} from "redux";
import {getUsers} from "../../Selectors/users-selectors";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    giveNewPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isLoading ? <PreLoader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   giveNewPage={this.giveNewPage}
                   setToggleFollowingProgress={this.props.setToggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}



// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingInProgress:state.usersPage.followingInProgress,
//     }
// };

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress:state.usersPage.followingInProgress,
    }
};


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,  {
    follow,
    unfollow,
    searchFriend,
    setCurrentPage,
    setIsLoading,
    getUsers:getUsersThunkCreator,
    setToggleFollowingProgress
}))(UsersContainer);
