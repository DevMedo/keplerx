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

var _nycTrips = require("./data/nyc-trips.csv");

var _nycTrips2 = _interopRequireDefault(_nycTrips);

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

var _fileDownload = require("./file-download");

var _fileDownload2 = _interopRequireDefault(_fileDownload);

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


var MAPBOX_TOKEN = process.env.MapboxAccessToken; // eslint-disable-line

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.replaceData = function () {
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
    }, _this.exportMapConfig = function () {
      // create the config object
      var mapConfig = _this.getMapConfig();
      // save it as a json file
      (0, _fileDownload2.default)(mapConfig, "kepler.gl.json");
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}

      // const myCsvData = `VendorID,tpep_pickup_datetime,tpep_dropoff_datetime,passenger_count,trip_distance,pickup_longitude,pickup_latitude,dropoff_longitude,dropoff_latitude,fare_amount,tip_amount,total_amount
      // 2,2015-01-15 16:18:03 +00:00,2015-01-15 16:50:30 +00:00,2,12.42,-73.87129211,40.77394104,-73.77693176,40.64469147,36,7.4,45.2`;
      var myCsvData = "VendorID,tpep_pickup_datetime,tpep_dropoff_datetime,passenger_count,trip_distance,pickup_longitude,pickup_latitude,dropoff_longitude,dropoff_latitude,fare_amount,tip_amount,total_amount\n    2,2015-01-15 16:18:03 +00:00,2015-01-15 16:50:30 +00:00,2,12.42,-73.87129211,40.77394104,-73.77693176,40.64469147,36,7.4,45.2";
      var data = _processors2.default.processCsvData(myCsvData);
      // Create dataset structure
      var dataset = {
        data: data,
        info: {
          // `info` property are optional, adding an `id` associate with this dataset makes it easier
          // to replace it later
          id: "my_data"
        }
      };
      console.log(dataset);
      // addDataToMap action to inject dataset into kepler.gl instance
      this.props.dispatch((0, _actions.addDataToMap)({ datasets: dataset, config: _nycConfig2.default }));
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

    // This method is used as reference to show how to export the current kepler.gl instance configuration
    // Once exported the configuration can be imported using parseSavedConfig or load method from KeplerGlSchema

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
        _react2.default.createElement(
          _button2.default,
          { onClick: this.exportMapConfig },
          "Export Config"
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.replaceData },
          "Replace Data"
        ),
        _react2.default.createElement(
          _AutoSizer2.default,
          null,
          function (_ref2) {
            var height = _ref2.height,
                width = _ref2.width;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsImVudiIsIk1hcGJveEFjY2Vzc1Rva2VuIiwiQXBwIiwicmVwbGFjZURhdGEiLCJkYXRhIiwiUHJvY2Vzc29ycyIsInByb2Nlc3NDc3ZEYXRhIiwibnljVHJpcHNTdWJzZXQiLCJkYXRhc2V0IiwiaW5mbyIsImlkIiwiY29uZmlnIiwiZ2V0TWFwQ29uZmlnIiwicHJvcHMiLCJkaXNwYXRjaCIsImRhdGFzZXRzIiwiZXhwb3J0TWFwQ29uZmlnIiwibWFwQ29uZmlnIiwibXlDc3ZEYXRhIiwiY29uc29sZSIsImxvZyIsIm55Y0NvbmZpZyIsImtlcGxlckdsIiwibWFwIiwiS2VwbGVyR2xTY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJkaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBb0JBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OytlQWxDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTs7QUFFQTs7QUFFQTs7O0FBS0EsSUFBTUEsZUFBZUMsUUFBUUMsR0FBUixDQUFZQyxpQkFBakMsQyxDQUFvRDs7SUFFOUNDLEc7Ozs7Ozs7Ozs7Ozs7O2dMQXdCSkMsVyxHQUFjLFlBQU07QUFDbEI7QUFDQSxVQUFNQyxPQUFPQyxxQkFBV0MsY0FBWCxDQUEwQkMsbUJBQTFCLENBQWI7QUFDQTtBQUNBLFVBQU1DLFVBQVU7QUFDZEosa0JBRGM7QUFFZEssY0FBTTtBQUNKQyxjQUFJO0FBQ0o7QUFDQTtBQUhJO0FBRlEsT0FBaEI7O0FBU0E7QUFDQSxVQUFNQyxTQUFTLE1BQUtDLFlBQUwsRUFBZjs7QUFFQTtBQUNBLFlBQUtDLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQiwyQkFBYSxFQUFFQyxVQUFVUCxPQUFaLEVBQXFCRyxjQUFyQixFQUFiLENBQXBCO0FBQ0QsSyxRQWdCREssZSxHQUFrQixZQUFNO0FBQ3RCO0FBQ0EsVUFBTUMsWUFBWSxNQUFLTCxZQUFMLEVBQWxCO0FBQ0E7QUFDQSxrQ0FBaUJLLFNBQWpCLEVBQTRCLGdCQUE1QjtBQUNELEs7Ozs7O3dDQTlEbUI7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFVBQU1DLDBVQUFOO0FBRUEsVUFBTWQsT0FBT0MscUJBQVdDLGNBQVgsQ0FBMEJZLFNBQTFCLENBQWI7QUFDQTtBQUNBLFVBQU1WLFVBQVU7QUFDZEosa0JBRGM7QUFFZEssY0FBTTtBQUNKO0FBQ0E7QUFDQUMsY0FBSTtBQUhBO0FBRlEsT0FBaEI7QUFRQVMsY0FBUUMsR0FBUixDQUFZWixPQUFaO0FBQ0E7QUFDQSxXQUFLSyxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsMkJBQWEsRUFBRUMsVUFBVVAsT0FBWixFQUFxQkcsUUFBUVUsbUJBQTdCLEVBQWIsQ0FBcEI7QUFDRDs7QUFFRDs7Ozs7O0FBcUJBO0FBQ0E7bUNBQ2U7QUFDYjtBQURhLFVBRUxDLFFBRkssR0FFUSxLQUFLVCxLQUZiLENBRUxTLFFBRks7QUFHYjs7QUFIYSxVQUlMQyxHQUpLLEdBSUdELFFBSkgsQ0FJTEMsR0FKSzs7QUFNYjs7QUFDQSxhQUFPQyxrQkFBZUMsZUFBZixDQUErQkYsR0FBL0IsQ0FBUDtBQUNEOztBQUVEO0FBQ0E7Ozs7NkJBUVM7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFLGlCQUFPO0FBQ0xHLHNCQUFVLFVBREw7QUFFTEMsbUJBQU8sTUFGRjtBQUdMQyxvQkFBUSxNQUhIO0FBSUxDLHVCQUFXO0FBSk47QUFEVDtBQVFFO0FBQUMsMEJBQUQ7QUFBQSxZQUFRLFNBQVMsS0FBS2IsZUFBdEI7QUFBQTtBQUFBLFNBUkY7QUFTRTtBQUFDLDBCQUFEO0FBQUEsWUFBUSxTQUFTLEtBQUtiLFdBQXRCO0FBQUE7QUFBQSxTQVRGO0FBVUU7QUFBQyw2QkFBRDtBQUFBO0FBQ0c7QUFBQSxnQkFBR3lCLE1BQUgsU0FBR0EsTUFBSDtBQUFBLGdCQUFXRCxLQUFYLFNBQVdBLEtBQVg7QUFBQSxtQkFDQyw4QkFBQyxnQkFBRDtBQUNFLG9DQUFzQjdCLFlBRHhCO0FBRUUsa0JBQUcsS0FGTDtBQUdFLHFCQUFPNkIsS0FIVDtBQUlFLHNCQUFRQztBQUpWLGNBREQ7QUFBQTtBQURIO0FBVkYsT0FERjtBQXVCRDs7OztFQXpGZUUsZ0I7O0FBNEZsQixJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFYO0FBQUEsQ0FBeEI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNuQixRQUFEO0FBQUEsU0FBZSxFQUFFQSxrQkFBRixFQUFmO0FBQUEsQ0FBeEI7O2tCQUVlLHlCQUFRaUIsZUFBUixFQUF5QkUsZUFBekIsRUFBMEMvQixHQUExQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSBcInJlYWN0LXZpcnR1YWxpemVkL2Rpc3QvY29tbW9uanMvQXV0b1NpemVyXCI7XG5pbXBvcnQgS2VwbGVyR2wgZnJvbSBcImtlcGxlci5nbFwiO1xuaW1wb3J0IG55Y1RyaXBzIGZyb20gXCIuL2RhdGEvbnljLXRyaXBzLmNzdlwiO1xuaW1wb3J0IG55Y1RyaXBzU3Vic2V0IGZyb20gXCIuL2RhdGEvbnljLXN1YnNldC5jc3ZcIjtcbmltcG9ydCBueWNDb25maWcgZnJvbSBcIi4vZGF0YS9ueWMtY29uZmlnLmpzb25cIjtcbi8vIEtlcGxlci5nbCBhY3Rpb25zXG5pbXBvcnQgeyBhZGREYXRhVG9NYXAgfSBmcm9tIFwia2VwbGVyLmdsL2FjdGlvbnNcIjtcbi8vIEtlcGxlci5nbCBEYXRhIHByb2Nlc3NpbmcgQVBJc1xuaW1wb3J0IFByb2Nlc3NvcnMgZnJvbSBcImtlcGxlci5nbC9wcm9jZXNzb3JzXCI7XG4vLyBLZXBsZXIuZ2wgU2NoZW1hIEFQSXNcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tIFwia2VwbGVyLmdsL3NjaGVtYXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vYnV0dG9uXCI7XG5pbXBvcnQgZG93bmxvYWRKc29uRmlsZSBmcm9tIFwiLi9maWxlLWRvd25sb2FkXCI7XG5cbmNvbnN0IE1BUEJPWF9UT0tFTiA9IHByb2Nlc3MuZW52Lk1hcGJveEFjY2Vzc1Rva2VuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIFVzZSBwcm9jZXNzQ3N2RGF0YSBoZWxwZXIgdG8gY29udmVydCBjc3YgZmlsZSBpbnRvIGtlcGxlci5nbCBzdHJ1Y3R1cmUge2ZpZWxkcywgcm93c31cblxuICAgIC8vIGNvbnN0IG15Q3N2RGF0YSA9IGBWZW5kb3JJRCx0cGVwX3BpY2t1cF9kYXRldGltZSx0cGVwX2Ryb3BvZmZfZGF0ZXRpbWUscGFzc2VuZ2VyX2NvdW50LHRyaXBfZGlzdGFuY2UscGlja3VwX2xvbmdpdHVkZSxwaWNrdXBfbGF0aXR1ZGUsZHJvcG9mZl9sb25naXR1ZGUsZHJvcG9mZl9sYXRpdHVkZSxmYXJlX2Ftb3VudCx0aXBfYW1vdW50LHRvdGFsX2Ftb3VudFxuICAgIC8vIDIsMjAxNS0wMS0xNSAxNjoxODowMyArMDA6MDAsMjAxNS0wMS0xNSAxNjo1MDozMCArMDA6MDAsMiwxMi40MiwtNzMuODcxMjkyMTEsNDAuNzczOTQxMDQsLTczLjc3NjkzMTc2LDQwLjY0NDY5MTQ3LDM2LDcuNCw0NS4yYDtcbiAgICBjb25zdCBteUNzdkRhdGEgPSBgVmVuZG9ySUQsdHBlcF9waWNrdXBfZGF0ZXRpbWUsdHBlcF9kcm9wb2ZmX2RhdGV0aW1lLHBhc3Nlbmdlcl9jb3VudCx0cmlwX2Rpc3RhbmNlLHBpY2t1cF9sb25naXR1ZGUscGlja3VwX2xhdGl0dWRlLGRyb3BvZmZfbG9uZ2l0dWRlLGRyb3BvZmZfbGF0aXR1ZGUsZmFyZV9hbW91bnQsdGlwX2Ftb3VudCx0b3RhbF9hbW91bnRcbiAgICAyLDIwMTUtMDEtMTUgMTY6MTg6MDMgKzAwOjAwLDIwMTUtMDEtMTUgMTY6NTA6MzAgKzAwOjAwLDIsMTIuNDIsLTczLjg3MTI5MjExLDQwLjc3Mzk0MTA0LC03My43NzY5MzE3Niw0MC42NDQ2OTE0NywzNiw3LjQsNDUuMmA7XG4gICAgY29uc3QgZGF0YSA9IFByb2Nlc3NvcnMucHJvY2Vzc0NzdkRhdGEobXlDc3ZEYXRhKTtcbiAgICAvLyBDcmVhdGUgZGF0YXNldCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBkYXRhc2V0ID0ge1xuICAgICAgZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgLy8gYGluZm9gIHByb3BlcnR5IGFyZSBvcHRpb25hbCwgYWRkaW5nIGFuIGBpZGAgYXNzb2NpYXRlIHdpdGggdGhpcyBkYXRhc2V0IG1ha2VzIGl0IGVhc2llclxuICAgICAgICAvLyB0byByZXBsYWNlIGl0IGxhdGVyXG4gICAgICAgIGlkOiBcIm15X2RhdGFcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhkYXRhc2V0KTtcbiAgICAvLyBhZGREYXRhVG9NYXAgYWN0aW9uIHRvIGluamVjdCBkYXRhc2V0IGludG8ga2VwbGVyLmdsIGluc3RhbmNlXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGREYXRhVG9NYXAoeyBkYXRhc2V0czogZGF0YXNldCwgY29uZmlnOiBueWNDb25maWcgfSkpO1xuICB9XG5cbiAgLy8gQ3JlYXRlZCB0byBzaG93IGhvdyB0byByZXBsYWNlIGRhdGFzZXQgd2l0aCBuZXcgZGF0YSBhbmQga2VlcGluZyB0aGUgc2FtZSBjb25maWd1cmF0aW9uXG4gIHJlcGxhY2VEYXRhID0gKCkgPT4ge1xuICAgIC8vIFVzZSBwcm9jZXNzQ3N2RGF0YSBoZWxwZXIgdG8gY29udmVydCBjc3YgZmlsZSBpbnRvIGtlcGxlci5nbCBzdHJ1Y3R1cmUge2ZpZWxkcywgcm93c31cbiAgICBjb25zdCBkYXRhID0gUHJvY2Vzc29ycy5wcm9jZXNzQ3N2RGF0YShueWNUcmlwc1N1YnNldCk7XG4gICAgLy8gQ3JlYXRlIGRhdGFzZXQgc3RydWN0dXJlXG4gICAgY29uc3QgZGF0YXNldCA9IHtcbiAgICAgIGRhdGEsXG4gICAgICBpbmZvOiB7XG4gICAgICAgIGlkOiBcIm15X2RhdGFcIixcbiAgICAgICAgLy8gdGhpcyBpcyB1c2VkIHRvIG1hdGNoIHRoZSBkYXRhSWQgZGVmaW5lZCBpbiBueWMtY29uZmlnLmpzb24uIEZvciBtb3JlIGRldGFpbHMgc2VlIEFQSSBkb2N1bWVudGF0aW9uLlxuICAgICAgICAvLyBJdCBpcyBwYXJhbW91bnQgdGhhdCB0aGlzIGlkIG1hdGhjZXMgeW91ciBjb25maWd1cmF0aW9uIG90aGVyd2lzZSB0aGUgY29uZmlndXJhdGlvbiBmaWxlIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIHJlYWQgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvblxuICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0TWFwQ29uZmlnKCk7XG5cbiAgICAvLyBhZGREYXRhVG9NYXAgYWN0aW9uIHRvIGluamVjdCBkYXRhc2V0IGludG8ga2VwbGVyLmdsIGluc3RhbmNlXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGREYXRhVG9NYXAoeyBkYXRhc2V0czogZGF0YXNldCwgY29uZmlnIH0pKTtcbiAgfTtcblxuICAvLyBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHJlZmVyZW5jZSB0byBzaG93IGhvdyB0byBleHBvcnQgdGhlIGN1cnJlbnQga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cbiAgLy8gT25jZSBleHBvcnRlZCB0aGUgY29uZmlndXJhdGlvbiBjYW4gYmUgaW1wb3J0ZWQgdXNpbmcgcGFyc2VTYXZlZENvbmZpZyBvciBsb2FkIG1ldGhvZCBmcm9tIEtlcGxlckdsU2NoZW1hXG4gIGdldE1hcENvbmZpZygpIHtcbiAgICAvLyByZXRyaWV2ZSBrZXBsZXIuZ2wgc3RvcmVcbiAgICBjb25zdCB7IGtlcGxlckdsIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIHJldHJpZXZlIGN1cnJlbnQga2VwbGVyLmdsIGluc3RhbmNlIHN0b3JlXG4gICAgY29uc3QgeyBtYXAgfSA9IGtlcGxlckdsO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBjb25maWcgb2JqZWN0XG4gICAgcmV0dXJuIEtlcGxlckdsU2NoZW1hLmdldENvbmZpZ1RvU2F2ZShtYXApO1xuICB9XG5cbiAgLy8gVGhpcyBtZXRob2QgaXMgdXNlZCBhcyByZWZlcmVuY2UgdG8gc2hvdyBob3cgdG8gZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlci5nbCBpbnN0YW5jZSBjb25maWd1cmF0aW9uXG4gIC8vIE9uY2UgZXhwb3J0ZWQgdGhlIGNvbmZpZ3VyYXRpb24gY2FuIGJlIGltcG9ydGVkIHVzaW5nIHBhcnNlU2F2ZWRDb25maWcgb3IgbG9hZCBtZXRob2QgZnJvbSBLZXBsZXJHbFNjaGVtYVxuICBleHBvcnRNYXBDb25maWcgPSAoKSA9PiB7XG4gICAgLy8gY3JlYXRlIHRoZSBjb25maWcgb2JqZWN0XG4gICAgY29uc3QgbWFwQ29uZmlnID0gdGhpcy5nZXRNYXBDb25maWcoKTtcbiAgICAvLyBzYXZlIGl0IGFzIGEganNvbiBmaWxlXG4gICAgZG93bmxvYWRKc29uRmlsZShtYXBDb25maWcsIFwia2VwbGVyLmdsLmpzb25cIik7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBtaW5IZWlnaHQ6IFwiNzB2aFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZXhwb3J0TWFwQ29uZmlnfT5FeHBvcnQgQ29uZmlnPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5yZXBsYWNlRGF0YX0+UmVwbGFjZSBEYXRhPC9CdXR0b24+XG4gICAgICAgIDxBdXRvU2l6ZXI+XG4gICAgICAgICAgeyh7IGhlaWdodCwgd2lkdGggfSkgPT4gKFxuICAgICAgICAgICAgPEtlcGxlckdsXG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XG4gICAgICAgICAgICAgIGlkPVwibWFwXCJcbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gc3RhdGU7XG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7IGRpc3BhdGNoIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuIl19