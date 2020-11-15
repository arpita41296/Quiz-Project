import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <Helmet><title>Home - Quiz App</title></Helmet>
        <div id="home" style={{ marginTop: 50}}>
            <section>
                <div style={{ textAlign: 'center', marginTop:20 }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <Link className="play-button" to="/play/submitName">Play</Link>
                    <Link to="/leaderboard" className="play-button">LeaderBoard</Link>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;