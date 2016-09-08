import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

// static maps url:
// http://maps.googleapis.com/maps/api/staticmap?center=schaumburg&zoom=14&size=512x512&maptype=roadmap&sensor=false

var apiKey = 'AIzaSyAo1-KK-R_C7aJPu-iEPPTdE8uE2HDkUek'

class CityInfo extends Component {


  getGoogleMap() {
    var info = this.props.info

    return (
      <div>
        <h2>{info.name}, {info.country}</h2>
        <img className="google-map" src={`https://maps.googleapis.com/maps/api/staticmap?center=${info.name}&zoom=14&size=512x512&maptype=roadmap&sensor=false&key=${apiKey}`} />
        <Row className="meta-description">
          <Col sm={6} md={6}>
            <i className="wi wi-barometer"></i>
             <span className="highlight">Humidity</span>
          </Col>
          <Col sm={6} md={6}>
            <i className="wi wi-cloud"></i>
             <span className="highlight">Cloudiness</span>
          </Col>
          <Col sm={6} md={6}>
            <i className="wi wi-snowflake-cold"></i>
             <span className="highlight">Snow last 3hr</span>
          </Col>
          <Col sm={6} md={6}>
            <i className="wi wi-strong-wind"></i>
             <span className="highlight">Windiness</span>
          </Col>
          <Col sm={6} md={6}>
            <i className="wi wi-raindrops"></i>
             <span className="highlight">Rain last 3hr</span>
          </Col>

        </Row>
      </div>
    )
    console.log(info, 'hhehehehehe')

  }

  render() {
    console.log(this.props.info)
    return (
      <div className="city-info">
        {this.getGoogleMap()}
      </div>
    )
  }
}

export default CityInfo
