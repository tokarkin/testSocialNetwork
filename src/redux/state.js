import logo1 from '../images/katya.jpg';
import logo2 from '../images/vlad.jpg';
import logo3 from '../images/sasha.jpg';
import logo4 from '../images/oleh.jpg';
import logoMain from '../images/img.png';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const READ__MESSAGE = 'READ-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};
export const uppdateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const addMessageActionCreator = () => {
    return {
        type: ADD_POST,
    }
};
export const uppdateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
let store = {
    _state: {
        profilePage: {
            Posts: [{id: 1, name: 'Dima', logo: {logoMain}, message: 'tired', likesCount: '2'},
                {id: 2, name: 'Katya', logo: {logo1}, message: 'havesadssdsdasdsasassad no time', likesCount: '2'},
                {id: 3, name: 'Vlad', logo: {logo2}, message: 'have no money', likesCount: '2'},
                {id: 4, name: 'Sanya', logo: {logo3}, message: 'buy new vape', likesCount: '2'},
                {id: 5, name: 'Oleh', logo: {logo4}, message: 'yo', likesCount: '2'},
            ],
            newPostText: ``,
        },
        messagesPage: {
            Messages: [{id: 1, name: 'Dima', logo: {logoMain}, message: 'tired'},
                {id: 2, name: 'Katya', logo: {logo1}, message: 'have no time'},
                {id: 3, name: 'Vlad', logo: {logo2}, message: 'have no money'},
                {id: 4, name: 'Sanya', logo: {logo3}, message: 'buy new vape'},
                {id: 5, name: 'Oleh', logo: {logo4}, message: 'yo'},
            ],
            arrayDialogs: [{id: 1, logo: {logoMain}, name: 'Dima'},
                {id: 2, logo: {logo1}, name: 'Katya'},
                {id: 3, logo: {logo2}, name: 'Vlad'},
                {id: 4, logo: {logo3}, name: 'Sanya'},
                {id: 5, logo: {logo4}, name: 'Oleh'},
            ],
            sendMessage: ``,
        },
    },
    _callSubscribers() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribers = observer;  //OBSERVER published subscriber
    },
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.Posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribers(this._state);

    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribers(this._state);

    },

    dispatch(action) { // type:'textsvoistvo ADD_POST'
        if (action.type === ADD_POST) {
            this._addPost();
        } else  if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        }



    },
}
window.store = store;
export default store;