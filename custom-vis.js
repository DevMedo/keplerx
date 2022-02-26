"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _d3plusReact = require("d3plus-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomVis = function (_Component) {
  _inherits(CustomVis, _Component);

  function CustomVis() {
    _classCallCheck(this, CustomVis);

    return _possibleConstructorReturn(this, (CustomVis.__proto__ || Object.getPrototypeOf(CustomVis)).apply(this, arguments));
  }

  _createClass(CustomVis, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
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
          total_amount: 0
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
          total_amount: this.props.clickedLayer.object.data[11]
        });
      }
    }
    // NOTE, I have rightnow to pass props and show it in a nice div contains a 3dplus chat :) as simple as that

  }, {
    key: "render",
    value: function render() {
      if (!this.props.show) {
        return null;
      } else {
        return _react2.default.createElement(
          "div",
          {
            style: {
              position: "absolute",
              width: "600px",
              bottom: "30px",
              right: "50px",
              height: "300px",
              backgroundColor: "#29323c",
              zIndex: "3",
              color: "#fff",
              fontFamily: "ff-clan-web-pro"
            }
          },
          _react2.default.createElement(
            "div",
            {
              style: {
                textAlign: "center",
                width: "600px",
                height: "300px"
              }
            },
            _react2.default.createElement(_d3plusReact.BarChart, {
              config: {
                data: [{
                  id: "",
                  x: "Passenger count",
                  y: this.state.passenger_count
                }, {
                  id: "",
                  x: "Trip distance",
                  y: this.state.trip_distance
                }, {
                  id: "",
                  x: "fare amount",
                  y: this.state.fare_amount
                }, {
                  id: "",
                  x: "Trip amount",
                  y: this.state.tip_amount
                }, {
                  id: "",
                  x: "Total amount",
                  y: this.state.total_amount
                }],
                groupBy: "id"
              }
            })
          )
        );
      }
    }
  }], [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps() {}
  }]);

  return CustomVis;
}(_react.Component);

exports.default = CustomVis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b20tdmlzLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVZpcyIsInByb3BzIiwic2hvdyIsInNldFN0YXRlIiwiVmVuZG9ySUQiLCJ0cGVwX3BpY2t1cF9kYXRldGltZSIsInRwZXBfZHJvcG9mZl9kYXRldGltZSIsInBhc3Nlbmdlcl9jb3VudCIsInRyaXBfZGlzdGFuY2UiLCJwaWNrdXBfbG9uZ2l0dWRlIiwicGlja3VwX2xhdGl0dWRlIiwiZHJvcG9mZl9sb25naXR1ZGUiLCJkcm9wb2ZmX2xhdGl0dWRlIiwiZmFyZV9hbW91bnQiLCJ0aXBfYW1vdW50IiwidG90YWxfYW1vdW50IiwiY2xpY2tlZExheWVyIiwib2JqZWN0IiwiZGF0YSIsInBvc2l0aW9uIiwid2lkdGgiLCJib3R0b20iLCJyaWdodCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImNvbG9yIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsImlkIiwieCIsInkiLCJzdGF0ZSIsImdyb3VwQnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNNQSxTOzs7Ozs7Ozs7Ozt3Q0FHZ0IsQ0FBRTs7O3lDQUVEO0FBQ25CLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdDLElBQWhCLEVBQXNCO0FBQ3BCLGFBQUtDLFFBQUwsQ0FBYztBQUNaQyxvQkFBVSxDQURFO0FBRVpDLGdDQUFzQixJQUZWO0FBR1pDLGlDQUF1QixJQUhYO0FBSVpDLDJCQUFpQixDQUpMO0FBS1pDLHlCQUFlLENBTEg7QUFNWkMsNEJBQWtCLElBTk47QUFPWkMsMkJBQWlCLElBUEw7QUFRWkMsNkJBQW1CLElBUlA7QUFTWkMsNEJBQWtCLElBVE47QUFVWkMsdUJBQWEsQ0FWRDtBQVdaQyxzQkFBWSxDQVhBO0FBWVpDLHdCQUFjO0FBWkYsU0FBZDtBQWNELE9BZkQsTUFlTztBQUNMLGFBQUtaLFFBQUwsQ0FBYztBQUNaQyxvQkFBVSxLQUFLSCxLQUFMLENBQVdlLFlBQVgsQ0FBd0JDLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxDQUFwQyxDQURFO0FBRVpiLGdDQUFzQixLQUFLSixLQUFMLENBQVdlLFlBQVgsQ0FBd0JDLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxDQUFwQyxDQUZWO0FBR1paLGlDQUF1QixLQUFLTCxLQUFMLENBQVdlLFlBQVgsQ0FBd0JDLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxDQUFwQyxDQUhYO0FBSVpYLDJCQUFpQixLQUFLTixLQUFMLENBQVdlLFlBQVgsQ0FBd0JDLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxDQUFwQyxDQUpMO0FBS1pWLHlCQUFlLEtBQUtQLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBTEg7QUFNWlQsNEJBQWtCLEtBQUtSLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBTk47QUFPWlIsMkJBQWlCLEtBQUtULEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBUEw7QUFRWlAsNkJBQW1CLEtBQUtWLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBUlA7QUFTWk4sNEJBQWtCLEtBQUtYLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBVE47QUFVWkwsdUJBQWEsS0FBS1osS0FBTCxDQUFXZSxZQUFYLENBQXdCQyxNQUF4QixDQUErQkMsSUFBL0IsQ0FBb0MsQ0FBcEMsQ0FWRDtBQVdaSixzQkFBWSxLQUFLYixLQUFMLENBQVdlLFlBQVgsQ0FBd0JDLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxFQUFwQyxDQVhBO0FBWVpILHdCQUFjLEtBQUtkLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QkMsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLEVBQXBDO0FBWkYsU0FBZDtBQWNEO0FBQ0Y7QUFDRDs7Ozs2QkFDUztBQUNQLFVBQUksQ0FBQyxLQUFLakIsS0FBTCxDQUFXQyxJQUFoQixFQUFzQjtBQUNwQixlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFPO0FBQ0xpQix3QkFBVSxVQURMO0FBRUxDLHFCQUFPLE9BRkY7QUFHTEMsc0JBQVEsTUFISDtBQUlMQyxxQkFBTyxNQUpGO0FBS0xDLHNCQUFRLE9BTEg7QUFNTEMsK0JBQWlCLFNBTlo7QUFPTEMsc0JBQVEsR0FQSDtBQVFMQyxxQkFBTyxNQVJGO0FBU0xDLDBCQUFZO0FBVFA7QUFEVDtBQWFFO0FBQUE7QUFBQTtBQUNFLHFCQUFPO0FBQ0xDLDJCQUFXLFFBRE47QUFFTFIsdUJBQU8sT0FGRjtBQUdMRyx3QkFBUTtBQUhIO0FBRFQ7QUFPRSwwQ0FBQyxxQkFBRDtBQUNFLHNCQUFRO0FBQ05MLHNCQUFNLENBQ0o7QUFDRVcsc0JBQUksRUFETjtBQUVFQyxxQkFBRyxpQkFGTDtBQUdFQyxxQkFBRyxLQUFLQyxLQUFMLENBQVd6QjtBQUhoQixpQkFESSxFQU1KO0FBQ0VzQixzQkFBSSxFQUROO0FBRUVDLHFCQUFHLGVBRkw7QUFHRUMscUJBQUcsS0FBS0MsS0FBTCxDQUFXeEI7QUFIaEIsaUJBTkksRUFXSjtBQUNFcUIsc0JBQUksRUFETjtBQUVFQyxxQkFBRyxhQUZMO0FBR0VDLHFCQUFHLEtBQUtDLEtBQUwsQ0FBV25CO0FBSGhCLGlCQVhJLEVBZ0JKO0FBQ0VnQixzQkFBSSxFQUROO0FBRUVDLHFCQUFHLGFBRkw7QUFHRUMscUJBQUcsS0FBS0MsS0FBTCxDQUFXbEI7QUFIaEIsaUJBaEJJLEVBcUJKO0FBQ0VlLHNCQUFJLEVBRE47QUFFRUMscUJBQUcsY0FGTDtBQUdFQyxxQkFBRyxLQUFLQyxLQUFMLENBQVdqQjtBQUhoQixpQkFyQkksQ0FEQTtBQTRCTmtCLHlCQUFTO0FBNUJIO0FBRFY7QUFQRjtBQWJGLFNBREY7QUF3REQ7QUFDRjs7O2dEQW5Ha0MsQ0FBRTs7OztFQURmQyxnQjs7a0JBdUdUbEMsUyIsImZpbGUiOiJjdXN0b20tdmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHNldFN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcImQzcGx1cy1yZWFjdFwiO1xuY2xhc3MgQ3VzdG9tVmlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBWZW5kb3JJRDogMCxcbiAgICAgICAgdHBlcF9waWNrdXBfZGF0ZXRpbWU6IG51bGwsXG4gICAgICAgIHRwZXBfZHJvcG9mZl9kYXRldGltZTogbnVsbCxcbiAgICAgICAgcGFzc2VuZ2VyX2NvdW50OiAwLFxuICAgICAgICB0cmlwX2Rpc3RhbmNlOiAwLFxuICAgICAgICBwaWNrdXBfbG9uZ2l0dWRlOiBudWxsLFxuICAgICAgICBwaWNrdXBfbGF0aXR1ZGU6IG51bGwsXG4gICAgICAgIGRyb3BvZmZfbG9uZ2l0dWRlOiBudWxsLFxuICAgICAgICBkcm9wb2ZmX2xhdGl0dWRlOiBudWxsLFxuICAgICAgICBmYXJlX2Ftb3VudDogMCxcbiAgICAgICAgdGlwX2Ftb3VudDogMCxcbiAgICAgICAgdG90YWxfYW1vdW50OiAwLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBWZW5kb3JJRDogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIub2JqZWN0LmRhdGFbMF0sXG4gICAgICAgIHRwZXBfcGlja3VwX2RhdGV0aW1lOiB0aGlzLnByb3BzLmNsaWNrZWRMYXllci5vYmplY3QuZGF0YVsxXSxcbiAgICAgICAgdHBlcF9kcm9wb2ZmX2RhdGV0aW1lOiB0aGlzLnByb3BzLmNsaWNrZWRMYXllci5vYmplY3QuZGF0YVsyXSxcbiAgICAgICAgcGFzc2VuZ2VyX2NvdW50OiB0aGlzLnByb3BzLmNsaWNrZWRMYXllci5vYmplY3QuZGF0YVszXSxcbiAgICAgICAgdHJpcF9kaXN0YW5jZTogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIub2JqZWN0LmRhdGFbNF0sXG4gICAgICAgIHBpY2t1cF9sb25naXR1ZGU6IHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzVdLFxuICAgICAgICBwaWNrdXBfbGF0aXR1ZGU6IHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzZdLFxuICAgICAgICBkcm9wb2ZmX2xvbmdpdHVkZTogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIub2JqZWN0LmRhdGFbN10sXG4gICAgICAgIGRyb3BvZmZfbGF0aXR1ZGU6IHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzhdLFxuICAgICAgICBmYXJlX2Ftb3VudDogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIub2JqZWN0LmRhdGFbOV0sXG4gICAgICAgIHRpcF9hbW91bnQ6IHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzEwXSxcbiAgICAgICAgdG90YWxfYW1vdW50OiB0aGlzLnByb3BzLmNsaWNrZWRMYXllci5vYmplY3QuZGF0YVsxMV0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgLy8gTk9URSwgSSBoYXZlIHJpZ2h0bm93IHRvIHBhc3MgcHJvcHMgYW5kIHNob3cgaXQgaW4gYSBuaWNlIGRpdiBjb250YWlucyBhIDNkcGx1cyBjaGF0IDopIGFzIHNpbXBsZSBhcyB0aGF0XG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuc2hvdykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgIHdpZHRoOiBcIjYwMHB4XCIsXG4gICAgICAgICAgICBib3R0b206IFwiMzBweFwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzI5MzIzY1wiLFxuICAgICAgICAgICAgekluZGV4OiBcIjNcIixcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiZmYtY2xhbi13ZWItcHJvXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNjAwcHhcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYXJDaGFydFxuICAgICAgICAgICAgICBjb25maWc9e3tcbiAgICAgICAgICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB4OiBcIlBhc3NlbmdlciBjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnN0YXRlLnBhc3Nlbmdlcl9jb3VudCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB4OiBcIlRyaXAgZGlzdGFuY2VcIixcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5zdGF0ZS50cmlwX2Rpc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHg6IFwiZmFyZSBhbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5zdGF0ZS5mYXJlX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB4OiBcIlRyaXAgYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUudGlwX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB4OiBcIlRvdGFsIGFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnN0YXRlLnRvdGFsX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBncm91cEJ5OiBcImlkXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVZpcztcbiJdfQ==