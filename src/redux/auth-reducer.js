import {profileApi, usersAPI} from "../API/api";
import {stopSubmit} from "redux-form";

let SET_USER_DATA = 'SET_USER_DATA';
let TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';


let startState = {
    id: null,
    email: null,
    login: null,
    isLoading: false,
    isAuth: false,
};


const authReducer = (state = startState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,  //destruction

            }
        }
        case  TOGGLE_IS_LOADING: {
            return {...state, isLoading: action.loading}
        }
        default:
            return state;
    }

}
export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data: {id, email, login,isAuth}});
export const setIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, loading: isLoading});

export const authHeaderLogin = () => (dispatch) => {
    return usersAPI.me().then(response =>{
        if (response.data.resultCode === 0){
            let {id,email,login} = response.data.data;

            dispatch(setAuthUserData(id,email,login, true));
        }
    })
}
export const loginPath = (email,password, rememberMe) => (dispatch) => {

     profileApi.loginServe(email,password, rememberMe,true).then(response =>{
        if (response.data.resultCode === 0){
            dispatch(authHeaderLogin());
        } else {
            let message = response.data.messages.length > 0? response.data.messages[0]:'Some error';
            let action = stopSubmit("login",{_error:message});
            dispatch(action);
        }
    })

}
export const logout = () => (dispatch) => {
    profileApi.logout().then(response =>{
        if (response.data.resultCode === 0){
            dispatch(setAuthUserData(null,null,null, false));
        }
    })
}

export default authReducer;