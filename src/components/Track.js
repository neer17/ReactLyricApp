import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
    const { track } = props
    return (
        <div className="col-md-6">
            <div className="card border-primary shadow-sm mb-3">
                <div className="card-body">
                    <h3 className="card-title">
                        <i className="fas fa-music"></i>{' '}{track.track_name}</h3>
                    <div className="card-text">
                        <p><i className="fas fa-play"></i> Artist name:
                        <i>{' '}{track.artist_name}</i>
                        </p>
                        <p>Track id: {track.track_id}</p>
                        <Link
                            className="btn btn-dark btn-block"
                            to={{ pathname: `/track/lyrics/${track.track_id}`, state: { track_name: track.track_name } }}>View Lyrics
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track
