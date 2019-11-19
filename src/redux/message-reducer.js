import logoMain from "../images/img.png";
import logo from "../images/katya.jpg";
import logo2 from "../images/vlad.jpg";
import logo3 from "../images/sasha.jpg";
import logo4 from "../images/oleh.jpg";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let storeState = {
    Messages: [{id: 1, message: 'tired'},
        {id: 2, message: 'have no time'},
        {id: 3, message: 'have no money'},
        {id: 4, message: 'buy new vape'},
        {id: 5, message: 'yo'},
    ],
    katya: '../../images/katya.jpg',
    arrayDialogs: [{id: 1, logo: {logoMain}, name: 'Dima'},
        {id: 2, logo: {logo}, name: 'Katya'},
        {id: 3, logo: {logo2}, name: 'Vlad'},
        {id: 4, logo: {logo3}, name: 'Sanya'},
        {id: 5, logo: {logo4}, name: 'Oleh'},
    ],
    newMessageText: "",
};


const messageReducer = (state = storeState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                Messages: [...state.Messages, {id: 6, message: body}],
            }
            break;
        case UPDATE_NEW_MESSAGE_TEXT :
            return {
                ...state,
                newMessageText: action.body,
            };
            break
        default:
            return state;
    }
    return state;

}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body: body,
    }
};

export default messageReducer;