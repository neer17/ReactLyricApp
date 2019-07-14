import React, { Component } from 'react'
import { Consumer } from './../context'
import axios from 'axios'

export default class Search extends Component {
    state = {
        track_title: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit(dispatch, e) {
        e.preventDefault()

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.track_title}&page_size=10&page=1&s_track_rating=desc&apikey=dcfae8c1f33c4b703b3738a1d367e039`)
            .then((res) => {
                console.log(res.data.message.body.track_list)
                dispatch({
                    type: 'SEARCH_TRACK',
                    payload: res.data.message.body.track_list
                })

                this.setState({
                    track_title: ''
                })

            }).catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <Consumer>
                {
                    (value) => {
                        console.log(value)
                        const { dispatch } = value
                        return (
                            <div>
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <form onSubmit={this.formSubmit.bind(this, dispatch)}>
                                            <div className="form-group">
                                                <input className="form-control form-control-lg mb-2" type="text" placeholder="Search a track by name"
                                                    onChange={this.onChange}
                                                    value={this.state.track_title}
                                                    name="track_title"
                                                />
                                                <button className="btn btn-block btn-primary">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}
