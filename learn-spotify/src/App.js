/* eslint-disable no-restricted-globals */
import React, { Component, useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const api = 'http://localhost:8080/login';
class App extends Component {
  state = {};
  // history = useHistory();
  render() {
    return (
      <Router>
        <div className="container m-2">
          <button className="btn btn-primary" onClick={this.onLogin}>
            Login
          </button>
          <button className="btn btn-primary" onClick={this.redirectSample}>
            Sample
          </button>
          <Switch>
            <Route path="/a*" exact component={Details} />
            <Route path="/sample" exact component={Sample} />
          </Switch>
        </div>
      </Router>
    );
  }

  onLogin = () => {
    Axios.get(api, { headers: { system: 'react' } }).then(response => {
      location.replace(response.data.data);
    });
  };
  // redirectSample = () => {
  //   this.history.push('/sample');
  // };
}

class Details extends Component {
  state = {
    data: {}
  };
  token;
  constructor() {
    super();
    this.resolveUrl();
  }
  render() {
    console.log('rendering');
    return (
      <div>
        <p>{this.state.data.display_name}</p>
        <p>{this.state.data.email}</p>
      </div>
    );
  }

  resolveUrl = async () => {
    const url = new URL(window.location.href.replace('#', '?'));
    this.token = url.searchParams.get('access_token');
    Axios.get('https://api.spotify.com/v1/me', {
      headers: { Authorization: 'Bearer ' + this.token }
    }).then(resp => {
      console.log(resp);
      this.setState({ data: resp.data });
    });
  };
}

function Sample() {
  useEffect(() => {
    setData({ name: 'sample' });
  }, []);
  const [data, setData] = useState({});
  return <p>This is {data.name} component</p>;
}
export default App;
