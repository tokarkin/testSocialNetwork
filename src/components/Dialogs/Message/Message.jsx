import React from 'react';
import s from './../Dialogs.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0, 5),
    },
    leftBlock:{
        display:"flex",
        justifyContent:'flex-start',
        marginTop:'10px'
    },
    rightBlock:{
        display:"flex",
        justifyContent:'flex-end',
        marginTop:'10px'
    },
    left:{
        display:'inline-block',
        backgroundColor: theme.palette.primary.main,
        padding:'5px',

    },
    right :{
        display:'inline-block',
        padding:'5px',
    },
}))
const Message = (props) => {
    const classes = useStyles();
    return (
        <div>
           <div>
               {(()=>{
                   switch (props.messageType) {
                       case 'in': return <div className={classes.leftBlock}>
                           <Paper  className={classes.left}>{props.message}
                           </Paper>
                       </div>
                       case 'out':return <div className={classes.rightBlock}>
                               <Paper className={classes.right}>{props.message}
                               </Paper>
                           </div>
                   }
               })()}
           </div>
        </div>
    )
}

export default Message;