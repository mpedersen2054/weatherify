import React, { Component } from 'react'
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Range from 'react-range'

import LinkWithTooltip from './LinkWithTooltip'

class WeatherDay extends Component {

  constructor() {
    super()

    this.state = {
      time: 0 // 0-7
    }

    this.changeValue = this.changeValue.bind(this)
  }

  changeValue(e) {
    var updatedTime = e.target.value
    this.setState({ time: updatedTime })
  }

  getDayOfWeekText(dtTxt) {
    var dayNumText = {
      0: 'Sunday', 1: 'Monday', 2: 'Tuesday',
      3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'
    }
    var dtObj = new Date(dtTxt)
    return dayNumText[dtObj.getDay()]
  }

  // timeNum 0-7
  getTimeText(timeNum) {
    var timeText = {
      0: '12:00 A.M', 1: '3:00 A.M', 2: '6:00 A.M', 3: '9:00 A.M',
      4: '12:00 P.M', 5: '3:00 P.M', 6: '6:00 P.M', 7: '9:00 P.M'
    }
    return timeText[timeNum]
  }

  openWeatherIconToWeatherIcons(iconCode) {
    var iconMap = {
      // daytime
      '01d': 'wi-day-sunny', // clear sky
      '02d': 'wi-day-cloudy', // few clouds
      '03d': 'wi-day-cloudy', // scattered clouds
      '04d': 'wi-day-cloudy', // broken clouds
      '09d': 'wi-day-rain', // shower rain
      '10d': 'wi-day-rain', // rain
      '11d': 'wi-day-thunderstorm', // thunderstorm
      '13d': 'wi-day-fog', // mist
      // nighttime
      '01n': 'wi-night-clear',
      '02n': 'wi-night-alt-cloudy',
      '03n': 'wi-night-alt-cloudy',
      '04n': 'wi-night-alt-cloudy',
      '09n': 'wi-night-alt-showers',
      '10n': 'wi-night-alt-showers',
      '11n': 'wi-night-alt-storm-showers',
      '13n': 'wi-night-fog'
    }

    return <i className={`wi ${iconMap[iconCode]}`}></i>
  }

  getCalenderDate(dt_txt) {
    if (!dt_txt) return 'no date.'
    var dtMonth = new Date(dt_txt).getMonth()
    var dtDay = new Date(dt_txt).getDate()

    return `${dtMonth}/${dtDay}`
  }

  render() {
    var time         = this.state.time
    var dayTime      = this.props.day[time]
    var dayOfWeek    = this.getDayOfWeekText(this.props.day[0].dt_txt)
    var timeText     = this.getTimeText(time)
    var calenderDate = this.getCalenderDate(dayTime.dt_txt)

    console.log(calenderDate)

    return (
      <Col sm={12} md={6} lg={4} className="weather-day-container">
        <div className="weather-day">
          <h3>
            <div className="pull-left day-of-week">
              {dayOfWeek}
            </div>
            <div className="pull-right calender-date">
              {calenderDate}
            </div>
          </h3>
          <div className="weather-image">
            {this.openWeatherIconToWeatherIcons(dayTime.weather[0].icon)}
          </div>

          <div className="weather-description">
            {dayTime.weather[0].description}
          </div>

          <hr />

          <div className="weather-temps">
            <div className="main-temp temp">
              {Math.round(dayTime.main.temp)} &deg;
            </div>
            <div className="secondary-temp temp-high temp">
              {Math.round(dayTime.main.temp_max)} &deg;
            </div>
            <span className="lg-vert-divider"></span>
            <div className="secondary-temp temp-low temp">
              {Math.round(dayTime.main.temp_min)} &deg;
            </div>
          </div>

          <hr />

          <div className="weather-metas">
            <span className="weather-meta humidity">
              <i className="wi wi-barometer"></i>
                {dayTime.main.humidity}%
            </span>


            <span className="lg-vert-divider"></span>

            <span className="weather-meta cloudiness">
              <i className="wi wi-cloud"></i>
              {dayTime.clouds.all}%
            </span>

            <span className="lg-vert-divider"></span>

            <span className="weather-meta windiness">
              <i className="wi wi-strong-wind"></i>
              {Math.round(dayTime.wind.speed)} mph
            </span>

            <span className="lg-vert-divider"></span>

            <span className="weather-meta rain-volume">
              <i className="wi wi-raindrops"></i>
              {dayTime.rain['3h'] ? Math.round(dayTime.rain['3h']) : 0}%
            </span>

            <span className="lg-vert-divider"></span>

            <span className="weather-meta snow-volume">
              <i className="wi wi-snowflake-cold"></i>
              {dayTime.snow ? Math.round(dayTime.snow['3h']) : 0}%
            </span>
          </div>

          <hr />

          <div className="weather-time-slider">
            <Row>
              <Col md={8}>
                <Range
                  className="slider"
                  onInput={this.changeValue}
                  type="range"
                  value={this.state.time}
                  step={1}
                  min={0}
                  max={7} />
              </Col>
              <Col md={4} className="weather-time">
                {timeText}
              </Col>
            </Row>
          </div>

        </div>
      </Col>
    );
  }
}

export default WeatherDay
