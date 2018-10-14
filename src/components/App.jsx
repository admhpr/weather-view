import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="app-container" className="container card shadow">
          <div className="row">
            <div className="flex-fill">
              <SearchBar />
              <WeatherList />
            </div>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    )
  }
}
