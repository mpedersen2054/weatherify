import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import WeatherDay from './WeatherDay'
import CityInfo from './CityInfo'

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

    if (this.props.forcastData && this.props.cityData) {
      return (
        <div>

          <Col sm={12} md={6} lg={4}>
            <CityInfo info={this.props.cityData} />
          </Col>

          {Object.keys(this.props.forcastData).map((key, i) => {
            var item = this.props.forcastData[key]
            return <WeatherDay day={item} key={i} />
          })}
        </div>
      )
    }
  }

  getGoogleMap() {}

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
