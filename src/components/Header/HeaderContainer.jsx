import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import Header from "./Header";
import {authHeaderLogin, logout, setAuthUserData, setIsLoading} from "../../redux/auth-reducer";


class HeaderContainer extends Component {



    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isLoading:state.auth.isLoading,
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }

};


export default connect(mapStateToProps,  {
setAuthUserData, setIsLoading,logout
})(HeaderContainer);
