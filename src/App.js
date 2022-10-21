import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeForm from './components/HomeForm';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import BookFlight from './components/BookFlight';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomeForm}></Route>
                          <Route path = "/book" component = {BookFlight}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
