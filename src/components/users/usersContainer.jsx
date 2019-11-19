import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./user";
import {
    followedActionCreator,
    searchFriend, setIsLoadingAC,
    setStatePage,
    setStateUsers, setTotalUsersCountAC,
    unfollowedActionCreator
} from "../../redux/users-reducer";
import preLoader from '../../images/Infinity-1s-270px.svg';
import PreLoader from "../common/PreLoader/PreLoader";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsLoading(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    giveNewPage = (pageNumber) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsLoading(false);
            this.props.setUsers(response.data.items);

        })
    }

    render() {
        return <>
            {this.props.isLoading ? <PreLoader />: null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follows={this.props.follows}
                   unfollows={this.props.unfollows}
                   giveNewPage={this.giveNewPage}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
    }

};
let mapDispatchToProps = (dispatch) => {
    return {
        follows: (userId) => {
            dispatch(followedActionCreator(userId));
        },
        unfollows: (userId) => {
            dispatch(unfollowedActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setStateUsers(users));
        },
        searchFriend: (userName) => {
            dispatch(searchFriend(userName));
        },
        setCurrentPage: (page) => {
            dispatch(setStatePage(page));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
        setIsLoading:(isLoading)=>{
            dispatch(setIsLoadingAC(isLoading));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
