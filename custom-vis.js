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

  function CustomVis(props) {
    _classCallCheck(this, CustomVis);

    var _this = _possibleConstructorReturn(this, (CustomVis.__proto__ || Object.getPrototypeOf(CustomVis)).call(this, props));

    _this.state = {
      clickedLayer: null,
      changedData: {
        passenger_count: "0",
        trip_distance: "0",
        fare_amount: "0",
        trip_amount: "0",
        total_amount: "0"
      }
    };
    return _this;
  }

  _createClass(CustomVis, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.show) {
        if (this.state.clickedLayer == null) {
          this.setState({
            clickedLayer: this.props.clickedLayer
          });
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
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
              total_amount: String(this.props.clickedLayer.object.data[11])
            }
          });
          // console.log(this.props.clickedLayer.object.data[1]);
        }
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
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
        return _react2.default.createElement(
          "div",
          {
            style: {
              position: "absolute",
              width: "650px",
              bottom: "30px",
              right: "30px",
              height: "400px",
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
                width: "650px",
                height: "400px"
              }
            },
            _react2.default.createElement(_d3plusReact.BarChart, {
              config: {
                data: [{
                  id: "",
                  x: "Passenger count",
                  y: this.state.changedData.passenger_count
                }, {
                  id: "",
                  x: "Trip distance",
                  y: this.state.changedData.trip_distance
                }, {
                  id: "",
                  x: "fare amount",
                  y: this.state.changedData.fare_amount
                }, {
                  id: "",
                  x: "Trip amount",
                  y: this.state.changedData.trip_amount
                }, {
                  id: "",
                  x: "Total amount",
                  y: this.state.changedData.total_amount
                }],
                groupBy: "id"
              }
            })
          )
        );
      }
    }
  }]);

  return CustomVis;
}(_react.Component);

exports.default = CustomVis;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b20tdmlzLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVZpcyIsInByb3BzIiwic3RhdGUiLCJjbGlja2VkTGF5ZXIiLCJjaGFuZ2VkRGF0YSIsInBhc3Nlbmdlcl9jb3VudCIsInRyaXBfZGlzdGFuY2UiLCJmYXJlX2Ftb3VudCIsInRyaXBfYW1vdW50IiwidG90YWxfYW1vdW50Iiwic2hvdyIsInNldFN0YXRlIiwiU3RyaW5nIiwib2JqZWN0IiwiZGF0YSIsInBvc2l0aW9uIiwid2lkdGgiLCJib3R0b20iLCJyaWdodCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInpJbmRleCIsImNvbG9yIiwiZm9udEZhbWlseSIsInRleHRBbGlnbiIsImlkIiwieCIsInkiLCJncm91cEJ5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLElBREg7QUFFWEMsbUJBQWE7QUFDWEMseUJBQWlCLEdBRE47QUFFWEMsdUJBQWUsR0FGSjtBQUdYQyxxQkFBYSxHQUhGO0FBSVhDLHFCQUFhLEdBSkY7QUFLWEMsc0JBQWM7QUFMSDtBQUZGLEtBQWI7QUFGaUI7QUFZbEI7Ozs7d0NBRW1CO0FBQ2xCLFVBQUksS0FBS1IsS0FBTCxDQUFXUyxJQUFmLEVBQXFCO0FBQ25CLFlBQUksS0FBS1IsS0FBTCxDQUFXQyxZQUFYLElBQTJCLElBQS9CLEVBQXFDO0FBQ25DLGVBQUtRLFFBQUwsQ0FBYztBQUNaUiwwQkFBYyxLQUFLRixLQUFMLENBQVdFO0FBRGIsV0FBZDtBQUdEO0FBQ0Y7QUFDRjs7O3lDQUVvQjtBQUNuQjtBQUNBLFVBQUksS0FBS0YsS0FBTCxDQUFXUyxJQUFmLEVBQXFCO0FBQ25CLFlBQUksS0FBS1IsS0FBTCxDQUFXQyxZQUFYLEtBQTRCLEtBQUtGLEtBQUwsQ0FBV0UsWUFBM0MsRUFBeUQ7QUFDdkQsZUFBS1EsUUFBTCxDQUFjO0FBQ1pSLDBCQUFjLEtBQUtGLEtBQUwsQ0FBV0UsWUFEYjtBQUVaQyx5QkFBYTtBQUNYQywrQkFBaUJPLE9BQU8sS0FBS1gsS0FBTCxDQUFXRSxZQUFYLENBQXdCVSxNQUF4QixDQUErQkMsSUFBL0IsQ0FBb0MsQ0FBcEMsQ0FBUCxDQUROO0FBRVhSLDZCQUFlTSxPQUFPLEtBQUtYLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QlUsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLENBQXBDLENBQVAsQ0FGSjtBQUdYUCwyQkFBYUssT0FBTyxLQUFLWCxLQUFMLENBQVdFLFlBQVgsQ0FBd0JVLE1BQXhCLENBQStCQyxJQUEvQixDQUFvQyxDQUFwQyxDQUFQLENBSEY7QUFJWE4sMkJBQWFJLE9BQU8sS0FBS1gsS0FBTCxDQUFXRSxZQUFYLENBQXdCVSxNQUF4QixDQUErQkMsSUFBL0IsQ0FBb0MsRUFBcEMsQ0FBUCxDQUpGO0FBS1hMLDRCQUFjRyxPQUFPLEtBQUtYLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QlUsTUFBeEIsQ0FBK0JDLElBQS9CLENBQW9DLEVBQXBDLENBQVA7QUFMSDtBQUZELFdBQWQ7QUFVQTtBQUNEO0FBQ0YsT0FkRCxNQWNPO0FBQ0wsZUFBTyxJQUFQO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBSSxDQUFDLEtBQUtiLEtBQUwsQ0FBV1MsSUFBaEIsRUFBc0I7QUFDcEIsZUFBTyxJQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBTztBQUNMSyx3QkFBVSxVQURMO0FBRUxDLHFCQUFPLE9BRkY7QUFHTEMsc0JBQVEsTUFISDtBQUlMQyxxQkFBTyxNQUpGO0FBS0xDLHNCQUFRLE9BTEg7QUFNTEMsK0JBQWlCLFNBTlo7QUFPTEMsc0JBQVEsR0FQSDtBQVFMQyxxQkFBTyxNQVJGO0FBU0xDLDBCQUFZO0FBVFA7QUFEVDtBQWFFO0FBQUE7QUFBQTtBQUNFLHFCQUFPO0FBQ0xDLDJCQUFXLFFBRE47QUFFTFIsdUJBQU8sT0FGRjtBQUdMRyx3QkFBUTtBQUhIO0FBRFQ7QUFPRSwwQ0FBQyxxQkFBRDtBQUNFLHNCQUFRO0FBQ05MLHNCQUFNLENBQ0o7QUFDRVcsc0JBQUksRUFETjtBQUVFQyxxQkFBRyxpQkFGTDtBQUdFQyxxQkFBRyxLQUFLekIsS0FBTCxDQUFXRSxXQUFYLENBQXVCQztBQUg1QixpQkFESSxFQU1KO0FBQ0VvQixzQkFBSSxFQUROO0FBRUVDLHFCQUFHLGVBRkw7QUFHRUMscUJBQUcsS0FBS3pCLEtBQUwsQ0FBV0UsV0FBWCxDQUF1QkU7QUFINUIsaUJBTkksRUFXSjtBQUNFbUIsc0JBQUksRUFETjtBQUVFQyxxQkFBRyxhQUZMO0FBR0VDLHFCQUFHLEtBQUt6QixLQUFMLENBQVdFLFdBQVgsQ0FBdUJHO0FBSDVCLGlCQVhJLEVBZ0JKO0FBQ0VrQixzQkFBSSxFQUROO0FBRUVDLHFCQUFHLGFBRkw7QUFHRUMscUJBQUcsS0FBS3pCLEtBQUwsQ0FBV0UsV0FBWCxDQUF1Qkk7QUFINUIsaUJBaEJJLEVBcUJKO0FBQ0VpQixzQkFBSSxFQUROO0FBRUVDLHFCQUFHLGNBRkw7QUFHRUMscUJBQUcsS0FBS3pCLEtBQUwsQ0FBV0UsV0FBWCxDQUF1Qks7QUFINUIsaUJBckJJLENBREE7QUE0Qk5tQix5QkFBUztBQTVCSDtBQURWO0FBUEY7QUFiRixTQURGO0FBd0REO0FBQ0Y7Ozs7RUFuSHFCQyxnQjs7a0JBc0hUN0IsUyIsImZpbGUiOiJjdXN0b20tdmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHNldFN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhckNoYXJ0IH0gZnJvbSBcImQzcGx1cy1yZWFjdFwiO1xuY2xhc3MgQ3VzdG9tVmlzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrZWRMYXllcjogbnVsbCxcbiAgICAgIGNoYW5nZWREYXRhOiB7XG4gICAgICAgIHBhc3Nlbmdlcl9jb3VudDogXCIwXCIsXG4gICAgICAgIHRyaXBfZGlzdGFuY2U6IFwiMFwiLFxuICAgICAgICBmYXJlX2Ftb3VudDogXCIwXCIsXG4gICAgICAgIHRyaXBfYW1vdW50OiBcIjBcIixcbiAgICAgICAgdG90YWxfYW1vdW50OiBcIjBcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmNsaWNrZWRMYXllciA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsaWNrZWRMYXllcjogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93KSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jbGlja2VkTGF5ZXIgIT09IHRoaXMucHJvcHMuY2xpY2tlZExheWVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGNsaWNrZWRMYXllcjogdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIsXG4gICAgICAgICAgY2hhbmdlZERhdGE6IHtcbiAgICAgICAgICAgIHBhc3Nlbmdlcl9jb3VudDogU3RyaW5nKHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzNdKSxcbiAgICAgICAgICAgIHRyaXBfZGlzdGFuY2U6IFN0cmluZyh0aGlzLnByb3BzLmNsaWNrZWRMYXllci5vYmplY3QuZGF0YVs0XSksXG4gICAgICAgICAgICBmYXJlX2Ftb3VudDogU3RyaW5nKHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzldKSxcbiAgICAgICAgICAgIHRyaXBfYW1vdW50OiBTdHJpbmcodGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIub2JqZWN0LmRhdGFbMTBdKSxcbiAgICAgICAgICAgIHRvdGFsX2Ftb3VudDogU3RyaW5nKHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzExXSksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuY2xpY2tlZExheWVyLm9iamVjdC5kYXRhWzFdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGlmICh0aGlzLnByb3BzLnNob3cpIHtcbiAgICAvLyAgIGlmICh0aGlzLnN0YXRlLmNsaWNrZWRMYXllciAhPT0gdGhpcy5wcm9wcy5jbGlja2VkTGF5ZXIpIHtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgY2xpY2tlZExheWVyOiB0aGlzLnByb3BzLmNsaWNrZWRMYXllcixcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgaWYgKCF0aGlzLnByb3BzLnNob3cpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB3aWR0aDogXCI2NTBweFwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjMwcHhcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIjMwcHhcIixcbiAgICAgICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyOTMyM2NcIixcbiAgICAgICAgICAgIHpJbmRleDogXCIzXCIsXG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcImZmLWNsYW4td2ViLXByb1wiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjY1MHB4XCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MDBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFyQ2hhcnRcbiAgICAgICAgICAgICAgY29uZmlnPXt7XG4gICAgICAgICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgeDogXCJQYXNzZW5nZXIgY291bnRcIixcbiAgICAgICAgICAgICAgICAgICAgeTogdGhpcy5zdGF0ZS5jaGFuZ2VkRGF0YS5wYXNzZW5nZXJfY291bnQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgeDogXCJUcmlwIGRpc3RhbmNlXCIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUuY2hhbmdlZERhdGEudHJpcF9kaXN0YW5jZSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB4OiBcImZhcmUgYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUuY2hhbmdlZERhdGEuZmFyZV9hbW91bnQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgeDogXCJUcmlwIGFtb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLnN0YXRlLmNoYW5nZWREYXRhLnRyaXBfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHg6IFwiVG90YWwgYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuc3RhdGUuY2hhbmdlZERhdGEudG90YWxfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGdyb3VwQnk6IFwiaWRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tVmlzO1xuIl19