import React, { Component } from 'react'
import { Grid, Row } from 'react-bootstrap'

import WeatherDay from './WeatherDay'

class WeatherWeek extends Component {

  constructor() {
    super()

    this.renderWeatherDays = this.renderWeatherDays.bind(this)
  }

  renderWeatherDays() {
    if (!this.props.forcastData) {
      return <div></div>
    }
    if (this.props.isLoading) {
      return <div>LOADING...</div>
    }

    if (this.props.forcastData) {
      return (
        <div>
          {Object.keys(this.props.forcastData).map((key, i) => {
            var item = this.props.forcastData[key]
            return <WeatherDay day={item} key={i} />
          })}
        </div>
      )
    }
  }

  render() {

    return (
      <div className="weather-week">
        <Grid>
          <Row>
            {this.renderWeatherDays()}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default WeatherWeek;
