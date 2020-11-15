import questions from '../questions.json';

const initialState = {
    adminusername: "",
    adminuserpassword: "",
    userdetails: [],
    questions: questions
};

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'LOGGEDIN':
            return {
                ...state,
                adminusername: action.payload.username,
                adminuserpassword: action.payload.password,
            }
        case 'LOGGEDOUT':
            return{
                ...state,
                adminusername: "",
                adminuserpassword: "",
            }
        case 'ADDNEWQUESTION':
            return{
                ...state,
                questions: [...state.questions, action.payload],
            }
        case 'DELETEQUESTION':
            let newquestionset=[];
            newquestionset=action.payload.newQuestionSet
            return{
                ...state,
                questions: newquestionset,
            }
        case 'ADDUSERDETAILS':
            return{
                ...state,
                userdetails: [...state.userdetails, action.payload]
            }
        case 'UPDATEQUESTION':
            let updatedquestionset=[];
            updatedquestionset=action.payload.updatedQuestionSet
            return{
                ...state,
                questions: updatedquestionset,
            }
        default: 
            return state
    }
    
};

export default reducer;
