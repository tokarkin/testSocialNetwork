let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_STATE_USERS = 'SET_STATE_USERS';
let FIND_FRIEND = 'FIND_FRIEND';
let SET_STATE_CURRENT_PAGE ='SET_STATE_CURRENT_PAGE';
let SET_USERS_COUNT = 'SET_USERS_COUNT';
let TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let startState = {
    users: [

    ],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
    isLoading: false,
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
        default:
            return state;
    }

}
export const  followedActionCreator = (userId) => ({type:FOLLOW, userId});
export const unfollowedActionCreator = (userId) =>({type:UNFOLLOW, userId});
export const setStateUsers = (users) => ({ type: SET_STATE_USERS, users});
export  const searchFriend = (userName) =>({type:FIND_FRIEND, userName});
export const setStatePage = (currentPage) => ({type:SET_STATE_CURRENT_PAGE, currentPage: currentPage });
export const setTotalUsersCountAC = (totalUsersCount) => ({type:SET_USERS_COUNT, count:totalUsersCount });
export const  setIsLoadingAC= (isLoading) => ({type:TOGGLE_IS_LOADING, loading:isLoading });


export default userReducers;