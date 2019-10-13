import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import axios from 'axios';

class App extends Component {

  state = {
    genreName:'',
    genreId: 0,
  }

  getMovie = () => {
    axios({
      method: 'GET',
      url: `/random/${this.state.genreId}`
    })
      .then((response) => {
        console.log('the response is:', response)
        this.props.dispatch({ type: 'SET_RANDOM', payload: response.data })
      })
      .catch(error => {
        console.log('error:', error)
      })
  }

  // sets local state to selected movie genre
  handleChange = (event) => {
    if (event.target.value === 'Action'){
    this.setState({
      genreName:'Action',
      genreId: 28
    })}
    else if (event.target.value === 'Adventure') {
      this.setState({
        genreName: 'Adventure',
        genreId: 12
      })
    }
    else if (event.target.value === 'Animation') {
      this.setState({
        genreName: 'Animation',
        genreId: 16
      })
    }
    else if (event.target.value === 'Comedy') {
      this.setState({
        genreName: 'Comedy',
        genreId: 35
      })
    }
    else if (event.target.value === 'Crime') {
      this.setState({
        genreName: 'Crime',
        genreId: 80
      })
    }
    else if (event.target.value === 'Documentary') {
      this.setState({
        genreName: 'Documentary',
        genreId: 99
      })
    }
    else if (event.target.value === 'Drama') {
      this.setState({
        genreName: 'Drama',
        genreId: 18
      })
    }
    else if (event.target.value === 'Family') {
      this.setState({
        genreName: 'Family',
        genreId: 10751
      })
    }
    else if (event.target.value === 'Fantasy') {
      this.setState({
        genreName: 'Fantasy',
        genreId: 14
      })
    }
    else if (event.target.value === 'History') {
      this.setState({
        genreName: 'History',
        genreId: 36
      })
    }
    else if (event.target.value === 'Horror') {
      this.setState({
        genreName: 'Horror',
        genreId: 27
      })
    }
    else if (event.target.value === 'Music') {
      this.setState({
        genreName: 'Music',
        genreId: 10402
      })
    }
    else if (event.target.value === 'Mystery') {
      this.setState({
        genreName: 'Mystery',
        genreId: 9648
      })
    }
    else if (event.target.value === 'Romance') {
      this.setState({
        genreName: 'Romance',
        genreId: 10749
      })
    }
    else if (event.target.value === 'Science Fiction') {
      this.setState({
        genreName: 'Science Fiction',
        genreId: 878
      })
    }
    else if (event.target.value === 'TV Movie') {
      this.setState({
        genreName: 'TV Movie',
        genreId: 10770
      })
    }
    else if (event.target.value === 'Thriller') {
      this.setState({
        genreName: 'Thriller',
        genreId: 53
      })
    }
    else if (event.target.value === 'War') {
      this.setState({
        genreName: 'War',
        genreId: 10752
      })
    }
    else if (event.target.value === 'Western') {
      this.setState({
        genreName: 'Adventure',
        genreId: 37
      })
    }
  }

  // sends query to API for movie with matching genre
  handleClick = (event) => {
    console.log(this.state);
    this.getMovie();
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Cassidy Foust Solo Project Spike:</h1>
          <h2>TMDB API Movie Selector</h2>
        </header>
        <div className="body">
        <h3>I like movies that are...</h3>
        <select onChange={this.handleChange}>
          <option>
          </option>
            <option>
              Action
          </option>
          <option>
            Adventure
          </option>
            <option>
              Animation
          </option>
            <option>
              Comedy
          </option>
            <option>
              Crime
          </option>
            <option>
              Documentary
          </option>
            <option>
              Drama
          </option>
            <option>
              Family
          </option>
            <option>
              Fantasy
          </option>
            <option>
              History
          </option>
            <option>
              Horror
          </option>
            <option>
              Music
          </option>
            <option>
              Mystery
          </option>
            <option>
              Romance
          </option>
          <option>
            Science Fiction
          </option>
            <option>
              TV Movie
          </option>
            <option>
              Thriller
          </option>
            <option>
              War
          </option>
            <option>
              Western
          </option>
        </select>
        <br></br>
        <button onClick={this.handleClick}>Show me a movie I'd like!</button>
        </div>
        <div className="movie-body">
          <h3>Try this!</h3>
          <h5>{this.props.reduxState.random.original_title}</h5>
          <img src={this.props.reduxState.random.poster_path}></img>
        </div>
      </div>
    );
  }
}


const StateToProps = (reduxState) => ({
  reduxState
})
export default connect(StateToProps)(App);
