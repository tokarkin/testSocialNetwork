import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import News from "./news";
import {
    changeNewsCountyAc,
    setStateNews,
} from "../../redux/news-reducer";
import {getNews} from "../../API/api";



class NewsContainer extends Component {

    componentDidMount() {
        getNews(this.props.language).then(data => {
            this.props.setData(data.articles);
        });
    }
    giveNewNewsCountry = (language)=>{
        this.props.changeNewsOfCountry(language);
            getNews(this.props.language).then(data => {
                this.props.setData(data.articles);
                console.log(data.articles);
            });
    }

    render(){
        console.log(this.props.newData);
        return <News giveNewNewsCountry={this.giveNewNewsCountry} newData ={this.props.newData}
        />
    }
}
let mapStateToProps =(state) =>{
    return {
        newData: state.newsPage.newData,
        language: state.newsPage.language,

    }

};
let mapDispatchToProps= (dispatch) => {
    return {
        setData: (news)=>{
            dispatch(setStateNews(news));
        },
        changeNewsOfCountry:(language)=>{
        dispatch(changeNewsCountyAc(language));
        }

    }

};

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
