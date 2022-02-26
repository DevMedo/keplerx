import React, { Component, useState, setState, useEffect } from "react";

class CustomVis extends Component {
  static componentWillReceiveProps() {}

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    if (!this.props.show) {
      return null;
    } else {
      return <div>BINGOOOOOO CLICKEDDDDD!!!</div>;
    }
  }
}

export default CustomVis;
