import React, { Component, useState, setState, useEffect } from "react";
import { BarChart } from "d3plus-react";
class CustomVis extends Component {
  static componentWillReceiveProps() {}

  componentDidMount() {}

  componentDidUpdate() {
    if (!this.props.show) {
      this.setState({
        VendorID: 0,
        tpep_pickup_datetime: null,
        tpep_dropoff_datetime: null,
        passenger_count: 0,
        trip_distance: 0,
        pickup_longitude: null,
        pickup_latitude: null,
        dropoff_longitude: null,
        dropoff_latitude: null,
        fare_amount: 0,
        tip_amount: 0,
        total_amount: 0,
      });
    } else {
      this.setState({
        VendorID: this.props.clickedLayer.object.data[0],
        tpep_pickup_datetime: this.props.clickedLayer.object.data[1],
        tpep_dropoff_datetime: this.props.clickedLayer.object.data[2],
        passenger_count: this.props.clickedLayer.object.data[3],
        trip_distance: this.props.clickedLayer.object.data[4],
        pickup_longitude: this.props.clickedLayer.object.data[5],
        pickup_latitude: this.props.clickedLayer.object.data[6],
        dropoff_longitude: this.props.clickedLayer.object.data[7],
        dropoff_latitude: this.props.clickedLayer.object.data[8],
        fare_amount: this.props.clickedLayer.object.data[9],
        tip_amount: this.props.clickedLayer.object.data[10],
        total_amount: this.props.clickedLayer.object.data[11],
      });
    }
  }
  // NOTE, I have rightnow to pass props and show it in a nice div contains a 3dplus chat :) as simple as that
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div
          style={{
            position: "absolute",
            width: "600px",
            bottom: "30px",
            right: "50px",
            height: "300px",
            backgroundColor: "#29323c",
            zIndex: "3",
            color: "#fff",
            fontFamily: "ff-clan-web-pro",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "600px",
              height: "300px",
            }}
          >
            <BarChart
              config={{
                data: [
                  {
                    id: "",
                    x: "Passenger count",
                    y: this.state.passenger_count,
                  },
                  {
                    id: "",
                    x: "Trip distance",
                    y: this.state.trip_distance,
                  },
                  {
                    id: "",
                    x: "fare amount",
                    y: this.state.fare_amount,
                  },
                  {
                    id: "",
                    x: "Trip amount",
                    y: this.state.tip_amount,
                  },
                  {
                    id: "",
                    x: "Total amount",
                    y: this.state.total_amount,
                  },
                ],
                groupBy: "id",
              }}
            />
          </div>
        </div>
      );
    }
  }
}

export default CustomVis;
