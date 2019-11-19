let SET_NEWS_DATA ="SET_NEWS_DATA";
let CHANGE_COUNTRY_NEWS = 'CHANGE_COUNTRY_NEWS';
let startState = {
    newData: [

    ],
    newsFind:'',
    language: 'us',

};


const newsReducers = (state = startState, action) => {
    switch (action.type) {
        case SET_NEWS_DATA : {
            return {...state, newData: action.news}
        }
        case CHANGE_COUNTRY_NEWS:{
            return {...state, language: action.lang }
        }
        default:
            return state;
    }

}
export const setStateNews = (news) => ({ type: SET_NEWS_DATA, news});
export const changeNewsCountyAc = (lang) => ({ type: CHANGE_COUNTRY_NEWS, lang});


export default newsReducers;