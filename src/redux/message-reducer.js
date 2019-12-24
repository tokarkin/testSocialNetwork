import logoMain from "../images/img.png";
import logo from "../images/katya.jpg";
import logo2 from "../images/vlad.jpg";
import logo3 from "../images/sasha.jpg";
import logo4 from "../images/oleh.jpg";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let storeState = {

    arrayDialogs: [{id: 1, logo: {logoMain}, name: 'Dima',
        messages:[{id: 1, message: 'sadfsf',messageType:'in'},
            {id: 2, message: 'have no time',messageType:'out'},
            {id: 3, message: 'have no money',messageType:'in'},
            {id: 4, message: 'buy new vape',messageType:'in'},
            {id: 5, message: 'yo',messageType:'in'},]},
        {id: 2, logo: {logo}, name: 'Katya',
            messages:[{id: 1, message: 'tired',messageType:'in'},
                {id: 2, message: 'have dasdasdas time',messageType:'out'},
                {id: 3, message: 'have no money',messageType:'in'},
                {id: 4, message: 'buy new vape',messageType:'in'},
                {id: 5, message: 'yo',messageType:'in'},]},
        {id: 3, logo: {logo2}, name: 'Vlad',
            messages:[{id: 1, message: 'asdasda',messageType:'in'},
                {id: 2, message: 'asdasa',messageType:'out'},
                {id: 3, message: 'have no money',messageType:'in'},
                {id: 4, message: 'buy asdasdasd vape',messageType:'in'},
                {id: 5, message: 'yo',messageType:'in'},]},
        {id: 4, logo: {logo3}, name: 'Sanya',
            messages:[{id: 1, message: 'tired',messageType:'in'},
                {id: 2, message: 'dasdsa no time',messageType:'out'},
                {id: 3, message: 'have no money',messageType:'in'},
                {id: 4, message: 'buy new vape',messageType:'in'},
                {id: 5, message: 'yo',messageType:'in'},]},
        {id: 5, logo: {logo4}, name: 'Oleh',
            messages:[{id: 1, message: 'asdasdasdsa',messageType:'in'},
                {id: 2, message: 'dasda no time',messageType:'out'},
                {id: 3, message: 'have no money',messageType:'in'},
                {id: 4, message: 'dsadas new vape',messageType:'in'},
                {id: 5, message: 'yo',messageType:'in'},]},
    ],
};


const messageReducer = (state = storeState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessage;
            return {
                ...state,
                arrayDialogs: [...state.arrayDialogs.map((dialog,i) =>{
                    if (i === action.userId ){
                        return {
                            ...dialog,
                            messages:[...dialog.messages,{id:7, message: body, messageType:'out'} ]
                        }
                    }
                    else{
                        return dialog
                    }
                })],
            }
            break;
        default:
            return state;
    }
    return state;

}
export const sendMessageCreator = (newMessage,userId) => {

    return {
        type: SEND_MESSAGE,
        newMessage:newMessage,
        userId: userId,
    }
}

export default messageReducer;