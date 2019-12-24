import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/Forms/FormControls";
import {requiredField} from "../../validators/validator";

const LoginForm = (props)=>{

    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                   component={Input}
                   type={"text"}
                   placeholder={"login or email"}
                   name={"email"}
                   validate = {[requiredField]}
                />
            </div>
            <div>
                <Field
                    component={Input}
                    type={"password"}
                    placeholder={"password"}
                    name={"password"}
                    validate = {[requiredField]}
                />
            </div>

            <div>
                <Field
                    component={Input}
                    type={"checkbox"}
                    name={"rememberMe"}

                />remember me
            </div>
            {   props.error &&
                <div style={{color:'red', padding:'10px'}}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form:'login',//unique name
})(LoginForm);
export default LoginReduxForm;