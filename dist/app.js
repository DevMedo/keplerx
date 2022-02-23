'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _AutoSizer = require('react-virtualized/dist/commonjs/AutoSizer');

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _kepler = require('kepler.gl');

var _kepler2 = _interopRequireDefault(_kepler);

var _nycTrips = require('./data/nyc-trips.csv');

var _nycTrips2 = _interopRequireDefault(_nycTrips);

var _nycSubset = require('./data/nyc-subset.csv');

var _nycSubset2 = _interopRequireDefault(_nycSubset);

var _nycConfig = require('./data/nyc-config.json');

var _nycConfig2 = _interopRequireDefault(_nycConfig);

var _actions = require('kepler.gl/actions');

var _processors = require('kepler.gl/processors');

var _processors2 = _interopRequireDefault(_processors);

var _schemas = require('kepler.gl/schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _fileDownload = require('./file-download');

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
          id: 'my_data'
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
      (0, _fileDownload2.default)(mapConfig, 'kepler.gl.json');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Use processCsvData helper to convert csv file into kepler.gl structure {fields, rows}
      var data = _processors2.default.processCsvData(_nycTrips2.default);
      // Create dataset structure
      var dataset = {
        data: data,
        info: {
          // `info` property are optional, adding an `id` associate with this dataset makes it easier
          // to replace it later
          id: 'my_data'
        }
      };
      // addDataToMap action to inject dataset into kepler.gl instance
      this.props.dispatch((0, _actions.addDataToMap)({ datasets: dataset, config: _nycConfig2.default }));
    }

    // Created to show how to replace dataset with new data and keeping the same configuration

  }, {
    key: 'getMapConfig',


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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { position: 'absolute', width: '100%', height: '100%', minHeight: '70vh' } },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.exportMapConfig },
          'Export Config'
        ),
        _react2.default.createElement(
          _button2.default,
          { onClick: this.replaceData },
          'Replace Data'
        ),
        _react2.default.createElement(
          _AutoSizer2.default,
          null,
          function (_ref2) {
            var height = _ref2.height,
                width = _ref2.width;
            return _react2.default.createElement(_kepler2.default, {
              mapboxApiAccessToken: MAPBOX_TOKEN,
              id: 'map',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiTUFQQk9YX1RPS0VOIiwicHJvY2VzcyIsImVudiIsIk1hcGJveEFjY2Vzc1Rva2VuIiwiQXBwIiwicmVwbGFjZURhdGEiLCJkYXRhIiwiUHJvY2Vzc29ycyIsInByb2Nlc3NDc3ZEYXRhIiwibnljVHJpcHNTdWJzZXQiLCJkYXRhc2V0IiwiaW5mbyIsImlkIiwiY29uZmlnIiwiZ2V0TWFwQ29uZmlnIiwicHJvcHMiLCJkaXNwYXRjaCIsImRhdGFzZXRzIiwiZXhwb3J0TWFwQ29uZmlnIiwibWFwQ29uZmlnIiwibnljVHJpcHMiLCJueWNDb25maWciLCJrZXBsZXJHbCIsIm1hcCIsIktlcGxlckdsU2NoZW1hIiwiZ2V0Q29uZmlnVG9TYXZlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm1pbkhlaWdodCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiZGlzcGF0Y2hUb1Byb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQW9CQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBU0E7O0FBRUE7O0FBRUE7OztBQUtBLElBQU1BLGVBQWVDLFFBQVFDLEdBQVIsQ0FBWUMsaUJBQWpDLEMsQ0FBb0Q7O0lBRTlDQyxHOzs7Ozs7Ozs7Ozs7OztnTEFvQkpDLFcsR0FBYyxZQUFNO0FBQ2xCO0FBQ0EsVUFBTUMsT0FBT0MscUJBQVdDLGNBQVgsQ0FBMEJDLG1CQUExQixDQUFiO0FBQ0E7QUFDQSxVQUFNQyxVQUFVO0FBQ2RKLGtCQURjO0FBRWRLLGNBQU07QUFDSkMsY0FBSTtBQUNKO0FBQ0E7QUFISTtBQUZRLE9BQWhCOztBQVNBO0FBQ0EsVUFBTUMsU0FBUyxNQUFLQyxZQUFMLEVBQWY7O0FBRUE7QUFDQSxZQUFLQyxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsMkJBQWEsRUFBQ0MsVUFBVVAsT0FBWCxFQUFvQkcsY0FBcEIsRUFBYixDQUFwQjtBQUNELEssUUFpQkRLLGUsR0FBa0IsWUFBTTtBQUN0QjtBQUNBLFVBQU1DLFlBQVksTUFBS0wsWUFBTCxFQUFsQjtBQUNBO0FBQ0Esa0NBQWlCSyxTQUFqQixFQUE0QixnQkFBNUI7QUFDRCxLOzs7Ozt3Q0F6RG1CO0FBQ2xCO0FBQ0EsVUFBTWIsT0FBT0MscUJBQVdDLGNBQVgsQ0FBMEJZLGtCQUExQixDQUFiO0FBQ0E7QUFDQSxVQUFNVixVQUFVO0FBQ2RKLGtCQURjO0FBRWRLLGNBQU07QUFDSjtBQUNBO0FBQ0FDLGNBQUk7QUFIQTtBQUZRLE9BQWhCO0FBUUE7QUFDQSxXQUFLRyxLQUFMLENBQVdDLFFBQVgsQ0FBb0IsMkJBQWEsRUFBQ0MsVUFBVVAsT0FBWCxFQUFvQkcsUUFBUVEsbUJBQTVCLEVBQWIsQ0FBcEI7QUFDSDs7QUFFRDs7Ozs7O0FBc0JJO0FBQ0Y7bUNBQ2U7QUFDYjtBQURhLFVBRU5DLFFBRk0sR0FFTSxLQUFLUCxLQUZYLENBRU5PLFFBRk07QUFHYjs7QUFIYSxVQUlOQyxHQUpNLEdBSUNELFFBSkQsQ0FJTkMsR0FKTTs7QUFNYjs7QUFDQSxhQUFPQyxrQkFBZUMsZUFBZixDQUErQkYsR0FBL0IsQ0FBUDtBQUNEOztBQUVEO0FBQ0E7Ozs7NkJBUVM7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sRUFBQ0csVUFBVSxVQUFYLEVBQXVCQyxPQUFPLE1BQTlCLEVBQXNDQyxRQUFRLE1BQTlDLEVBQXNEQyxXQUFXLE1BQWpFLEVBQVo7QUFDQTtBQUFDLDBCQUFEO0FBQUEsWUFBUSxTQUFTLEtBQUtYLGVBQXRCO0FBQUE7QUFBQSxTQURBO0FBRUE7QUFBQywwQkFBRDtBQUFBLFlBQVEsU0FBUyxLQUFLYixXQUF0QjtBQUFBO0FBQUEsU0FGQTtBQUdFO0FBQUMsNkJBQUQ7QUFBQTtBQUNHO0FBQUEsZ0JBQUV1QixNQUFGLFNBQUVBLE1BQUY7QUFBQSxnQkFBVUQsS0FBVixTQUFVQSxLQUFWO0FBQUEsbUJBQ0MsOEJBQUMsZ0JBQUQ7QUFDRSxvQ0FBc0IzQixZQUR4QjtBQUVFLGtCQUFHLEtBRkw7QUFHRSxxQkFBTzJCLEtBSFQ7QUFJRSxzQkFBUUM7QUFKVixjQUREO0FBQUE7QUFESDtBQUhGLE9BREY7QUFnQkQ7Ozs7RUEvRWVFLGdCOztBQWtGbEIsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVNDLEtBQVQ7QUFBQSxDQUF4QjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFhLEVBQUNqQixrQkFBRCxFQUFiO0FBQUEsQ0FBeEI7O2tCQUVlLHlCQUFRZSxlQUFSLEVBQXlCRSxlQUF6QixFQUEwQzdCLEdBQTFDLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBBdXRvU2l6ZXIgZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQvZGlzdC9jb21tb25qcy9BdXRvU2l6ZXInO1xuaW1wb3J0IEtlcGxlckdsIGZyb20gJ2tlcGxlci5nbCc7XG5pbXBvcnQgbnljVHJpcHMgZnJvbSAnLi9kYXRhL255Yy10cmlwcy5jc3YnO1xuaW1wb3J0IG55Y1RyaXBzU3Vic2V0IGZyb20gJy4vZGF0YS9ueWMtc3Vic2V0LmNzdic7XG5pbXBvcnQgbnljQ29uZmlnIGZyb20gJy4vZGF0YS9ueWMtY29uZmlnLmpzb24nO1xuLy8gS2VwbGVyLmdsIGFjdGlvbnNcbmltcG9ydCB7YWRkRGF0YVRvTWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4vLyBLZXBsZXIuZ2wgRGF0YSBwcm9jZXNzaW5nIEFQSXNcbmltcG9ydCBQcm9jZXNzb3JzIGZyb20gJ2tlcGxlci5nbC9wcm9jZXNzb3JzJztcbi8vIEtlcGxlci5nbCBTY2hlbWEgQVBJc1xuaW1wb3J0IEtlcGxlckdsU2NoZW1hIGZyb20gJ2tlcGxlci5nbC9zY2hlbWFzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IGRvd25sb2FkSnNvbkZpbGUgZnJvbSBcIi4vZmlsZS1kb3dubG9hZFwiO1xuXG5jb25zdCBNQVBCT1hfVE9LRU4gPSBwcm9jZXNzLmVudi5NYXBib3hBY2Nlc3NUb2tlbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gVXNlIHByb2Nlc3NDc3ZEYXRhIGhlbHBlciB0byBjb252ZXJ0IGNzdiBmaWxlIGludG8ga2VwbGVyLmdsIHN0cnVjdHVyZSB7ZmllbGRzLCByb3dzfVxuICAgIGNvbnN0IGRhdGEgPSBQcm9jZXNzb3JzLnByb2Nlc3NDc3ZEYXRhKG55Y1RyaXBzKTtcbiAgICAvLyBDcmVhdGUgZGF0YXNldCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBkYXRhc2V0ID0ge1xuICAgICAgZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgLy8gYGluZm9gIHByb3BlcnR5IGFyZSBvcHRpb25hbCwgYWRkaW5nIGFuIGBpZGAgYXNzb2NpYXRlIHdpdGggdGhpcyBkYXRhc2V0IG1ha2VzIGl0IGVhc2llclxuICAgICAgICAvLyB0byByZXBsYWNlIGl0IGxhdGVyXG4gICAgICAgIGlkOiAnbXlfZGF0YSdcbiAgICAgIH1cbiAgICB9O1xuICAgIC8vIGFkZERhdGFUb01hcCBhY3Rpb24gdG8gaW5qZWN0IGRhdGFzZXQgaW50byBrZXBsZXIuZ2wgaW5zdGFuY2VcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZERhdGFUb01hcCh7ZGF0YXNldHM6IGRhdGFzZXQsIGNvbmZpZzogbnljQ29uZmlnfSkpO1xufVxuXG4vLyBDcmVhdGVkIHRvIHNob3cgaG93IHRvIHJlcGxhY2UgZGF0YXNldCB3aXRoIG5ldyBkYXRhIGFuZCBrZWVwaW5nIHRoZSBzYW1lIGNvbmZpZ3VyYXRpb25cbiAgcmVwbGFjZURhdGEgPSAoKSA9PiB7XG4gICAgLy8gVXNlIHByb2Nlc3NDc3ZEYXRhIGhlbHBlciB0byBjb252ZXJ0IGNzdiBmaWxlIGludG8ga2VwbGVyLmdsIHN0cnVjdHVyZSB7ZmllbGRzLCByb3dzfVxuICAgIGNvbnN0IGRhdGEgPSBQcm9jZXNzb3JzLnByb2Nlc3NDc3ZEYXRhKG55Y1RyaXBzU3Vic2V0KTtcbiAgICAvLyBDcmVhdGUgZGF0YXNldCBzdHJ1Y3R1cmVcbiAgICBjb25zdCBkYXRhc2V0ID0ge1xuICAgICAgZGF0YSxcbiAgICAgIGluZm86IHtcbiAgICAgICAgaWQ6ICdteV9kYXRhJ1xuICAgICAgICAvLyB0aGlzIGlzIHVzZWQgdG8gbWF0Y2ggdGhlIGRhdGFJZCBkZWZpbmVkIGluIG55Yy1jb25maWcuanNvbi4gRm9yIG1vcmUgZGV0YWlscyBzZWUgQVBJIGRvY3VtZW50YXRpb24uXG4gICAgICAgIC8vIEl0IGlzIHBhcmFtb3VudCB0aGF0IHRoaXMgaWQgbWF0aGNlcyB5b3VyIGNvbmZpZ3VyYXRpb24gb3RoZXJ3aXNlIHRoZSBjb25maWd1cmF0aW9uIGZpbGUgd2lsbCBiZSBpZ25vcmVkLlxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyByZWFkIHRoZSBjdXJyZW50IGNvbmZpZ3VyYXRpb25cbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmdldE1hcENvbmZpZygpO1xuXG4gICAgLy8gYWRkRGF0YVRvTWFwIGFjdGlvbiB0byBpbmplY3QgZGF0YXNldCBpbnRvIGtlcGxlci5nbCBpbnN0YW5jZVxuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkRGF0YVRvTWFwKHtkYXRhc2V0czogZGF0YXNldCwgY29uZmlnfSkpO1xuICB9O1xuXG5cbiAgICAvLyBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHJlZmVyZW5jZSB0byBzaG93IGhvdyB0byBleHBvcnQgdGhlIGN1cnJlbnQga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cbiAgLy8gT25jZSBleHBvcnRlZCB0aGUgY29uZmlndXJhdGlvbiBjYW4gYmUgaW1wb3J0ZWQgdXNpbmcgcGFyc2VTYXZlZENvbmZpZyBvciBsb2FkIG1ldGhvZCBmcm9tIEtlcGxlckdsU2NoZW1hXG4gIGdldE1hcENvbmZpZygpIHtcbiAgICAvLyByZXRyaWV2ZSBrZXBsZXIuZ2wgc3RvcmVcbiAgICBjb25zdCB7a2VwbGVyR2x9ID0gdGhpcy5wcm9wcztcbiAgICAvLyByZXRyaWV2ZSBjdXJyZW50IGtlcGxlci5nbCBpbnN0YW5jZSBzdG9yZVxuICAgIGNvbnN0IHttYXB9ID0ga2VwbGVyR2w7XG5cbiAgICAvLyBjcmVhdGUgdGhlIGNvbmZpZyBvYmplY3RcbiAgICByZXR1cm4gS2VwbGVyR2xTY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKG1hcCk7XG4gIH1cblxuICAvLyBUaGlzIG1ldGhvZCBpcyB1c2VkIGFzIHJlZmVyZW5jZSB0byBzaG93IGhvdyB0byBleHBvcnQgdGhlIGN1cnJlbnQga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb25cbiAgLy8gT25jZSBleHBvcnRlZCB0aGUgY29uZmlndXJhdGlvbiBjYW4gYmUgaW1wb3J0ZWQgdXNpbmcgcGFyc2VTYXZlZENvbmZpZyBvciBsb2FkIG1ldGhvZCBmcm9tIEtlcGxlckdsU2NoZW1hXG4gIGV4cG9ydE1hcENvbmZpZyA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGUgdGhlIGNvbmZpZyBvYmplY3RcbiAgICBjb25zdCBtYXBDb25maWcgPSB0aGlzLmdldE1hcENvbmZpZygpO1xuICAgIC8vIHNhdmUgaXQgYXMgYSBqc29uIGZpbGVcbiAgICBkb3dubG9hZEpzb25GaWxlKG1hcENvbmZpZywgJ2tlcGxlci5nbC5qc29uJyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBtaW5IZWlnaHQ6ICc3MHZoJ319PlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmV4cG9ydE1hcENvbmZpZ30+RXhwb3J0IENvbmZpZzwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlcGxhY2VEYXRhfT5SZXBsYWNlIERhdGE8L0J1dHRvbj5cbiAgICAgICAgPEF1dG9TaXplcj5cbiAgICAgICAgICB7KHtoZWlnaHQsIHdpZHRofSkgPT4gKFxuICAgICAgICAgICAgPEtlcGxlckdsXG4gICAgICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuPXtNQVBCT1hfVE9LRU59XG4gICAgICAgICAgICAgIGlkPVwibWFwXCJcbiAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9BdXRvU2l6ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHN0YXRlO1xuY29uc3QgZGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtkaXNwYXRjaH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuIl19