import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {connect} from "react-redux";
import {changeTheme} from "../../redux/settings-reducer";
import SettingsContainer from "./SettingsContainer";



class setCon extends Component {



    render() {
        return <>
            <SettingsContainer settings ={this.props.settings} updateNewTheme={this.props.updateNewTheme}/>
        </>
    }
}


let moveStateToProps = (state) => {
    return {
        settings: state.settings,
    }
};

let moveDispatchToProps = (dispatch) => {
    return {
        updateNewTheme:(body)=>{
            dispatch(changeTheme(body));

        }
    }

};

export default connect(moveStateToProps, moveDispatchToProps)(setCon);
