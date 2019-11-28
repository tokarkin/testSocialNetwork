import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Users from "./user";
import PreLoader from "../common/PreLoader/PreLoader";
import {
    follows,
    searchFriend,
    setCurrentPage, setIsLoading,
    setTotalUsersCount,
    setUsers,
    unfollows
} from "../../redux/users-reducer";
import {getUsers} from "../../API/api";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setIsLoading(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    giveNewPage = (pageNumber) => {
        this.props.setIsLoading(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);

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


export default connect(mapStateToProps,  {
    follows,
    unfollows,
    setUsers,
    searchFriend,
    setCurrentPage,
    setTotalUsersCount,
    setIsLoading,
})(UsersContainer);
