import logoMain from "../images/img.png";
import logo1 from "../images/katya.jpg";
import logo2 from "../images/vlad.jpg";
import logo3 from "../images/sasha.jpg";
import logo4 from "../images/oleh.jpg";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let storeState = {
    Posts: [{id: 1, name: 'Dima', logo: {logoMain}, message: 'tired', likesCount: '2'},
        {id: 2, name: 'Katya', logo: 'https://image.redbull.com/rbcom/052/2019-05-20/6283a56a-c1fd-46a5-8bbe-b49ac62aadaa/0012/0/0/967/2133/2674/1150/1/ahafonova-ceremony-paperwings.jpg', message: 'havesadssdsdasdsasassad no time', likesCount: '2'},
        {id: 3, name: 'Vlad', logo: {logo2}, message: 'have no money', likesCount: '2'},
        {id: 4, name: 'Sanya', logo: {logo3}, message: 'buy new vape', likesCount: '2'},
        {id: 5, name: 'Oleh', logo: {logo4}, message: 'yo', likesCount: '2'},
    ],
    newPostText: ``,
    profile: null,
};

const profileReducer = (state = storeState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return  {
                ...state,
                Posts:[...state.Posts, newPost],
                newPostText:'',
            };
            break
        }
        case UPDATE_NEW_POST_TEXT:{
            return  {
                ...state,
                newPostText: action.newText
            };
            break
        }
        case  SET_USER_PROFILE :{
            return {
                ...state,
                profile:action.profile,

            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE,profile });


export default profileReducer;
