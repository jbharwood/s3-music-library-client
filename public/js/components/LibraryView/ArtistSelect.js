import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.select`
  padding: 1em;
  width: 25%;
  height: 90vh;
  overflow-y: scroll;
`

class ArtistSelect extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this) 
  }
  componentDidMount() {
    this.setState({data: this.props.data})
  }
  
  handleChange(e) {
    const clickedArtist = e.target.value
    const clickedArtistData = this.state.data.filter(data => data.artist === e.target.value)
    console.log(clickedArtistData)
    this.props.setAlbumSelect(clickedArtistData[0])
  }

  render() {
    return (
      <Wrapper size="30" onChange={e => this.handleChange(e)}>
        {this.state.data.map((artist, i) => 
          <option 
            key={i}
          >
          {artist.artist}
          </option>
        )}
      </Wrapper>
    )
  }
}

export default ArtistSelect
