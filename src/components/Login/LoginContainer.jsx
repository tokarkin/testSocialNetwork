import React, {Component} from "react";
import LoginReduxForm from "./LoginForm";
import {loginPath, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";



const LoginContainer = (props)=>{
    const onSubmit = (formData)=>{
        console.log(formData)
        props.loginPath(formData.email,formData.password, formData.rememberMe);

    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};



let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
    }
};



export default connect(mapStateToProps,{loginPath,logout})(LoginContainer);
