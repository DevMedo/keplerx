// Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, { Component, useState, setState, useEffect } from "react";
import { connect } from "react-redux";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import KeplerGl from "kepler.gl";
import nycTripsSubset from "./data/nyc-subset.csv";
import nycConfig from "./data/nyc-config.json";
// Kepler.gl actions
import { addDataToMap } from "kepler.gl/actions";
// Kepler.gl Data processing APIs
import Processors from "kepler.gl/processors";
// Kepler.gl Schema APIs
import KeplerGlSchema from "kepler.gl/schemas";
import Button from "./button";
// import { MapPopoverFactory, injectComponents } from "kepler.gl/components";
// import CustomMapPopoverFactory from "./custom-map-popover";
// import my custom visulastion component
import CustomVis from "custom-vis";

const MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line

class App extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  // static componentWillReceiveProps() {
  //   console.log(this.props);
  //   if (this.state.isLayerClicked !== this.props.app.isLayerClicked) {
  //     return {
  //       isLayerClicked: this.props.app.isLayerClicked,
  //       clickedLayer: this.props.app.layerClicked,
  //     };
  //   }
  //   return null;
  // }

  componentDidMount() {
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    const data = Processors.processCsvData(nycTripsSubset);
    // Create dataset structure
    const dataset = {
      data,
      info: {
        // `info` property are optional, adding an `id` associate with this dataset makes it easier
        // to replace it later
        id: "my_data",
      },
    };
    // console.log(dataset);
    // addDataToMap action to inject dataset into kepler.gl instance
    this.props.dispatch(addDataToMap({ datasets: dataset, config: nycConfig }));
  }

  componentDidUpdate() {
    if (this.state.clickedLayer !== this.props.app.clickedLayer) {
      this.setState({
        isLayerClicked: this.props.app.isLayerClicked,
        clickedLayer: this.props.app.clickedLayer,
      });
    } else {
      return null;
    }
  }
  // Created to show how to replace dataset with new data and keeping the same configuration
  replaceData = () => {
    // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
    const data = Processors.processCsvData(nycTripsSubset);
    // Create dataset structure
    const dataset = {
      data,
      info: {
        id: "my_data",
        // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
        // It is paramount that this id mathces your configuration otherwise the configuration file will be ignored.
      },
    };

    // read the current configuration
    const config = this.getMapConfig();

    // addDataToMap action to inject dataset into kepler.gl instance
    this.props.dispatch(addDataToMap({ datasets: dataset, config }));
  };

  // This method is used as reference to show how to export the current kepler.gl instance configuration
  // Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
  getMapConfig() {
    // retrieve kepler.gl store
    const { keplerGl } = this.props;
    // retrieve current kepler.gl instance store
    const { map } = keplerGl;

    // create the config object
    return KeplerGlSchema.getConfigToSave(map);
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          minHeight: "70vh",
        }}
      >
        <CustomVis
          show={this.state.isLayerClicked}
          clickedLayer={this.state.clickedLayer}
        />
        <AutoSizer>
          {({ height, width }) => (
            <KeplerGl
              mapboxApiAccessToken={MAPBOX_TOKEN}
              id="map"
              width={width}
              height={height}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const dispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, dispatchToProps)(App);
