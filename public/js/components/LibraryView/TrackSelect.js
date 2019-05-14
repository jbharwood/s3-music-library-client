import React, { Component } from "react"

import styled from "styled-components"

import {Howl, Howler} from 'howler';

const Wrapper = styled.select`
  padding: 1em;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
`

class TrackSelect extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      track: null
    }
  }
  componentDidMount() {
    console.log("TrackSelect#componentDidMount")
    this.setState({data: this.props.data.tracks})
  }
  componentWillReceiveProps(nextProps) {
    console.log("TrackSelect#componentWillReceiveProps")
    this.setState({
      data: nextProps.data.tracks
    })
  }

  handleChange(e) {
    console.log("TrackSelect#handleChange")
    const clickedTrack = e.target.value
    const clickedTrackData = this.state.data.filter(data => data.title === e.target.value)
    this.playTrack(clickedTrackData[0])
    // this.props.setTrackSelect(clickedTrackData[0])

  }

  playTrack(track) {
    let slug = track.url.split(" ").join("+")
    let url = 'https://s3.amazonaws.com/s3-music-library/' + slug
    var sound = new Howl({
      src: url
    });
    this.setState({track: sound})
    sound.play();
  }

  pauseTrack(track) {

  }

  render() {
    return (
      <Wrapper size="30" onChange={e => this.handleChange(e)}>
        {this.state.data.map((track, i) =>
          <option
            key={i}
          >
          {track.title}
          </option>
        )}
      </Wrapper>
    )
  }
}

export default TrackSelect
