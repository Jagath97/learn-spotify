import React from 'react';
import Axios from 'axios';
import Sample from './components/sample';
import Details from './components/details';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const api = 'http://localhost:8080/login';
function ReduxApp() {
  return (
    <Router>
      <div className="container m-2">
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
        <Switch>
          <Route path="/a*" exact component={Details} />
          <Route path="/sample" exact component={Sample} />
        </Switch>
        <Sample />
      </div>
    </Router>
  );
}

function onLogin() {
  Axios.get(api, { headers: { system: 'react' } }).then(response => {
    window.location.replace(response.data.data);
  });
}

export default ReduxApp;
