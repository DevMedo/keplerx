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
// const KeplerGl = injectComponents([
//   [MapPopoverFactory, CustomMapPopoverFactory],
// ]);

// KeplerGl.injectComponents([
//   //   replaceLoadDataModal(),
//   //   replaceMapControl(),
//   //   replacePanelHeader()
// ]);

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

    _this.exportMapConfig = function () {
      // create the config object
      var mapConfig = _this.getMapConfig();
      // save it as a json file
      (0, _fileDownload2.default)(mapConfig, "kepler.gl.json");
    };

    _this.state = {
      isLayerClicked: props.app.isLayerClicked,
      clickedLayer: props.app.clickedLayer
    };
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
        this.state = {
          isLayerClicked: this.props.app.isLayerClicked,
          clickedLayer: this.props.app.clickedLayer
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsImVudiIsIk1hcGJveEFjY2Vzc1Rva2VuIiwiQXBwIiwicHJvcHMiLCJyZXBsYWNlRGF0YSIsImRhdGEiLCJQcm9jZXNzb3JzIiwicHJvY2Vzc0NzdkRhdGEiLCJueWNUcmlwc1N1YnNldCIsImRhdGFzZXQiLCJpbmZvIiwiaWQiLCJjb25maWciLCJnZXRNYXBDb25maWciLCJkaXNwYXRjaCIsImRhdGFzZXRzIiwiZXhwb3J0TWFwQ29uZmlnIiwibWFwQ29uZmlnIiwic3RhdGUiLCJpc0xheWVyQ2xpY2tlZCIsImFwcCIsImNsaWNrZWRMYXllciIsIm55Y0NvbmZpZyIsImtlcGxlckdsIiwibWFwIiwiS2VwbGVyR2xTY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiZGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQW9CQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUlBOzs7Ozs7Ozs7OytlQXRDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQTs7QUFFQTs7QUFFQTs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLGVBQWVDLFFBQVFDLEdBQVIsQ0FBWUMsaUJBQWpDLEMsQ0FBb0Q7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1DLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFBQSxVQTZDbkJD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QUEsQ0FBeEI7O2tCQUVlLHlCQUFRa0IsZUFBUixFQUF5QkMsZUFBekIsRUFBMEMvQixHQUExQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCBzZXRTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQXV0b1NpemVyIGZyb20gXCJyZWFjdC12aXJ0dWFsaXplZC9kaXN0L2NvbW1vbmpzL0F1dG9TaXplclwiO1xuaW1wb3J0IEtlcGxlckdsIGZyb20gXCJrZXBsZXIuZ2xcIjtcbmltcG9ydCBueWNUcmlwcyBmcm9tIFwiLi9kYXRhL255Yy10cmlwcy5jc3ZcIjtcbmltcG9ydCBueWNUcmlwc1N1YnNldCBmcm9tIFwiLi9kYXRhL255Yy1zdWJzZXQuY3N2XCI7XG5pbXBvcnQgbnljQ29uZmlnIGZyb20gXCIuL2RhdGEvbnljLWNvbmZpZy5qc29uXCI7XG4vLyBLZXBsZXIuZ2wgYWN0aW9uc1xuaW1wb3J0IHsgYWRkRGF0YVRvTWFwIH0gZnJvbSBcImtlcGxlci5nbC9hY3Rpb25zXCI7XG4vLyBLZXBsZXIuZ2wgRGF0YSBwcm9jZXNzaW5nIEFQSXNcbmltcG9ydCBQcm9jZXNzb3JzIGZyb20gXCJrZXBsZXIuZ2wvcHJvY2Vzc29yc1wiO1xuLy8gS2VwbGVyLmdsIFNjaGVtYSBBUElzXG5pbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSBcImtlcGxlci5nbC9zY2hlbWFzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL2J1dHRvblwiO1xuaW1wb3J0IGRvd25sb2FkSnNvbkZpbGUgZnJvbSBcIi4vZmlsZS1kb3dubG9hZFwiO1xuLy8gaW1wb3J0IHsgTWFwUG9wb3ZlckZhY3RvcnksIGluamVjdENvbXBvbmVudHMgfSBmcm9tIFwia2VwbGVyLmdsL2NvbXBvbmVudHNcIjtcbi8vIGltcG9ydCBDdXN0b21NYXBQb3BvdmVyRmFjdG9yeSBmcm9tIFwiLi9jdXN0b20tbWFwLXBvcG92ZXJcIjtcbi8vIGltcG9ydCBteSBjdXN0b20gdmlzdWxhc3Rpb24gY29tcG9uZW50XG5pbXBvcnQgQ3VzdG9tVmlzIGZyb20gXCJjdXN0b20tdmlzXCI7XG5cbmNvbnN0IE1BUEJPWF9UT0tFTiA9IHByb2Nlc3MuZW52Lk1hcGJveEFjY2Vzc1Rva2VuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4vLyBjb25zdCBLZXBsZXJHbCA9IGluamVjdENvbXBvbmVudHMoW1xuLy8gICBbTWFwUG9wb3ZlckZhY3RvcnksIEN1c3RvbU1hcFBvcG92ZXJGYWN0b3J5XSxcbi8vIF0pO1xuXG4vLyBLZXBsZXJHbC5pbmplY3RDb21wb25lbnRzKFtcbi8vICAgLy8gICByZXBsYWNlTG9hZERhdGFNb2RhbCgpLFxuLy8gICAvLyAgIHJlcGxhY2VNYXBDb250cm9sKCksXG4vLyAgIC8vICAgcmVwbGFjZVBhbmVsSGVhZGVyKClcbi8vIF0pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNMYXllckNsaWNrZWQ6IHByb3BzLmFwcC5pc0xheWVyQ2xpY2tlZCxcbiAgICAgIGNsaWNrZWRMYXllcjogcHJvcHMuYXBwLmNsaWNrZWRMYXllcixcbiAgICB9O1xuICB9XG5cbiAgLy8gc3RhdGljIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gIC8vICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XG4gIC8vICAgaWYgKHRoaXMuc3RhdGUuaXNMYXllckNsaWNrZWQgIT09IHRoaXMucHJvcHMuYXBwLmlzTGF5ZXJDbGlja2VkKSB7XG4gIC8vICAgICByZXR1cm4ge1xuICAvLyAgICAgICBpc0xheWVyQ2xpY2tlZDogdGhpcy5wcm9wcy5hcHAuaXNMYXllckNsaWNrZWQsXG4gIC8vICAgICAgIGNsaWNrZWRMYXllcjogdGhpcy5wcm9wcy5hcHAubGF5ZXJDbGlja2VkLFxuICAvLyAgICAgfTtcbiAgLy8gICB9XG4gIC8vICAgcmV0dXJuIG51bGw7XG4gIC8vIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBVc2UgcHJvY2Vzc0NzdkRhdGEgaGVscGVyIHRvIGNvbnZlcnQgY3N2IGZpbGUgaW50byBrZXBsZXIuZ2wgc3RydWN0dXJlIHtmaWVsZHMsIHJvd3N9XG4gICAgY29uc3QgZGF0YSA9IFByb2Nlc3NvcnMucHJvY2Vzc0NzdkRhdGEobnljVHJpcHNTdWJzZXQpO1xuICAgIC8vIENyZWF0ZSBkYXRhc2V0IHN0cnVjdHVyZVxuICAgIGNvbnN0IGRhdGFzZXQgPSB7XG4gICAgICBkYXRhLFxuICAgICAgaW5mbzoge1xuICAgICAgICAvLyBgaW5mb2AgcHJvcGVydHkgYXJlIG9wdGlvbmFsLCBhZGRpbmcgYW4gYGlkYCBhc3NvY2lhdGUgd2l0aCB0aGlzIGRhdGFzZXQgbWFrZXMgaXQgZWFzaWVyXG4gICAgICAgIC8vIHRvIHJlcGxhY2UgaXQgbGF0ZXJcbiAgICAgICAgaWQ6IFwibXlfZGF0YVwiLFxuICAgICAgfSxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzZXQpO1xuICAgIC8vIGFkZERhdGFUb01hcCBhY3Rpb24gdG8gaW5qZWN0IGRhdGFzZXQgaW50byBrZXBsZXIuZ2wgaW5zdGFuY2VcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZERhdGFUb01hcCh7IGRhdGFzZXRzOiBkYXRhc2V0LCBjb25maWc6IG55Y0NvbmZpZyB9KSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2xpY2tlZExheWVyICE9PSB0aGlzLnByb3BzLmFwcC5jbGlja2VkTGF5ZXIpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGlzTGF5ZXJDbGlja2VkOiB0aGlzLnByb3BzLmFwcC5pc0xheWVyQ2xpY2tlZCxcbiAgICAgICAgY2xpY2tlZExheWVyOiB0aGlzLnByb3BzLmFwcC5jbGlja2VkTGF5ZXIsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICAvLyBDcmVhdGVkIHRvIHNob3cgaG93IHRvIHJlcGxhY2UgZGF0YXNldCB3aXRoIG5ldyBkYXRhIGFuZCBrZWVwaW5nIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb25cbiAgcmVwbGFjZURhdGEgPSAoKSA9PiB7XG4gICAgLy8gVXNlIHByb2Nlc3NDc3ZEYXRhIGhlbHBlciB0byBjb252ZXJ0IGNzdiBmaWxlIGludG8ga2VwbGVyLmdsIHN0cnVjdHVyZSB7ZmllbGRzLCByb3dzfVxuICAgIGNvbnN0IGRhdGEgPSBQcm9jZXNzb3JzLnByb2Nlc3NDc3ZEYXRhKG55Y1RyaXBzU3Vic2V0KTtcbiAgICAvLyBDcmVhdGUgZGF0YXNldCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBkYXRhc2V0ID0ge1xuICAgICAgZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgaWQ6IFwibXlfZGF0YVwiLFxuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbWF0Y2ggdGhlIGRhdGFJZCBkZWZpbmVkIGluIG55Yy1jb25maWcuanNvbi4gRm9yIG1vcmUgZGV0YWlscyBzZWUgQVBJIGRvY3VtZW50YXRpb24uXG4gICAgICAgIC8vIEl0IGlzIHBhcmFtb3VudCB0aGF0IHRoaXMgaWQgbWF0aGNlcyB5b3VyIGNvbmZpZ3VyYXRpb24gb3RoZXJ3aXNlIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gcmVhZCB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uXG4gICAgY29uc3QgY29uZmlnID0gdGhpcy5nZXRNYXBDb25maWcoKTtcblxuICAgIC8vIGFkZERhdGFUb01hcCBhY3Rpb24gdG8gaW5qZWN0IGRhdGFzZXQgaW50byBrZXBsZXIuZ2wgaW5zdGFuY2VcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZERhdGFUb01hcCh7IGRhdGFzZXRzOiBkYXRhc2V0LCBjb25maWcgfSkpO1xuICB9O1xuXG4gIC8vIFRoaXMgbWV0aG9kIGlzIHVzZWQgYXMgcmVmZXJlbmNlIHRvIHNob3cgaG93IHRvIGV4cG9ydCB0aGUgY3VycmVudCBrZXBsZXIuZ2wgaW5zdGFuY2UgY29uZmlndXJhdGlvblxuICAvLyBPbmNlIGV4cG9ydGVkIHRoZSBjb25maWd1cmF0aW9uIGNhbiBiZSBpbXBvcnRlZCB1c2luZyBwYXJzZVNhdmVkQ29uZmlnIG9yIGxvYWQgbWV0aG9kIGZyb20gS2VwbGVyR2xTY2hlbWFcbiAgZ2V0TWFwQ29uZmlnKCkge1xuICAgIC8vIHJldHJpZXZlIGtlcGxlci5nbCBzdG9yZVxuICAgIGNvbnN0IHsga2VwbGVyR2wgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gcmV0cmlldmUgY3VycmVudCBrZXBsZXIuZ2wgaW5zdGFuY2Ugc3RvcmVcbiAgICBjb25zdCB7IG1hcCB9ID0ga2VwbGVyR2w7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGNvbmZpZyBvYmplY3RcbiAgICByZXR1cm4gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKG1hcCk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHJlZmVyZW5jZSB0byBzaG93IGhvdyB0byBleHBvcnQgdGhlIGN1cnJlbnQga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cbiAgLy8gT25jZSBleHBvcnRlZCB0aGUgY29uZmlndXJhdGlvbiBjYW4gYmUgaW1wb3J0ZWQgdXNpbmcgcGFyc2VTYXZlZENvbmZpZyBvciBsb2FkIG1ldGhvZCBmcm9tIEtlcGxlckdsU2NoZW1hXG4gIGV4cG9ydE1hcENvbmZpZyA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGUgdGhlIGNvbmZpZyBvYmplY3RcbiAgICBjb25zdCBtYXBDb25maWcgPSB0aGlzLmdldE1hcENvbmZpZygpO1xuICAgIC8vIHNhdmUgaXQgYXMgYSBqc29uIGZpbGVcbiAgICBkb3dubG9hZEpzb25GaWxlKG1hcENvbmZpZywgXCJrZXBsZXIuZ2wuanNvblwiKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIG1pbkhlaWdodDogXCI3MHZoXCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVwbGFjZURhdGF9PlJlcGxhY2UgRGF0YTwvQnV0dG9uPiAqL31cbiAgICAgICAgPEN1c3RvbVZpc1xuICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuaXNMYXllckNsaWNrZWR9XG4gICAgICAgICAgY2xpY2tlZExheWVyPXt0aGlzLnN0YXRlLmNsaWNrZWRMYXllcn1cbiAgICAgICAgLz5cbiAgICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgICB7KHsgaGVpZ2h0LCB3aWR0aCB9KSA9PiAoXG4gICAgICAgICAgICA8S2VwbGVyR2xcbiAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e01BUEJPWF9UT0tFTn1cbiAgICAgICAgICAgICAgaWQ9XCJtYXBcIlxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0F1dG9TaXplcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiBzdGF0ZTtcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHsgZGlzcGF0Y2ggfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG4iXX0=