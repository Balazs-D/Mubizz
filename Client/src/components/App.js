// Libraries
import React from 'react';
import '../assets/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import Header from './Pages/Header/Header';
import Theme from './Style/Theme';
import Login from './Pages/Login';

// =========================================================== //



export default function App() {
  return (
    <Router>
      <Theme>
        <div>
          <Header />
        </div>
      </Theme>
    
    
    <Switch>
        <Route path='/login'><Login /></Route>
    </Switch>
    </Router>


  );
}
