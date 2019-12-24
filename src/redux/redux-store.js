import {applyMiddleware, combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import userReducers from "./users-reducer";
import newsReducers from "./news-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from  "redux-thunk"
import settingsReducer from "./settings-reducer";
import {reducer as formReducer} from "redux-form";
import appReducer from "./inizialization-reduces";

let reducerItems = combineReducers({
    profilePage: profileReducer ,
    messagesPage : messageReducer,
    usersPage:userReducers,
    newsPage: newsReducers,
    auth:authReducer,
    settings:settingsReducer,
    form:formReducer,
    initialazet: appReducer,
});

let store =createStore(reducerItems, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;