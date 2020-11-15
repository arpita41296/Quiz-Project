import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
        };
        
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                name: state.name,
                score: state.correctAnswers,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        if (state !== undefined) {
            stats = (
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1 style={{ textAlign: 'center', marginTop: 50 }}>Quiz has ended</h1>
                    <div className="container stats">
                        <h2>Your Score: {this.state.score}</h2>
                        <span className="stat left">Player Name: </span>
                        <span className="right">{this.state.name}</span><br />

                        <span className="stat left">Total number of questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right">{this.state.numberOfAnsweredQuestions}</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span><br />
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/submitName">Play Again</Link>
                            </li>
                            <li>
                                <Link to ="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                    <ul>
                        <li>
                            <Link to ="/play/quiz">Take a Quiz</Link>
                        </li>
                        <li>
                            <Link to ="/">Back to Home</Link>
                        </li>
                    </ul>
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Quiz App - Summary</title></Helmet>
                <div className="quiz-summary">
                    {stats}
                </div>
            </Fragment>
        );
    }
}

export default QuizSummary;