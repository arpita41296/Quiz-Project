import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Question = (props) => {
    return (
        <li className="question-list-container">
            <span className="question">{props.children}</span>
            <button id="update-question-button" onClick={props.updateEvent}>Update</button>
            <button id="delete-question-button" onClick={props.delEvent}>Delete</button>
        </li>
    )
}

class EditQuestionPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: this.props.questions
        };
    }

    deleteQuestion = (index, e) => {
        if(this.state.questions.length <= 5){
            alert("Quiz must have atleast 5 questions!!");
        }
        else{const questions = Object.assign([], this.state.questions);
            questions.splice(index, 1);
            this.setState({questions: questions});
            this.props.deleteQuestion(questions);
        }
    }

    updateQuestion = (id, index, e) => {
        const question = this.state.questions[index];
        this.props.history.push('/admin/update', question);
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Admin Page - Edit Question</title></Helmet>
                <div id="question-list-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:10 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Edit Questions</h1>
                        <div className="back-to-admin-button-container">
                            <Link className="back-to-admin-button" to="/admin/home">Back to Admin Page</Link>
                        </div>
                        <div className="delete-question-container">
                            <ui>
                                {
                                    this.state.questions.map((question, index)=>{
                                        return(
                                            <Question
                                            delEvent={this.deleteQuestion.bind(this, index)}
                                            updateEvent={this.updateQuestion.bind(this, question.id, index)}>
                                                {question.question}
                                            </Question>
                                        )
                                    })
                                }
                            </ui>
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
      deleteQuestion: (newQuestionSet) =>  dispach({type: 'DELETEQUESTION', payload: {
        newQuestionSet
      }
      }) 
    }
  }

export default connect(mapStateToProps, mapDispachToProps) (EditQuestionPage);