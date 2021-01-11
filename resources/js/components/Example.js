import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./app.css";
import Home from "./Home";
import About from "./About";
import Front from "./layouts/Front";
import Back from "./layouts/Back";

const AppRoute = ({component:Component, layout:Layout, ...rest})=>(
  <Route {...rest} render={props=>(
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)
function Example() {
    return(
    <Router>
      <AppRoute path="/" exact layout={Front} component={Home} />
      <AppRoute path="/about" exact layout={Back} component={About} />
    </Router>
    );
    
}

export default Example;