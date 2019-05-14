import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.select`
  margin-left: 1em;
  margin-right: 1em;
  padding: 1em;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
`

class AlbumSelect extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    console.log("AlbumSelect#componentDidMount")
    this.setState({
      data: this.props.data.albums
    }, () => {
      this.props.setTrackSelect(this.props.data.albums[0])
    })
  }
    componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data.albums
    }, () => {
      this.props.setTrackSelect(this.props.data.albums[0])
    })
  }
  handleChange(e) {
    console.log("AlbumSelect#handleChange")
    const clickedAlbum = e.target.value
    const clickedAlbumData = this.state.data.filter(data => data.album === e.target.value)
    this.props.setTrackSelect(clickedAlbumData[0])
  }
  render() {
    return (
      this.state.data ? 
      <Wrapper size="30" onChange={e => this.handleChange(e)}>
        {this.state.data.map((album, i) => 
          <option 
            key={i}
          >
          {album.album}
          </option>
        )}
      </Wrapper>
      : null
    )
  }
}

export default AlbumSelect
