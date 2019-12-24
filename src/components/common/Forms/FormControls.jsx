import React from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
   formControl:{
       border: "3px solid red",

       borderRadius:'10px',


   },
   formError:{
       color: 'red',
       marginLeft:'30px'
   }
}))
export const FormControl = ({input,meta,...props}) =>{
    const  classes = useStyles();
    const showError = meta.touched && meta.error;
    return(
        <div >
            <div className={(showError ? classes.formControl : '')}>
                {props.children}
            </div>
            {  showError &&
            <span className={classes.formError}>{showError}</span>
            }
        </div>
    )
}
export const TextArea = (props) =>{
    const {input, meta, child,...restProps} = props;
    return <FormControl {...props} > <textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) =>{
    const {input,meta,child, ...restProps} = props;
    return <FormControl {...props} ><input {...input} {...restProps}/></FormControl>

}

// export const TextArea =(props) =>{
//     return <FormControl {...props}></FormControl>
// }



