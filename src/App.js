import './App.css';
import React from 'react';
import Signup from "./components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./components/Signin";
import Enter from "./components/Enter";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/enter">
            <Enter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
