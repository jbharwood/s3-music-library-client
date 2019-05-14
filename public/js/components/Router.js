import React, { Component } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as BrowserRouter, Route } from "react-router-dom"

import Controller from "./Controller"

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Controller} />
          <Route exact path="/library" component={Controller} />
          <Route exact path="/tracks" component={Controller} />
        </div>
      </BrowserRouter>
    )
  }
}

export default Router
