import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import userReducers from "./users-reducer";
import newsReducers from "./news-reducer";


let reducerItems = combineReducers({
    profilePage: profileReducer ,
    messagesPage : messageReducer,
    usersPage:userReducers,
    newsPage: newsReducers,


});

let store =createStore(reducerItems);
window.store = store;
export default store;