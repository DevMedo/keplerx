import React, { Component, useState, setState, useEffect } from "react";
import { BarChart } from "d3plus-react";
class CustomVis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedLayer: null,
      changedData: {
        passenger_count: "0",
        trip_distance: "0",
        fare_amount: "0",
        trip_amount: "0",
        total_amount: "0",
      },
    };
  }

  componentDidMount() {
    if (this.props.show) {
      if (this.state.clickedLayer == null) {
        this.setState({
          clickedLayer: this.props.clickedLayer,
        });
      }
    }
  }

  componentDidUpdate() {
    // console.log(this.props);
    if (this.props.show) {
      if (this.state.clickedLayer !== this.props.clickedLayer) {
        this.setState({
          clickedLayer: this.props.clickedLayer,
          changedData: {
            passenger_count: String(this.props.clickedLayer.object.data[3]),
            trip_distance: String(this.props.clickedLayer.object.data[4]),
            fare_amount: String(this.props.clickedLayer.object.data[9]),
            trip_amount: String(this.props.clickedLayer.object.data[10]),
            total_amount: String(this.props.clickedLayer.object.data[11]),
          },
        });
        // console.log(this.props.clickedLayer.object.data[1]);
      }
    } else {
      return null;
    }
  }

  render() {
    // if (this.props.show) {
    //   if (this.state.clickedLayer !== this.props.clickedLayer) {
    //     this.setState({
    //       clickedLayer: this.props.clickedLayer,
    //     });
    //   }
    // }

    if (!this.props.show) {
      return null;
    } else {
      return (
        <div
          style={{
            position: "absolute",
            width: "650px",
            bottom: "30px",
            right: "30px",
            height: "400px",
            backgroundColor: "#29323c",
            zIndex: "3",
            color: "#fff",
            fontFamily: "ff-clan-web-pro",
          }}
        >
          <div
            style={{
              textAlign: "center",
              width: "650px",
              height: "400px",
            }}
          >
            <BarChart
              config={{
                data: [
                  {
                    id: "",
                    x: "Passenger count",
                    y: this.state.changedData.passenger_count,
                  },
                  {
                    id: "",
                    x: "Trip distance",
                    y: this.state.changedData.trip_distance,
                  },
                  {
                    id: "",
                    x: "fare amount",
                    y: this.state.changedData.fare_amount,
                  },
                  {
                    id: "",
                    x: "Trip amount",
                    y: this.state.changedData.trip_amount,
                  },
                  {
                    id: "",
                    x: "Total amount",
                    y: this.state.changedData.total_amount,
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
