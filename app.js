"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _AutoSizer = require("react-virtualized/dist/commonjs/AutoSizer");

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _kepler = require("kepler.gl");

var _kepler2 = _interopRequireDefault(_kepler);

var _nycSubset = require("./data/nyc-subset.csv");

var _nycSubset2 = _interopRequireDefault(_nycSubset);

var _nycConfig = require("./data/nyc-config.json");

var _nycConfig2 = _interopRequireDefault(_nycConfig);

var _actions = require("kepler.gl/actions");

var _processors = require("kepler.gl/processors");

var _processors2 = _interopRequireDefault(_processors);

var _schemas = require("kepler.gl/schemas");

var _schemas2 = _interopRequireDefault(_schemas);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

var _customVis = require("custom-vis");

var _customVis2 = _interopRequireDefault(_customVis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Copyright (c) 2018 Uber Technologies, Inc.
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

// Kepler.gl actions

// Kepler.gl Data processing APIs

// Kepler.gl Schema APIs

// import { MapPopoverFactory, injectComponents } from "kepler.gl/components";
// import CustomMapPopoverFactory from "./custom-map-popover";
// import my custom visulastion component


var MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.replaceData = function () {
      // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
      var data = _processors2.default.processCsvData(_nycSubset2.default);
      // Create dataset structure
      var dataset = {
        data: data,
        info: {
          id: "my_data"
          // this is used to match the dataId defined in nyc-config.json. For more details see API documentation.
          // It is paramount that this id mathces your configuration otherwise the configuration file will be ignored.
        }
      };

      // read the current configuration
      var config = _this.getMapConfig();

      // addDataToMap action to inject dataset into kepler.gl instance
      _this.props.dispatch((0, _actions.addDataToMap)({ datasets: dataset, config: config }));
    };

    _this.state = props;
    return _this;
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

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
      var data = _processors2.default.processCsvData(_nycSubset2.default);
      // Create dataset structure
      var dataset = {
        data: data,
        info: {
          // `info` property are optional, adding an `id` associate with this dataset makes it easier
          // to replace it later
          id: "my_data"
        }
      };
      // console.log(dataset);
      // addDataToMap action to inject dataset into kepler.gl instance
      this.props.dispatch((0, _actions.addDataToMap)({ datasets: dataset, config: _nycConfig2.default }));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.clickedLayer !== this.props.app.clickedLayer) {
        this.setState({
          isLayerClicked: this.props.app.isLayerClicked,
          clickedLayer: this.props.app.clickedLayer
        });
      } else {
        return null;
      }
    }
    // Created to show how to replace dataset with new data and keeping the same configuration

  }, {
    key: "getMapConfig",


    // This method is used as reference to show how to export the current kepler.gl instance configuration
    // Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema
    value: function getMapConfig() {
      // retrieve kepler.gl store
      var keplerGl = this.props.keplerGl;
      // retrieve current kepler.gl instance store

      var map = keplerGl.map;

      // create the config object

      return _schemas2.default.getConfigToSave(map);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        {
          style: {
            position: "absolute",
            width: "100%",
            height: "100%",
            minHeight: "70vh"
          }
        },
        _react2.default.createElement(_customVis2.default, {
          show: this.state.isLayerClicked,
          clickedLayer: this.state.clickedLayer
        }),
        _react2.default.createElement(
          _AutoSizer2.default,
          null,
          function (_ref) {
            var height = _ref.height,
                width = _ref.width;
            return _react2.default.createElement(_kepler2.default, {
              mapboxApiAccessToken: MAPBOX_TOKEN,
              id: "map",
              width: width,
              height: height
            });
          }
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
var dispatchToProps = function dispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatchToProps)(App);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsImVudiIsIk1hcGJveEFjY2Vzc1Rva2VuIiwiQXBwIiwicHJvcHMiLCJyZXBsYWNlRGF0YSIsImRhdGEiLCJQcm9jZXNzb3JzIiwicHJvY2Vzc0NzdkRhdGEiLCJueWNUcmlwc1N1YnNldCIsImRhdGFzZXQiLCJpbmZvIiwiaWQiLCJjb25maWciLCJnZXRNYXBDb25maWciLCJkaXNwYXRjaCIsImRhdGFzZXRzIiwic3RhdGUiLCJueWNDb25maWciLCJjbGlja2VkTGF5ZXIiLCJhcHAiLCJzZXRTdGF0ZSIsImlzTGF5ZXJDbGlja2VkIiwia2VwbGVyR2wiLCJtYXAiLCJLZXBsZXJHbFNjaGVtYSIsImdldENvbmZpZ1RvU2F2ZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJkaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBb0JBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7OzsrZUFwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUE7O0FBRUE7O0FBRUE7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxlQUFlQyxRQUFRQyxHQUFSLENBQVlDLGlCQUFqQyxDLENBQW9EOztJQUU5Q0MsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUFBLFVBNENuQkMsV0E1Q21CLEdBNENMLFlBQU07QUFDbEI7QUFDQSxVQUFNQyxPQUFPQyxxQkFBV0MsY0FBWCxDQUEwQkMsbUJBQTFCLENBQWI7QUFDQTtBQUNBLFVBQU1DLFVBQVU7QUFDZEosa0JBRGM7QUFFZEssY0FBTTtBQUNKQyxjQUFJO0FBQ0o7QUFDQTtBQUhJO0FBRlEsT0FBaEI7O0FBU0E7QUFDQSxVQUFNQyxTQUFTLE1BQUtDLFlBQUwsRUFBZjs7QUFFQTtBQUNBLFlBQUtWLEtBQUwsQ0FBV1csUUFBWCxDQUFvQiwyQkFBYSxFQUFFQyxVQUFVTixPQUFaLEVBQXFCRyxjQUFyQixFQUFiLENBQXBCO0FBQ0QsS0E5RGtCOztBQUVqQixVQUFLSSxLQUFMLEdBQWFiLEtBQWI7QUFGaUI7QUFHbEI7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7d0NBRW9CO0FBQ2xCO0FBQ0EsVUFBTUUsT0FBT0MscUJBQVdDLGNBQVgsQ0FBMEJDLG1CQUExQixDQUFiO0FBQ0E7QUFDQSxVQUFNQyxVQUFVO0FBQ2RKLGtCQURjO0FBRWRLLGNBQU07QUFDSjtBQUNBO0FBQ0FDLGNBQUk7QUFIQTtBQUZRLE9BQWhCO0FBUUE7QUFDQTtBQUNBLFdBQUtSLEtBQUwsQ0FBV1csUUFBWCxDQUFvQiwyQkFBYSxFQUFFQyxVQUFVTixPQUFaLEVBQXFCRyxRQUFRSyxtQkFBN0IsRUFBYixDQUFwQjtBQUNEOzs7eUNBRW9CO0FBQ25CLFVBQUksS0FBS0QsS0FBTCxDQUFXRSxZQUFYLEtBQTRCLEtBQUtmLEtBQUwsQ0FBV2dCLEdBQVgsQ0FBZUQsWUFBL0MsRUFBNkQ7QUFDM0QsYUFBS0UsUUFBTCxDQUFjO0FBQ1pDLDBCQUFnQixLQUFLbEIsS0FBTCxDQUFXZ0IsR0FBWCxDQUFlRSxjQURuQjtBQUVaSCx3QkFBYyxLQUFLZixLQUFMLENBQVdnQixHQUFYLENBQWVEO0FBRmpCLFNBQWQ7QUFJRCxPQUxELE1BS087QUFDTCxlQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0Q7Ozs7OztBQXFCQTtBQUNBO21DQUNlO0FBQ2I7QUFEYSxVQUVMSSxRQUZLLEdBRVEsS0FBS25CLEtBRmIsQ0FFTG1CLFFBRks7QUFHYjs7QUFIYSxVQUlMQyxHQUpLLEdBSUdELFFBSkgsQ0FJTEMsR0FKSzs7QUFNYjs7QUFDQSxhQUFPQyxrQkFBZUMsZUFBZixDQUErQkYsR0FBL0IsQ0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xHLHNCQUFVLFVBREw7QUFFTEMsbUJBQU8sTUFGRjtBQUdMQyxvQkFBUSxNQUhIO0FBSUxDLHVCQUFXO0FBSk47QUFEVDtBQVFFLHNDQUFDLG1CQUFEO0FBQ0UsZ0JBQU0sS0FBS2IsS0FBTCxDQUFXSyxjQURuQjtBQUVFLHdCQUFjLEtBQUtMLEtBQUwsQ0FBV0U7QUFGM0IsVUFSRjtBQVlFO0FBQUMsNkJBQUQ7QUFBQTtBQUNHO0FBQUEsZ0JBQUdVLE1BQUgsUUFBR0EsTUFBSDtBQUFBLGdCQUFXRCxLQUFYLFFBQVdBLEtBQVg7QUFBQSxtQkFDQyw4QkFBQyxnQkFBRDtBQUNFLG9DQUFzQjdCLFlBRHhCO0FBRUUsa0JBQUcsS0FGTDtBQUdFLHFCQUFPNkIsS0FIVDtBQUlFLHNCQUFRQztBQUpWLGNBREQ7QUFBQTtBQURIO0FBWkYsT0FERjtBQXlCRDs7OztFQXZHZUUsZ0I7O0FBMEdsQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNmLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FBeEI7QUFDQSxJQUFNZ0Isa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDbEIsUUFBRDtBQUFBLFNBQWUsRUFBRUEsa0JBQUYsRUFBZjtBQUFBLENBQXhCOztrQkFFZSx5QkFBUWlCLGVBQVIsRUFBeUJDLGVBQXpCLEVBQTBDOUIsR0FBMUMsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTggVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgc2V0U3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEF1dG9TaXplciBmcm9tIFwicmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXJcIjtcbmltcG9ydCBLZXBsZXJHbCBmcm9tIFwia2VwbGVyLmdsXCI7XG5pbXBvcnQgbnljVHJpcHNTdWJzZXQgZnJvbSBcIi4vZGF0YS9ueWMtc3Vic2V0LmNzdlwiO1xuaW1wb3J0IG55Y0NvbmZpZyBmcm9tIFwiLi9kYXRhL255Yy1jb25maWcuanNvblwiO1xuLy8gS2VwbGVyLmdsIGFjdGlvbnNcbmltcG9ydCB7IGFkZERhdGFUb01hcCB9IGZyb20gXCJrZXBsZXIuZ2wvYWN0aW9uc1wiO1xuLy8gS2VwbGVyLmdsIERhdGEgcHJvY2Vzc2luZyBBUElzXG5pbXBvcnQgUHJvY2Vzc29ycyBmcm9tIFwia2VwbGVyLmdsL3Byb2Nlc3NvcnNcIjtcbi8vIEtlcGxlci5nbCBTY2hlbWEgQVBJc1xuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gXCJrZXBsZXIuZ2wvc2NoZW1hc1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcbi8vIGltcG9ydCB7IE1hcFBvcG92ZXJGYWN0b3J5LCBpbmplY3RDb21wb25lbnRzIH0gZnJvbSBcImtlcGxlci5nbC9jb21wb25lbnRzXCI7XG4vLyBpbXBvcnQgQ3VzdG9tTWFwUG9wb3ZlckZhY3RvcnkgZnJvbSBcIi4vY3VzdG9tLW1hcC1wb3BvdmVyXCI7XG4vLyBpbXBvcnQgbXkgY3VzdG9tIHZpc3VsYXN0aW9uIGNvbXBvbmVudFxuaW1wb3J0IEN1c3RvbVZpcyBmcm9tIFwiY3VzdG9tLXZpc1wiO1xuXG5jb25zdCBNQVBCT1hfVE9LRU4gPSBwcm9jZXNzLmVudi5NYXBib3hBY2Nlc3NUb2tlbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0gcHJvcHM7XG4gIH1cblxuICAvLyBzdGF0aWMgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcygpIHtcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcbiAgLy8gICBpZiAodGhpcy5zdGF0ZS5pc0xheWVyQ2xpY2tlZCAhPT0gdGhpcy5wcm9wcy5hcHAuaXNMYXllckNsaWNrZWQpIHtcbiAgLy8gICAgIHJldHVybiB7XG4gIC8vICAgICAgIGlzTGF5ZXJDbGlja2VkOiB0aGlzLnByb3BzLmFwcC5pc0xheWVyQ2xpY2tlZCxcbiAgLy8gICAgICAgY2xpY2tlZExheWVyOiB0aGlzLnByb3BzLmFwcC5sYXllckNsaWNrZWQsXG4gIC8vICAgICB9O1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4gbnVsbDtcbiAgLy8gfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBwcm9jZXNzQ3N2RGF0YSBoZWxwZXIgdG8gY29udmVydCBjc3YgZmlsZSBpbnRvIGtlcGxlci5nbCBzdHJ1Y3R1cmUge2ZpZWxkcywgcm93c31cbiAgICBjb25zdCBkYXRhID0gUHJvY2Vzc29ycy5wcm9jZXNzQ3N2RGF0YShueWNUcmlwc1N1YnNldCk7XG4gICAgLy8gQ3JlYXRlIGRhdGFzZXQgc3RydWN0dXJlXG4gICAgY29uc3QgZGF0YXNldCA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBpbmZvOiB7XG4gICAgICAgIC8vIGBpbmZvYCBwcm9wZXJ0eSBhcmUgb3B0aW9uYWwsIGFkZGluZyBhbiBgaWRgIGFzc29jaWF0ZSB3aXRoIHRoaXMgZGF0YXNldCBtYWtlcyBpdCBlYXNpZXJcbiAgICAgICAgLy8gdG8gcmVwbGFjZSBpdCBsYXRlclxuICAgICAgICBpZDogXCJteV9kYXRhXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coZGF0YXNldCk7XG4gICAgLy8gYWRkRGF0YVRvTWFwIGFjdGlvbiB0byBpbmplY3QgZGF0YXNldCBpbnRvIGtlcGxlci5nbCBpbnN0YW5jZVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHsgZGF0YXNldHM6IGRhdGFzZXQsIGNvbmZpZzogbnljQ29uZmlnIH0pKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5jbGlja2VkTGF5ZXIgIT09IHRoaXMucHJvcHMuYXBwLmNsaWNrZWRMYXllcikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTGF5ZXJDbGlja2VkOiB0aGlzLnByb3BzLmFwcC5pc0xheWVyQ2xpY2tlZCxcbiAgICAgICAgY2xpY2tlZExheWVyOiB0aGlzLnByb3BzLmFwcC5jbGlja2VkTGF5ZXIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG4gIC8vIENyZWF0ZWQgdG8gc2hvdyBob3cgdG8gcmVwbGFjZSBkYXRhc2V0IHdpdGggbmV3IGRhdGEgYW5kIGtlZXBpbmcgdGhlIHNhbWUgY29uZmlndXJhdGlvblxuICByZXBsYWNlRGF0YSA9ICgpID0+IHtcbiAgICAvLyBVc2UgcHJvY2Vzc0NzdkRhdGEgaGVscGVyIHRvIGNvbnZlcnQgY3N2IGZpbGUgaW50byBrZXBsZXIuZ2wgc3RydWN0dXJlIHtmaWVsZHMsIHJvd3N9XG4gICAgY29uc3QgZGF0YSA9IFByb2Nlc3NvcnMucHJvY2Vzc0NzdkRhdGEobnljVHJpcHNTdWJzZXQpO1xuICAgIC8vIENyZWF0ZSBkYXRhc2V0IHN0cnVjdHVyZVxuICAgIGNvbnN0IGRhdGFzZXQgPSB7XG4gICAgICBkYXRhLFxuICAgICAgaW5mbzoge1xuICAgICAgICBpZDogXCJteV9kYXRhXCIsXG4gICAgICAgIC8vIHRoaXMgaXMgdXNlZCB0byBtYXRjaCB0aGUgZGF0YUlkIGRlZmluZWQgaW4gbnljLWNvbmZpZy5qc29uLiBGb3IgbW9yZSBkZXRhaWxzIHNlZSBBUEkgZG9jdW1lbnRhdGlvbi5cbiAgICAgICAgLy8gSXQgaXMgcGFyYW1vdW50IHRoYXQgdGhpcyBpZCBtYXRoY2VzIHlvdXIgY29uZmlndXJhdGlvbiBvdGhlcndpc2UgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSB3aWxsIGJlIGlnbm9yZWQuXG4gICAgICB9LFxuICAgIH07XG5cbiAgICAvLyByZWFkIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE1hcENvbmZpZygpO1xuXG4gICAgLy8gYWRkRGF0YVRvTWFwIGFjdGlvbiB0byBpbmplY3QgZGF0YXNldCBpbnRvIGtlcGxlci5nbCBpbnN0YW5jZVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHsgZGF0YXNldHM6IGRhdGFzZXQsIGNvbmZpZyB9KSk7XG4gIH07XG5cbiAgLy8gVGhpcyBtZXRob2QgaXMgdXNlZCBhcyByZWZlcmVuY2UgdG8gc2hvdyBob3cgdG8gZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uXG4gIC8vIE9uY2UgZXhwb3J0ZWQgdGhlIGNvbmZpZ3VyYXRpb24gY2FuIGJlIGltcG9ydGVkIHVzaW5nIHBhcnNlU2F2ZWRDb25maWcgb3IgbG9hZCBtZXRob2QgZnJvbSBLZXBsZXJHbFNjaGVtYVxuICBnZXRNYXBDb25maWcoKSB7XG4gICAgLy8gcmV0cmlldmUga2VwbGVyLmdsIHN0b3JlXG4gICAgY29uc3QgeyBrZXBsZXJHbCB9ID0gdGhpcy5wcm9wcztcbiAgICAvLyByZXRyaWV2ZSBjdXJyZW50IGtlcGxlci5nbCBpbnN0YW5jZSBzdG9yZVxuICAgIGNvbnN0IHsgbWFwIH0gPSBrZXBsZXJHbDtcblxuICAgIC8vIGNyZWF0ZSB0aGUgY29uZmlnIG9iamVjdFxuICAgIHJldHVybiBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmUobWFwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgbWluSGVpZ2h0OiBcIjcwdmhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEN1c3RvbVZpc1xuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuaXNMYXllckNsaWNrZWR9XG4gICAgICAgICAgY2xpY2tlZExheWVyPXt0aGlzLnN0YXRlLmNsaWNrZWRMYXllcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgICB7KHsgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gICAgICAgICAgICA8S2VwbGVyR2xcbiAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cbiAgICAgICAgICAgICAgaWQ9XCJtYXBcIlxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiBzdGF0ZTtcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgZGlzcGF0Y2ggfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG4iXX0=