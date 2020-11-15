import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/styles.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer  from './Components/reducer';
import Home from './Components/Home';
import SubmitName from './Components/Quiz/SubmitName';
import Play from './Components/Quiz/Play';
import QuizSummary from './Components/Quiz/QuizSummary';
import LoginPage from './Components/Admin/LoginPage';
import AdminPage from './Components/Admin/AdminPage';
import AddNewQuestion from './Components/Admin/AddNewQuestion';
import EditQuestion from './Components/Admin/EditQuestion';
import UpdateQuestion from './Components/Admin/UpdateQuestion';
import LeaderBoard from './Components/LeaderBoard';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/play/quiz" exact component={Play} />
        <Route path="/play/submitName" exact component={SubmitName}/>
        <Route path="/play/quizSummary" exact component={QuizSummary}/>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/admin/home" exact component={AdminPage} />
        <Route path="/admin/addNewQuestion" exact component={AddNewQuestion} />
        <Route path="/admin/editQuestion" exact component={EditQuestion} />
        <Route path="/admin/update" exact component={UpdateQuestion} />
        <Route path="/leaderboard" exact component={LeaderBoard} />
      </Router>
    </Provider>
  );
}

export default App;
