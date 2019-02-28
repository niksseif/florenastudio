import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ContactPage from './Pages/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch >
            <Route exact path="/" component={LandingPage} />
            <Route path='/contactme' component={ContactPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
