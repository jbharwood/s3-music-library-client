import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-height: 90vh;
  overflow-y: scroll;
  table {
    tr:nth-child(even) {
      background-color: #dddddd;
    }
  }
`
class TracksView extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th>Artist</th>
              <th>Album</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((track, i) => (
              <tr key={i}>
                <td>{track.artist}</td>
                <td>{track.album}</td>
                <td>{track.track}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Wrapper>
    )
  }
}

export default TracksView
