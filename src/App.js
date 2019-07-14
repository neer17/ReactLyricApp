import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Provider from './context'
import Navbar from './layouts/Navbar'
import Index1 from './components/Index1'
import Lyrics from './components/Lyrics'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <h1 className="text-center">Top 10 Tracks</h1>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index1} />
                <Route exact path="/track/lyrics/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
