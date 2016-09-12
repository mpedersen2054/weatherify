
import React, { Component } from 'react'

import { Alert, Row, Col } from 'react-bootstrap'

class Messages extends Component {
  render() {
    return(
      <div className="messages-container">
        <div className="container">
          <Row>
            <Col md={6} mdOffset={3}>
              {this.props.messages.map((msg, i) => {
                return(
                  <Alert bsStyle={msg.type} key={i}>{msg.msg}</Alert>
                )
              })}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Messages
