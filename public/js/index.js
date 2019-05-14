import "normalize.css"
import "../css/style.scss"

import React from "react"
import { render } from "react-dom"

import Router from "./components/Router"

import {Provider} from 'react-redux'
import reducer from './reducer'
import { createStore } from 'redux'

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Router/>,
    document.getElementById("app")
    </Provider>
)
