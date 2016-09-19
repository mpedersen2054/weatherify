import React, { Component } from 'react'
import axios from 'axios'

import SearchArea from './SearchArea'
import WeatherWeek from './WeatherWeek'
import Messages from './Messages'

import * as helpers from '../lib/helpers'

class Dashboard extends Component {

  constructor() {
    super()

    this.state = {
      messages: [
        { type: 'success', msg: 'Due to XSRF error on published app, this app uses static data from a JSON file.' }
      ],
      isLoading: false,
      forcastData: null,
      cityData: null
    }

    this._getWeather = this._getWeather.bind(this)
  }

  _getWeather(cityName) {
    const apiKey = 'c584772ab492a30e8a28ed3bdff40760'

    this.setState({ isLoading: true })
    // &units=imperial to turn temps in farenheit
    // axios.get(`//api.openweathermap.org/data/2.5/forecast?q=${cityName},us&units=imperial&appid=${apiKey}`)
    axios.get('./fakedata.json')
      .then((response) => {
        if (response.status === 200) {
          this.setState({ cityData: response.data.city })
          return response.data
        }
      })
      .then((responseData) => {
        // reformats the response object
        helpers.formatForcast(responseData)
          .then((formatted) => {
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

        <Messages messages={this.state.messages} />

        <WeatherWeek
          forcastData={this.state.forcastData}
          isLoading={this.state.isLoading}
          cityData={this.state.cityData} />
      </div>
    );
  }
}

export default Dashboard;
