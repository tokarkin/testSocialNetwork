import {usersAPI} from "../API/api";


let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_STATE_USERS = 'SET_STATE_USERS';
let FIND_FRIEND = 'FIND_FRIEND';
let SET_STATE_CURRENT_PAGE ='SET_STATE_CURRENT_PAGE';
let SET_USERS_COUNT = 'SET_USERS_COUNT';
let TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let startState = {
    users: [

    ],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
    isLoading: true,
    followingInProgress:[],
};


const userReducers = (state = startState, action) => {

    switch (action.type) {
        case FIND_FRIEND:
            if (action.state.users.newText.length === 0) return state;
            return  {
                ...state,
                users: state.users.filter( u => {
                    if(action.state.users.newText.toUpperCase()===
                        state.users.toUpperCase().slice(0,action.state.users.newText.length))return true;
                    return false;

                })

            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_STATE_USERS : {
            return {...state, users: action.users}
            }
        case SET_STATE_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case  SET_USERS_COUNT:{
            return {...state, totalUsersCount: action.count }
        }
        case  TOGGLE_IS_LOADING:{
            return {...state, isLoading: action.loading }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {...state,
                followingInProgress:action.isLoading ?
                    [...state.followingInProgress, action.userId]
                    :state.followingInProgress.filter(id => id != action.userId)}
        }
        default:
            return state;
    }

}
export const followSuccess= (userId) => ({type:FOLLOW, userId});
export const unfollowSuccess = (userId) =>({type:UNFOLLOW, userId});
export const setUsers = (users) => ({ type: SET_STATE_USERS, users});
export  const searchFriend = (userName) =>({type:FIND_FRIEND, userName});
export const setCurrentPage = (currentPage) => ({type:SET_STATE_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_USERS_COUNT, count:totalUsersCount });
export const  setIsLoading= (isLoading) => ({type:TOGGLE_IS_LOADING, loading:isLoading });
export const  setToggleFollowingProgress= (isLoading,userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isLoading,userId });

export const getUsersThunkCreator= ( currentPage , pageSize) => {
    return(dispatch ) =>{
        dispatch(setIsLoading(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};

export const follow = ( userId) => {
    return(dispatch ) =>{
        dispatch(setToggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0){
                dispatch(followSuccess(userId));
            }
            dispatch(setToggleFollowingProgress(false, userId));
        })

    }
};
export const unfollow = ( userId) => {
    return(dispatch ) =>{
        dispatch(setToggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0){
                dispatch(unfollowSuccess(userId));
            }
            dispatch(setToggleFollowingProgress(false, userId));
        })

    }
};



export default userReducers;