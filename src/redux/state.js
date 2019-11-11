import logo1 from '../images/katya.jpg';
import logo2 from '../images/vlad.jpg';
import logo3 from '../images/sasha.jpg';
import logo4 from '../images/oleh.jpg';
import logoMain from '../images/img.png';


let store = {
    _state: {
        profilePage: {
            Posts: [{id: 1, name: 'Dima', logo: {logoMain}, message: 'tired', likesCount: '2'},
                {id: 2, name: 'Katya', logo: {logo1}, message: 'havesadssdsdasdsasassad no time', likesCount: '2'},
                {id: 3, name: 'Vlad', logo: {logo2}, message: 'have no money', likesCount: '2'},
                {id: 4, name: 'Sanya', logo: {logo3}, message: 'buy new vape', likesCount: '2'},
                {id: 5, name: 'Oleh', logo: {logo4}, message: 'yo', likesCount: '2'},
            ],
            newPostText: ' ',
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
        },
    },
    _callSubscribers() {
        console.log('state was changed');
    },
    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.Posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribers(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscribers(this._state);
    },
    subscribe(observer) {
        this._callSubscribers = observer;  //OBSERVER published subscriber
    }
};
window.store = store;
export default store;