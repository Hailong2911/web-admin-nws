import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import Department from './components/department/Department';
import  Employee  from './components/employee/Employee';
import Home from './components/Home';
import Header from './components/layout/Header';
import Login from './components/login/Login';



function App(props) {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Redirect from="/" to="/login" exact />
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/" component={Home} />
          
          <Route exact path="/department" component={Department} />
          <Route exact path="/employee" component={Employee} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;