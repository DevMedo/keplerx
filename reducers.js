"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Copyright (c) 2018 Uber Technologies, Inc.
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

var _redux = require("redux");

var _reduxActions = require("redux-actions");

var _actions = require("kepler.gl/actions");

var _reactRouterRedux = require("react-router-redux");

var _reducers = require("kepler.gl/reducers");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// INITIAL_APP_STATE
var initialAppState = {
  appName: "example",
  loaded: false,
  isLayerClicked: false,
  clickedLayer: null
};

// const customizedKeplerGlReducer = keplerGlReducer.initialState({
//   uiState: {
//     // hide side panel to disallow user customize the map
//     readOnly: true,

//     // customize which map control button to show
//     mapControls: {
//       visibleLayers: {
//         show: false,
//       },
//       mapLegend: {
//         show: true,
//         active: true,
//       },
//       toggle3d: {
//         show: false,
//       },
//       splitMap: {
//         show: false,
//       },
//     },
//   },
// });

var reducers = (0, _redux.combineReducers)({
  keplerGl: _reducers2.default,
  app: (0, _reduxActions.handleActions)(_defineProperty({}, _actions.ActionTypes.LAYER_CLICK, function (state, action) {
    return _extends({}, state, {
      isLayerClicked: action.payload.info ? true : false,
      clickedLayer: action.payload.info
    });
  }), initialAppState),
  routing: _reactRouterRedux.routerReducer
});

exports.default = reducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsQXBwU3RhdGUiLCJhcHBOYW1lIiwibG9hZGVkIiwiaXNMYXllckNsaWNrZWQiLCJjbGlja2VkTGF5ZXIiLCJyZWR1Y2VycyIsImtlcGxlckdsIiwia2VwbGVyR2xSZWR1Y2VyIiwiYXBwIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9DTElDSyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImluZm8iLCJyb3V0aW5nIiwicm91dGVyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tRQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsa0JBQWtCO0FBQ3RCQyxXQUFTLFNBRGE7QUFFdEJDLFVBQVEsS0FGYztBQUd0QkMsa0JBQWdCLEtBSE07QUFJdEJDLGdCQUFjO0FBSlEsQ0FBeEI7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1DLFdBQVcsNEJBQWdCO0FBQy9CQyxZQUFVQyxrQkFEcUI7QUFFL0JDLE9BQUsscURBR0FDLHFCQUFZQyxXQUhaLEVBRzBCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLHdCQUN0QkQsS0FEc0I7QUFFekJSLHNCQUFnQlMsT0FBT0MsT0FBUCxDQUFlQyxJQUFmLEdBQXNCLElBQXRCLEdBQTZCLEtBRnBCO0FBR3pCVixvQkFBY1EsT0FBT0MsT0FBUCxDQUFlQztBQUhKO0FBQUEsR0FIMUIsR0FTSGQsZUFURyxDQUYwQjtBQWEvQmUsV0FBU0M7QUFic0IsQ0FBaEIsQ0FBakI7O2tCQWdCZVgsUSIsImZpbGUiOiJyZWR1Y2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgaGFuZGxlQWN0aW9ucyB9IGZyb20gXCJyZWR1eC1hY3Rpb25zXCI7XG5pbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gXCJrZXBsZXIuZ2wvYWN0aW9uc1wiO1xuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItcmVkdXhcIjtcbmltcG9ydCBrZXBsZXJHbFJlZHVjZXIgZnJvbSBcImtlcGxlci5nbC9yZWR1Y2Vyc1wiO1xuXG4vLyBJTklUSUFMX0FQUF9TVEFURVxuY29uc3QgaW5pdGlhbEFwcFN0YXRlID0ge1xuICBhcHBOYW1lOiBcImV4YW1wbGVcIixcbiAgbG9hZGVkOiBmYWxzZSxcbiAgaXNMYXllckNsaWNrZWQ6IGZhbHNlLFxuICBjbGlja2VkTGF5ZXI6IG51bGwsXG59O1xuXG4vLyBjb25zdCBjdXN0b21pemVkS2VwbGVyR2xSZWR1Y2VyID0ga2VwbGVyR2xSZWR1Y2VyLmluaXRpYWxTdGF0ZSh7XG4vLyAgIHVpU3RhdGU6IHtcbi8vICAgICAvLyBoaWRlIHNpZGUgcGFuZWwgdG8gZGlzYWxsb3cgdXNlciBjdXN0b21pemUgdGhlIG1hcFxuLy8gICAgIHJlYWRPbmx5OiB0cnVlLFxuXG4vLyAgICAgLy8gY3VzdG9taXplIHdoaWNoIG1hcCBjb250cm9sIGJ1dHRvbiB0byBzaG93XG4vLyAgICAgbWFwQ29udHJvbHM6IHtcbi8vICAgICAgIHZpc2libGVMYXllcnM6IHtcbi8vICAgICAgICAgc2hvdzogZmFsc2UsXG4vLyAgICAgICB9LFxuLy8gICAgICAgbWFwTGVnZW5kOiB7XG4vLyAgICAgICAgIHNob3c6IHRydWUsXG4vLyAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbi8vICAgICAgIH0sXG4vLyAgICAgICB0b2dnbGUzZDoge1xuLy8gICAgICAgICBzaG93OiBmYWxzZSxcbi8vICAgICAgIH0sXG4vLyAgICAgICBzcGxpdE1hcDoge1xuLy8gICAgICAgICBzaG93OiBmYWxzZSxcbi8vICAgICAgIH0sXG4vLyAgICAgfSxcbi8vICAgfSxcbi8vIH0pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXG4gIGFwcDogaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICAvLyB5b3UgY2FuIHB1dCB5b3VyIGFwcCByZWR1Y2VyIGhlcmVcbiAgICAgIFtBY3Rpb25UeXBlcy5MQVlFUl9DTElDS106IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMYXllckNsaWNrZWQ6IGFjdGlvbi5wYXlsb2FkLmluZm8gPyB0cnVlIDogZmFsc2UsXG4gICAgICAgIGNsaWNrZWRMYXllcjogYWN0aW9uLnBheWxvYWQuaW5mbyxcbiAgICAgIH0pLFxuICAgIH0sXG4gICAgaW5pdGlhbEFwcFN0YXRlXG4gICksXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcnM7XG4iXX0=