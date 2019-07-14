import React, { Component } from 'react'

import { Consumer } from './../context'
import Spinner from './Spinner'
import Track from './Track'

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {
          (value) => {
            console.log(value)
            const { track_list } = value

            if (track_list === undefined || track_list.length === 0) {
              return <Spinner />
            } else {
              return (
                <React.Fragment>
                <div className="row">
                  {track_list.map((track) => {
                    return <Track key={track.track.track_id} track={track.track} />
                  })}
                </div>
                </React.Fragment>
              )
            }
          }
        }
      </Consumer>
    )
  }
}
