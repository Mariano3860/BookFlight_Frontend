import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import BookFlight from './components/BookFlight';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" component = {BookFlight}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
    
  );
}

export default App;
