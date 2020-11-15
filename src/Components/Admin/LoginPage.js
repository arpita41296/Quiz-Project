import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

const username = "admin";
const password = "password";

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    handleChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleLoginButtonClick = (event) => {
        if(username === this.state.username && password === this.state.password){
            this.props.setLoginCredential(username, password);
            this.props.history.push('/admin/home');
        }
        else{
            window.alert("Please enter valid Username and Password!!");
        }
      }

    render () {
        return (
            <Fragment>
                <Helmet><title>Login Page - Login</title></Helmet>
                <div id="login-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:20 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Admin</h1>
                        <div className="input-container">
                            <input id="username" className="input" type="text" placeholder="Username" required onChange={event => this.handleChangeUsername(event)} />
                            <input id="password" className="input" type="password" placeholder="Password" required onChange={event => this.handleChangePassword(event)} />
                        </div>
                        <div className="login-button-container">
                            <button id="login-button" onClick={this.handleLoginButtonClick}>Log In</button>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

const mapDispachToProps = (dispach) =>{
    return{
      setLoginCredential: (username, password) =>  dispach({type: 'LOGGEDIN', payload:{
        username, 
        password,
      }
      }) 
    }
  }

export default connect(null, mapDispachToProps) (LoginPage);