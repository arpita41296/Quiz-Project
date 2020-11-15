import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';

class SubmitName extends Component {
    constructor(props){
        super(props);
        this.state = {
            startButtonVisibility: false,
            playerName: ""
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        if (target.value) {
            this.setState({
                startButtonVisibility: true,
                playerName: target.value
            });
        }
        else{
            this.setState({
                startButtonVisibility: false
            });
        }
    
    }
    
    handleStartButtonClick = () => {
        const playerName = {
            name: this.state.playerName
        }
        this.props.history.push('/play/quiz', playerName);
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Submit Name - Quiz App</title></Helmet>
                <div id="submitName" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:20 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Quiz App</h1>
                        <div className="submit-name-container">
                            <input className="submit-name-input" type="text" placeholder="Enter Player Name" onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div className="play-button-container">
                            <button style={{visibility: this.state.startButtonVisibility ? "visible" : "hidden"}} className="play-button" onClick={this.handleStartButtonClick}>Start</button>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

export default SubmitName;