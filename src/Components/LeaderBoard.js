import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const User = (props) => {
    return (
        <li className="user-list-container">
            <span className="user">{props.children}</span>
            <span id="user-score">{props.score}</span>
        </li>
    )
}

class LeaderBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userdetails: this.props.userdetails
        };
        console.log(this.state.userdetails.name);
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>LeaderBoard Page - User Score</title></Helmet>
                <div id="leader-board-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:10 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>LeaderBoard</h1>
                        <div className="user-score-container">
                            <ui>
                                {
                                    this.state.userdetails.map((user)=>{
                                        return(
                                            <User score={user.score}>
                                                {user.name}
                                            </User>
                                        )
                                    })
                                }
                            </ui>
                        </div>
                        <div className="back-to-home-button-container">
                            <Link className="back-to-home-button" to="/">Back to Home</Link>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      userdetails: state.userdetails,
    }
}

export default connect(mapStateToProps) (LeaderBoard);