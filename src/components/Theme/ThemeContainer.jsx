import React, {Component} from 'react';
import {connect} from "react-redux";
import Theme from "./Theme";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initialzedApp} from "../../redux/inizialization-reduces";
import PreLoader from "../common/PreLoader/PreLoader";


class ThemeContainer extends Component {
    componentDidMount() {
        this.props.initialzedApp();
    }

    render() {
        if(!this.props.initialazet){
            return <PreLoader/>
        }
        return <>
            <Theme settings={this.props.settings}/>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        settings: state.settings,
        initialazet: state.initialazet.initialazet,
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, {initialzedApp}))
    (ThemeContainer);
