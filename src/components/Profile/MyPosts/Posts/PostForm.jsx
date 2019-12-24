import React from "react";
import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, requiredField} from "../../../../validators/validator";
import {TextArea} from "../../../common/Forms/FormControls";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    textArea:{
        width:'97%',
        borderRadius:'10px',
        padding:'12px',
        height:'30px',
        textDecoration: 'none',
        cursor:'pointer',
        fontSize:'18px',
        border: `2px solid ${theme.palette.primary.main}`,
    },
    button:{
        width:'20%',
        padding:'10px',
        borderRadius:'10px',
        marginLeft:'30px',
        fontSize:'14px',
        backgroundColor: theme.palette.primary.main,

    }

}))



const maxLength = maxLengthCreator(10);
const MyPostForm = (props)=>{
    const classes = useStyles();
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={classes.textArea}
                    component={TextArea}
                    type={"text"}
                    validate = {[requiredField,maxLength]}
                    placeholder={"Enter your post.."}
                    name={"postText"}
                />
            </div>
            <div>
                <button className={classes.button}>ADD POST</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({
    form:'addPost',//unique name
})(MyPostForm);
export default AddPostReduxForm;