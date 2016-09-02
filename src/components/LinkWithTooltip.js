import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'


class LinkWithTooltip extends Component {
  render() {
    let tooltip =
      <Tooltip id={this.props.id} className="tooltip">{this.props.tooltip}</Tooltip>;

    return (
      <OverlayTrigger
        overlay={tooltip} placement="bottom"
        delayShow={300} delayHide={150}
      >
        <a href={this.props.href}>{this.props.children}</a>
      </OverlayTrigger>
    );
  }
}

export default LinkWithTooltip
