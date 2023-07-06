import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TodoList from './components/TodoList';
import ShoppingCart from './components/ShoppingCart';
import UserTodo from './components/UserTodo';
// import axiosInstance from "./components/Access";
// import axios from 'axios';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/todolist">
            <TodoList />
          </Route>
          <Route path="/peruser">
            <UserTodo />
          </Route>
          <Route path="/shoppingcart">
            <ShoppingCart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;