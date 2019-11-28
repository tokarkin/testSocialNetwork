let SET_USER_DATA = 'SET_USER_DATA';
let TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';



let startState = {
    id:null,
    email:null,
    login: null,
    isLoading: false,
    isAuth: false,
};


const authReducer = (state = startState, action) => {

    switch (action.type) {
        case SET_USER_DATA:{
            return {
                ...state,
                ...action.data,  //destruction
                isAuth: true,
            }
        }
        case  TOGGLE_IS_LOADING:{
            return {...state, isLoading: action.loading }
        }
        default:
            return state;
    }

}
export const  setAuthUserData = (id,email,login) => ({type:SET_USER_DATA, data:{ id,email,login}});
export const  setIsLoading= (isLoading) => ({type:TOGGLE_IS_LOADING, loading:isLoading });



export default authReducer;