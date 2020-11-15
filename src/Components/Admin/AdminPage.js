import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

class AdminPage extends Component {
    constructor(props){
        super(props);
    }

    handleAddNewQuestionButtonClick = (event) => {
        this.props.history.push('/admin/addNewQuestion');
    }

    handleEditQuestionButtonClick = (event) => {
        this.props.history.push('/admin/editQuestion');
    }

    handleLogoutButtonClick = (event) => {
        this.props.logout();
        this.props.history.push('/');
    }

    render () {
        return (
            <Fragment>
                <Helmet><title>Admin Page - Admin</title></Helmet>
                <div id="admin-container" style={{ marginTop: 50}}>
                    <section>
                        <div style={{ textAlign: 'center', marginTop:20 }}>
                            <span className="mdi mdi-cube-outline cube"></span>
                        </div>
                        <h1>Admin</h1>
                        <div className="admin-button-container">
                            <button id="admin-button" onClick={this.handleAddNewQuestionButtonClick}>Add Quiz Question</button>
                            <button id="admin-button" onClick={this.handleEditQuestionButtonClick}>Edit Quiz Question</button>
                            <button id="logout-button" onClick={this.handleLogoutButtonClick}>LogOut</button>
                        </div>
                    </section>
                </div>
            </Fragment>
        )
    }
}

const mapDispachToProps = (dispach) =>{
    return{
      logout: () =>  dispach({type: 'LOGGEDOUT'}) 
    }
  }

export default connect(null, mapDispachToProps)(AdminPage);