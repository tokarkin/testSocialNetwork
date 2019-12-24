
import {amber, blue} from "@material-ui/core/colors";

const CHANGE_THEME = 'CHANGE_THEME';


let themeState = {
    palette:{
        primary: {
            main: '#e3f2fd',
        },
        secondary: amber,
    }

};


const settingsReducer = (state = themeState, action) => {

    switch (action.type) {
        case CHANGE_THEME :
            return {
                ...state,
                palette:{
                    ...state.palette,
                    primary: {
                        ...state.palette.primary,
                        main: action.body
                    }
                },
            };
            break
        default:
            return state;
    }
    return state;

}
export const changeTheme = (body) => {

    return {
        type: CHANGE_THEME,
        body: body,
    }

}

export default settingsReducer;