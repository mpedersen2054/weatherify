import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { FormGroup, InputGroup, FormControl, Button, Grid, Row, Col } from 'react-bootstrap'

class SearchArea extends Component {

  constructor() {
    super()

    this.submitZipcode = this.submitZipcode.bind(this)
  }

  submitZipcode(e) {
    e.preventDefault()
    const zipcode = ReactDOM.findDOMNode(this.refs.zipcode).value || null
    this.props._getWeather(zipcode)
  }

  render() {

    return (
      <div className="search-area">
        <Grid>
          <Row>
            <Col md={6} mdOffset={3}>
              <h1 className="display-1">Weatherify</h1>
              <form id="search-form" onSubmit={this.submitZipcode}>
                <FormGroup bsSize="large">
                  <InputGroup>
                    <FormControl ref="zipcode" type="text" placeholder="City or Zipcode..." />
                    <InputGroup.Button>
                      <Button bsSize="large">Search</Button>
                    </InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SearchArea
