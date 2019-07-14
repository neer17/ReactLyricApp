import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Spinner from './Spinner'

export default class Lyrics extends Component {
  state = {
    track_name: '',
    lyrics: ''
  }

  componentDidMount() {
    //  getting the id and track name passed as params
    var id = this.props.match.params.id
    var { track_name } = this.props.location.state

    //  getting the lyrics based on the track id
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=dcfae8c1f33c4b703b3738a1d367e039`)
      .then((res) => {
        this.setState({
          track_name,
          lyrics: res.data.message.body.lyrics.lyrics_body
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    var { track_name, lyrics } = this.state

    if (track_name.length === 0 || lyrics.length === 0) {
      return <Spinner />
    } else {
      return (
        <React.Fragment>
          <div className="card shadow-sm">
            <div className="card-body">
              <div className="card-title">
                <Link className="btn btn-sm btn-dark mb-3" to="/">Go Back</Link><br />
                <h3>{this.state.track_name}</h3>
                <h4>Lyrics</h4>
                <cite>{this.state.lyrics}</cite>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}
