import React, { Component } from 'react'
import axios from 'axios'

import SearchArea from './SearchArea'
import WeatherWeek from './WeatherWeek'

import fakedata from '../fakedata.json'
import * as helpers from '../lib/helpers'

class Dashboard extends Component {

  constructor() {
    super()

    this.state = {
      messages: {},
      isLoading: false,
      forcastData: null
    }

    this._getWeather = this._getWeather.bind(this)
  }

  _getWeather(cityName) {
    const apiKey = 'c584772ab492a30e8a28ed3bdff40760'

    this.setState({ isLoading: true })
    // &units=imperial to turn temps in farenheit
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&units=imperial&appid=${apiKey}`)
      .then((response) => { if (response.status === 200) return response.data })
      .then((responseData) => {
        // console.log(responseData)
        helpers.formatForcast(responseData)
          .then((formatted) => {
            // console.log('from dashboard, after promise ||||', formatted)
            this.setState({ forcastData: formatted, isLoading: false })
          })
      })
      .catch((error) => {
        console.log('there was an error!', error)
      })
  }

  render() {

    return (
      <div className="">
        <SearchArea
          _getWeather={this._getWeather} />

        <WeatherWeek
          forcastData={this.state.forcastData}
          isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default Dashboard;
