import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../common/Forms/FormControls";
import {maxLengthCreator, requiredField} from "../../validators/validator";

const maxLength = maxLengthCreator(25);

const DialogsForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={TextArea}
                        type={"text"}
                        validate = {[requiredField,maxLength]}
                        placeholder={"enter message"}
                        name={"newMessage"}
                        // onChange={props.onNewMessageChange}
                        // value={props.newMessageBody}
                    />
                </div>
                <div>
                    <button>
                        send
                    </button>
                </div>
        </form>
    )
}
const DialogReduxForm = reduxForm({
    form:'dialogAddMessage',//unique name
})(DialogsForm);
export default DialogReduxForm;