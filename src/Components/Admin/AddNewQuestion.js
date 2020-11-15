import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

var newQuestion;

class AddNewQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            newQuestion: {
                question: "",
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
                answer: ""
            }
        };
    }

    handleChangeNewQuestion = (event) => {
        this.setState(prevState =>({
            newQuestion: {
                ...prevState.newQuestion,
                question: event.target.value
            }
        }));
    }

    handleChangeOption = (event) => {
        switch (event.target.id) {
            case 'optionA':
                this.setState(prevState =>({
                    newQuestion: {
                        ...prevState.newQuestion,
                        optionA: event.target.value
                    }
                }));
                break;

            case 'optionB':
                this.setState(prevState =>({
                    newQuestion: {
                        ...prevState.newQuestion,
                        optionB: event.target.value
                    }
                }));
                break;

            case 'optionC':
                this.setState(prevState =>({
                    newQuestion: {
                        ...prevState.newQuestion,
                        optionC: event.target.value
                    }
                }));
                break;
            
            case 'optionD':
                this.setState(prevState =>({
                    newQuestion: {
                        ...prevState.newQuestion,
                        optionD: event.target.value
                    }
                }));
                break;

            default:
                break;
        }
    }

    handleChangeAnswer = (event) => {
        this.setState(prevState =>({
            newQuestion: {
                ...prevState.newQuestion,
                answer: event.target.value
            }
        }));
    }

    handleAddNewQuestionButtonClick = (event) => {
        if(this.props.questions.length >= 10){
            alert("Quiz can not have more than 10 questions!!");
        }
        else{newQuestion = this.state.newQuestion;
            this.props.addNewQuestion(this.props.questions.length+1, newQuestion);
            this.props.history.push('/admin/home');
        }
    }

    handleCancelButtonClick = (event) => {
        this.props.history.push('/admin/home');
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Admin Page - Add New Question</title></Helmet>
                <div id="question-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:20 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Add New Question</h1>
                        <div className="new-question-container">
                            <input id="new-question" className="input" type="text" placeholder="New Question" required onChange={event => this.handleChangeNewQuestion(event)} />
                                <div style={{ display:"inline-block", width: "50%" }}>
                                    <input id="optionA" className="input" type="text" placeholder="OptionA" required onChange={event => this.handleChangeOption(event)} />
                                    <input id="optionB" className="input" type="text" placeholder="OptionB" required onChange={event => this.handleChangeOption(event)} />
                                </div>
                                <div style={{ display:"inline-block", width:"50%" }}>
                                    <input id="optionC" className="input" type="text" placeholder="OptionC" required onChange={event => this.handleChangeOption(event)} />
                                    <input id="optionD" className="input" type="text" placeholder="OptionD" required onChange={event => this.handleChangeOption(event)} />
                                </div>
                            <input id="answer" className="input" type="text" placeholder="Answer" required onChange={event => this.handleChangeAnswer(event)} />
                        </div>
                        <div className="add-new-question-button-container">
                            <button id="add-new-question-button" onClick={this.handleAddNewQuestionButtonClick}>Add New Question</button>
                        </div>
                        <div className="cancel-button-container">
                            <button id="cancel-button" onClick={this.handleCancelButtonClick}>Cancel</button>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      questions: state.questions,
    }
}

const mapDispachToProps = (dispach) =>{
    return{
      addNewQuestion: (length, newQuestion) =>  dispach({type: 'ADDNEWQUESTION', payload: {
          id: length,
          question: newQuestion.question,
          optionA: newQuestion.optionA,
          optionB: newQuestion.optionB,
          optionC: newQuestion.optionC,
          optionD: newQuestion.optionD,
          answer: newQuestion.answer
      }
      }) 
    }
}

export default connect(mapStateToProps, mapDispachToProps) (AddNewQuestionPage);