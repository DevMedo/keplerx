'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyConfig = exports.StyleCopyConfig = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  .copy-button {\n    position: absolute;\n    margin-top: -45px;\n    right: 28px;\n  }\n  textarea {\n    overflow-y: scroll;\n    white-space: pre-wrap;\n    width: 100%;\n    height: 100%;\n    resize: none;\n  }\n'], ['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  .copy-button {\n    position: absolute;\n    margin-top: -45px;\n    right: 28px;\n  }\n  textarea {\n    overflow-y: scroll;\n    white-space: pre-wrap;\n    width: 100%;\n    height: 100%;\n    resize: none;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('kepler.gl/components');

var _schemas = require('kepler.gl/schemas');

var _reducers = require('kepler.gl/reducers');

var _reactCopyToClipboard = require('react-copy-to-clipboard');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // Copyright (c) 2022 Uber Technologies, Inc.
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

var Params = {
  true: 'True',
  false: 'False',
  null: 'None'
};

var StyleCopyConfig = exports.StyleCopyConfig = _styledComponents2.default.div.attrs({
  className: 'copy-config'
})(_templateObject);

// convert config from string to pything dictionary
function configStringify(config) {
  // replace true => True; false => False; null => None
  var configStr = JSON.stringify(config, null, 2);
  return configStr.replace(/: ([a-z]+)/g, function (_, key) {
    return ': ' + Params[key] || ': ' + key;
  });
}

var CopyConfig = exports.CopyConfig = function CopyConfig(_ref) {
  var config = _ref.config;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  var value = configStringify(config);
  return _react2.default.createElement(
    StyleCopyConfig,
    null,
    _react2.default.createElement(
      _reactCopyToClipboard.CopyToClipboard,
      { text: value, onCopy: function onCopy() {
          return setCopy(true);
        }, className: 'copy-button' },
      _react2.default.createElement(
        _components.Button,
        { width: '100px' },
        _react2.default.createElement(_components.Icons.Clipboard, { height: '16px' }),
        copied ? 'Copied!' : 'Copy'
      )
    ),
    _react2.default.createElement(_components.TextArea, { value: value, readOnly: true, selected: true })
  );
};

function CustomSidePanelsFactory() {
  var CustomPanels = function CustomPanels(_ref2) {
    var activeSidePanel = _ref2.activeSidePanel,
        visState = _ref2.visState,
        mapState = _ref2.mapState,
        mapStyle = _ref2.mapStyle;

    var config = _schemas.KeplerGlSchema.getConfigToSave({ visState: visState, mapState: mapState, mapStyle: mapStyle });
    if (activeSidePanel === 'config') {
      return _react2.default.createElement(CopyConfig, { config: config });
    }

    return null;
  };

  CustomPanels.defaultProps = {
    panels: [{
      id: 'config',
      label: 'Config',
      iconComponent: _components.Icons.CodeAlt
    }]
  };

  var ConnectedCustomPanels = (0, _components.withState)([_reducers.visStateLens, _reducers.mapStateLens, _reducers.mapStyleLens], function (state) {
    return state;
  })(CustomPanels);

  ConnectedCustomPanels.defaultProps = {
    panels: [{
      id: 'config',
      label: 'modal.exportMap.json.configTitle',
      iconComponent: _components.Icons.CodeAlt
    }]
  };

  return ConnectedCustomPanels;
}

exports.default = CustomSidePanelsFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWctcGFuZWwuanMiXSwibmFtZXMiOlsiUGFyYW1zIiwidHJ1ZSIsImZhbHNlIiwibnVsbCIsIlN0eWxlQ29weUNvbmZpZyIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwiY2xhc3NOYW1lIiwiY29uZmlnU3RyaW5naWZ5IiwiY29uZmlnIiwiY29uZmlnU3RyIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2UiLCJfIiwia2V5IiwiQ29weUNvbmZpZyIsImNvcGllZCIsInNldENvcHkiLCJ2YWx1ZSIsIkN1c3RvbVNpZGVQYW5lbHNGYWN0b3J5IiwiQ3VzdG9tUGFuZWxzIiwiYWN0aXZlU2lkZVBhbmVsIiwidmlzU3RhdGUiLCJtYXBTdGF0ZSIsIm1hcFN0eWxlIiwiS2VwbGVyR2xTY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJkZWZhdWx0UHJvcHMiLCJwYW5lbHMiLCJpZCIsImxhYmVsIiwiaWNvbkNvbXBvbmVudCIsIkljb25zIiwiQ29kZUFsdCIsIkNvbm5lY3RlZEN1c3RvbVBhbmVscyIsInZpc1N0YXRlTGVucyIsIm1hcFN0YXRlTGVucyIsIm1hcFN0eWxlTGVucyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7a0pBMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVVBLElBQU1BLFNBQVM7QUFDYkMsUUFBTSxNQURPO0FBRWJDLFNBQU8sT0FGTTtBQUdiQyxRQUFNO0FBSE8sQ0FBZjs7QUFNTyxJQUFNQyw0Q0FBa0JDLDJCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDOUNDLGFBQVc7QUFEbUMsQ0FBakIsQ0FBbEIsaUJBQU47O0FBcUJQO0FBQ0EsU0FBU0MsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFDL0I7QUFDQSxNQUFNQyxZQUFZQyxLQUFLQyxTQUFMLENBQWVILE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsQ0FBbEI7QUFDQSxTQUFPQyxVQUFVRyxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLFVBQVNDLENBQVQsRUFBWUMsR0FBWixFQUFpQjtBQUN2RCxXQUFPLE9BQU9oQixPQUFPZ0IsR0FBUCxDQUFQLElBQXNCLE9BQU9BLEdBQXBDO0FBQ0QsR0FGTSxDQUFQO0FBR0Q7O0FBRU0sSUFBTUMsa0NBQWEsU0FBYkEsVUFBYSxPQUFjO0FBQUEsTUFBWlAsTUFBWSxRQUFaQSxNQUFZOztBQUFBLGtCQUNaLHFCQUFTLEtBQVQsQ0FEWTtBQUFBO0FBQUEsTUFDL0JRLE1BRCtCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUV0QyxNQUFNQyxRQUFRWCxnQkFBZ0JDLE1BQWhCLENBQWQ7QUFDQSxTQUNFO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUMsMkNBQUQ7QUFBQSxRQUFpQixNQUFNVSxLQUF2QixFQUE4QixRQUFRO0FBQUEsaUJBQU1ELFFBQVEsSUFBUixDQUFOO0FBQUEsU0FBdEMsRUFBMkQsV0FBVSxhQUFyRTtBQUNFO0FBQUMsMEJBQUQ7QUFBQSxVQUFRLE9BQU0sT0FBZDtBQUNFLHNDQUFDLGlCQUFELENBQU8sU0FBUCxJQUFpQixRQUFPLE1BQXhCLEdBREY7QUFFR0QsaUJBQVMsU0FBVCxHQUFxQjtBQUZ4QjtBQURGLEtBREY7QUFPRSxrQ0FBQyxvQkFBRCxJQUFVLE9BQU9FLEtBQWpCLEVBQXdCLGNBQXhCLEVBQWlDLGNBQWpDO0FBUEYsR0FERjtBQVdELENBZE07O0FBZ0JQLFNBQVNDLHVCQUFULEdBQW1DO0FBQ2pDLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxRQUFxRDtBQUFBLFFBQW5EQyxlQUFtRCxTQUFuREEsZUFBbUQ7QUFBQSxRQUFsQ0MsUUFBa0MsU0FBbENBLFFBQWtDO0FBQUEsUUFBeEJDLFFBQXdCLFNBQXhCQSxRQUF3QjtBQUFBLFFBQWRDLFFBQWMsU0FBZEEsUUFBYzs7QUFDeEUsUUFBTWhCLFNBQVNpQix3QkFBZUMsZUFBZixDQUErQixFQUFDSixrQkFBRCxFQUFXQyxrQkFBWCxFQUFxQkMsa0JBQXJCLEVBQS9CLENBQWY7QUFDQSxRQUFJSCxvQkFBb0IsUUFBeEIsRUFBa0M7QUFDaEMsYUFBTyw4QkFBQyxVQUFELElBQVksUUFBUWIsTUFBcEIsR0FBUDtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEdBUEQ7O0FBU0FZLGVBQWFPLFlBQWIsR0FBNEI7QUFDMUJDLFlBQVEsQ0FDTjtBQUNFQyxVQUFJLFFBRE47QUFFRUMsYUFBTyxRQUZUO0FBR0VDLHFCQUFlQyxrQkFBTUM7QUFIdkIsS0FETTtBQURrQixHQUE1Qjs7QUFVQSxNQUFNQyx3QkFBd0IsMkJBQzVCLENBQUNDLHNCQUFELEVBQWVDLHNCQUFmLEVBQTZCQyxzQkFBN0IsQ0FENEIsRUFFNUI7QUFBQSxXQUFTQyxLQUFUO0FBQUEsR0FGNEIsRUFHNUJsQixZQUg0QixDQUE5Qjs7QUFLQWMsd0JBQXNCUCxZQUF0QixHQUFxQztBQUNuQ0MsWUFBUSxDQUNOO0FBQ0VDLFVBQUksUUFETjtBQUVFQyxhQUFPLGtDQUZUO0FBR0VDLHFCQUFlQyxrQkFBTUM7QUFIdkIsS0FETTtBQUQyQixHQUFyQzs7QUFVQSxTQUFPQyxxQkFBUDtBQUNEOztrQkFFY2YsdUIiLCJmaWxlIjoiY29uZmlnLXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtCdXR0b24sIEljb25zLCBUZXh0QXJlYSwgd2l0aFN0YXRlfSBmcm9tICdrZXBsZXIuZ2wvY29tcG9uZW50cyc7XG5pbXBvcnQge0tlcGxlckdsU2NoZW1hfSBmcm9tICdrZXBsZXIuZ2wvc2NoZW1hcyc7XG5pbXBvcnQge3Zpc1N0YXRlTGVucywgbWFwU3RhdGVMZW5zLCBtYXBTdHlsZUxlbnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFBhcmFtcyA9IHtcbiAgdHJ1ZTogJ1RydWUnLFxuICBmYWxzZTogJ0ZhbHNlJyxcbiAgbnVsbDogJ05vbmUnXG59O1xuXG5leHBvcnQgY29uc3QgU3R5bGVDb3B5Q29uZmlnID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NvcHktY29uZmlnJ1xufSlgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5jb3B5LWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgIHJpZ2h0OiAyOHB4O1xuICB9XG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cbmA7XG5cbi8vIGNvbnZlcnQgY29uZmlnIGZyb20gc3RyaW5nIHRvIHB5dGhpbmcgZGljdGlvbmFyeVxuZnVuY3Rpb24gY29uZmlnU3RyaW5naWZ5KGNvbmZpZykge1xuICAvLyByZXBsYWNlIHRydWUgPT4gVHJ1ZTsgZmFsc2UgPT4gRmFsc2U7IG51bGwgPT4gTm9uZVxuICBjb25zdCBjb25maWdTdHIgPSBKU09OLnN0cmluZ2lmeShjb25maWcsIG51bGwsIDIpO1xuICByZXR1cm4gY29uZmlnU3RyLnJlcGxhY2UoLzogKFthLXpdKykvZywgZnVuY3Rpb24oXywga2V5KSB7XG4gICAgcmV0dXJuICc6ICcgKyBQYXJhbXNba2V5XSB8fCAnOiAnICsga2V5O1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IENvcHlDb25maWcgPSAoe2NvbmZpZ30pID0+IHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29weV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHZhbHVlID0gY29uZmlnU3RyaW5naWZ5KGNvbmZpZyk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlQ29weUNvbmZpZz5cbiAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17dmFsdWV9IG9uQ29weT17KCkgPT4gc2V0Q29weSh0cnVlKX0gY2xhc3NOYW1lPVwiY29weS1idXR0b25cIj5cbiAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjEwMHB4XCI+XG4gICAgICAgICAgPEljb25zLkNsaXBib2FyZCBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICAgICAgICB7Y29waWVkID8gJ0NvcGllZCEnIDogJ0NvcHknfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgPFRleHRBcmVhIHZhbHVlPXt2YWx1ZX0gcmVhZE9ubHkgc2VsZWN0ZWQgLz5cbiAgICA8L1N0eWxlQ29weUNvbmZpZz5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIEN1c3RvbVNpZGVQYW5lbHNGYWN0b3J5KCkge1xuICBjb25zdCBDdXN0b21QYW5lbHMgPSAoe2FjdGl2ZVNpZGVQYW5lbCwgdmlzU3RhdGUsIG1hcFN0YXRlLCBtYXBTdHlsZX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmUoe3Zpc1N0YXRlLCBtYXBTdGF0ZSwgbWFwU3R5bGV9KTtcbiAgICBpZiAoYWN0aXZlU2lkZVBhbmVsID09PSAnY29uZmlnJykge1xuICAgICAgcmV0dXJuIDxDb3B5Q29uZmlnIGNvbmZpZz17Y29uZmlnfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBDdXN0b21QYW5lbHMuZGVmYXVsdFByb3BzID0ge1xuICAgIHBhbmVsczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NvbmZpZycsXG4gICAgICAgIGxhYmVsOiAnQ29uZmlnJyxcbiAgICAgICAgaWNvbkNvbXBvbmVudDogSWNvbnMuQ29kZUFsdFxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICBjb25zdCBDb25uZWN0ZWRDdXN0b21QYW5lbHMgPSB3aXRoU3RhdGUoXG4gICAgW3Zpc1N0YXRlTGVucywgbWFwU3RhdGVMZW5zLCBtYXBTdHlsZUxlbnNdLFxuICAgIHN0YXRlID0+IHN0YXRlXG4gICkoQ3VzdG9tUGFuZWxzKTtcblxuICBDb25uZWN0ZWRDdXN0b21QYW5lbHMuZGVmYXVsdFByb3BzID0ge1xuICAgIHBhbmVsczogW1xuICAgICAge1xuICAgICAgICBpZDogJ2NvbmZpZycsXG4gICAgICAgIGxhYmVsOiAnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnVGl0bGUnLFxuICAgICAgICBpY29uQ29tcG9uZW50OiBJY29ucy5Db2RlQWx0XG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiBDb25uZWN0ZWRDdXN0b21QYW5lbHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNpZGVQYW5lbHNGYWN0b3J5O1xuIl19