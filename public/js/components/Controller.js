import React, { Component } from "react"
import styled from "styled-components"

import LibraryView from "./LibraryView"
import TracksView from "./TracksView"

class Controller extends Component {
  constructor() {
    super()
    this.state = {
      view: null,
      data: {
        artists: null,
        albums: null,
        tracks: null
      }
    }
  }
  setView() {
    switch (this.props.match.path) {
      case "/tracks":
        this.setState({view: <TracksView data={this.state.data.tracks} />})
        break;
      default:
        this.setState({view: <LibraryView data={this.state.data.artists} />})
    }
  }
  componentDidMount() {
    Promise.all([
      fetch(`http://localhost:1993/artists`),
      fetch(`http://localhost:1993/albums`),
      fetch(`http://localhost:1993/tracks`)
    ])
      .then(([res1, res2, res3]) => 
            Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([json1, json2, json3]) => {
        let s = this.state
        s.data.artists = json1
        s.data.albums = json2
        s.data.tracks = json3
        this.setState(s)
        this.setView()
      })
  }
  render() {
    return this.state.view
  }

}

export default Controller
