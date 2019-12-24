import {authHeaderLogin} from "./auth-reducer";

let SET_INITIALIZED_SUCCESS = 'SET_INITIALIZED_SUCCESS';


let startState = {
    initialazet: false,

};


const appReducer = (state = startState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialazet:true,  //destruction

            }
        }

        default:
            return state;
    }

}
export const setInitializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});
export const  initialzedApp=()=>(dispatch)=>{
    let promise = dispatch(authHeaderLogin());
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess());

    })
}



export default appReducer;