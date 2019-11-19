import React, {Component} from 'react';
import {connect} from "react-redux";
import * as axios from "axios";
import News from "./news";
import {
    changeNewsCountyAc,
    setStateNews,
} from "../../redux/news-reducer";



class NewsContainer extends Component {

    componentDidMount() {
         axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=f59a7b8bb2434e739e0bb1a119cae542`).then(response => {
             this.props.setData(response.data.articles);


         })
    }
    giveNewNewsCountry = (language)=>{
        this.props.changeNewsOfCountry(language);
        axios.get(`https://newsapi.org/v2/top-headlines?country=${language}&apiKey=f59a7b8bb2434e739e0bb1a119cae542`).then(response => {
            this.props.setData(response.data.articles);
            console.log(response.data.articles);

        })

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
