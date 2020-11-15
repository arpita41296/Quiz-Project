import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

class UpdateQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            question: {
                id: 0,
                question: "",
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
                answer: ""
            }
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        this.setState({
            question: {
                id: state.id,
                question: state.question,
                optionA: state.optionA,
                optionB: state.optionB,
                optionC: state.optionC,
                optionD: state.optionD,
                answer: state.answer
            }
        })
    }

    updateQuestion = () => {
        const index = this.props.questions.findIndex((question)=>{
            return question.id == this.state.question.id
        })
        const question = Object.assign({}, this.state.question);
        const questions = Object.assign([], this.props.questions);
        questions[index] = question;
        this.props.updateQuestion(questions);
    };     

    handleChangeQuestion = (event) => {
        this.setState(prevState =>({
            question: {
                ...prevState.question,
                question: event.target.value
            }
        }));
    }

    handleChangeOption = (event) => {
        switch (event.target.id) {
            case 'optionA':
                this.setState(prevState =>({
                    question: {
                        ...prevState.question,
                        optionA: event.target.value
                    }
                }));
                break;

            case 'optionB':
                this.setState(prevState =>({
                    question: {
                        ...prevState.question,
                        optionB: event.target.value
                    }
                }));
                break;

            case 'optionC':
                this.setState(prevState =>({
                    question: {
                        ...prevState.question,
                        optionC: event.target.value
                    }
                }));
                break;
            
            case 'optionD':
                this.setState(prevState =>({
                    question: {
                        ...prevState.question,
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
            question: {
                answer: event.target.value
            }
        }));
    }

    handleUpdateQuestionButtonClick = (event) => {
        this.updateQuestion();
        alert("Question Updated!!");
        this.props.history.push('/admin/home');
    }

    handleCancelButtonClick = (event) => {
        this.props.history.push('/admin/editQuestion');
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Admin Page - Update Question</title></Helmet>
                <div id="question-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:20 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Update Question</h1>
                        <div className="question-container">
                            <input id="question" className="input" type="text" defaultValue={this.state.question.question}  onChange={event => this.handleChangeQuestion(event)} />
                                <div style={{ display:"inline-block", width: "50%" }}>
                                    <input id="optionA" className="input" type="text" defaultValue={this.state.question.optionA}  onChange={event => this.handleChangeOption(event)} />
                                    <input id="optionB" className="input" type="text" defaultValue={this.state.question.optionB}  onChange={event => this.handleChangeOption(event)} />
                                </div>
                                <div style={{ display:"inline-block", width:"50%" }}>
                                    <input id="optionC" className="input" type="text" defaultValue={this.state.question.optionC}  onChange={event => this.handleChangeOption(event)} />
                                    <input id="optionD" className="input" type="text" defaultValue={this.state.question.optionD}  onChange={event => this.handleChangeOption(event)} />
                                </div>
                            <input id="answer" className="input" type="text" defaultValue={this.state.question.answer}  onChange={event => this.handleChangeAnswer(event)} />
                        </div>
                        <div className="update-question-button-container">
                            <button id="update-question-button" onClick={this.handleUpdateQuestionButtonClick}>Update Question</button>
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
      updateQuestion: (updatedQuestionSet) =>  dispach({type: 'UPDATEQUESTION', payload: {
        updatedQuestionSet
      }
      }) 
    }
  }

export default connect(mapStateToProps, mapDispachToProps) (UpdateQuestionPage);