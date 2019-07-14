import React, { Component } from 'react'
import axios from 'axios';

const Context = React.createContext()

//  creating reducer
var reducer = (state, action) => {
    var track_list  = action.payload
    switch (action.type) {
        case 'SEARCH_TRACK':
            return {
                ...state,
                track_list,
                heading: 'Top 10 Searched Tracks'
            }
        default: return state
    }
}

export default class Provider extends Component {
    state = {
        track_list: [],
        heading: '',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
        chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1
        &apikey=dcfae8c1f33c4b703b3738a1d367e039`)
            .then((res) => {
                console.log(res)
                //  adding data to the state
                this.setState({ track_list: res.data.message.body.track_list })
            }).catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer

