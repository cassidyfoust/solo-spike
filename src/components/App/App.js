import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import axios from 'axios';

class App extends Component {

  componentDidMount(){
    this.getRandomGif()
  }

  getRandomGif = () => {
    axios({
      method: 'GET',
      url: '/random'
    })
      .then((response) => {
        console.log(response)
        this.props.dispatch({ type: 'SET_RANDOM', payload: response.data })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }
  // Renders the entire app on the DOM
  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Random Giphy API</h1>
        </header>
        <p><img src={this.props.reduxState.random}></img></p>
      </div>
    );
  }
}

const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
