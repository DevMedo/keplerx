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

var customizedKeplerGlReducer = _reducers2.default.initialState({
  uiState: {
    // hide side panel to disallow user customize the map
    readOnly: true,

    // customize which map control button to show
    mapControls: {
      visibleLayers: {
        show: false
      },
      mapLegend: {
        show: true,
        active: true
      },
      toggle3d: {
        show: false
      },
      splitMap: {
        show: false
      }
    }
  }
});

var reducers = (0, _redux.combineReducers)({
  keplerGl: _reducers2.default,
  app: (0, _reduxActions.handleActions)(_defineProperty({}, _actions.ActionTypes.LAYER_HOVER, function (state, action) {
    return _extends({}, state, {
      isLayerClicked: action.payload.info ? true : false,
      clickedLayer: action.payload.info
    });
  }), initialAppState),
  routing: _reactRouterRedux.routerReducer
});

exports.default = reducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJpbml0aWFsQXBwU3RhdGUiLCJhcHBOYW1lIiwibG9hZGVkIiwiaXNMYXllckNsaWNrZWQiLCJjbGlja2VkTGF5ZXIiLCJjdXN0b21pemVkS2VwbGVyR2xSZWR1Y2VyIiwia2VwbGVyR2xSZWR1Y2VyIiwiaW5pdGlhbFN0YXRlIiwidWlTdGF0ZSIsInJlYWRPbmx5IiwibWFwQ29udHJvbHMiLCJ2aXNpYmxlTGF5ZXJzIiwic2hvdyIsIm1hcExlZ2VuZCIsImFjdGl2ZSIsInRvZ2dsZTNkIiwic3BsaXRNYXAiLCJyZWR1Y2VycyIsImtlcGxlckdsIiwiYXBwIiwiQWN0aW9uVHlwZXMiLCJMQVlFUl9IT1ZFUiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImluZm8iLCJyb3V0aW5nIiwicm91dGVyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tRQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0EsSUFBTUEsa0JBQWtCO0FBQ3RCQyxXQUFTLFNBRGE7QUFFdEJDLFVBQVEsS0FGYztBQUd0QkMsa0JBQWdCLEtBSE07QUFJdEJDLGdCQUFjO0FBSlEsQ0FBeEI7O0FBT0EsSUFBTUMsNEJBQTRCQyxtQkFBZ0JDLFlBQWhCLENBQTZCO0FBQzdEQyxXQUFTO0FBQ1A7QUFDQUMsY0FBVSxJQUZIOztBQUlQO0FBQ0FDLGlCQUFhO0FBQ1hDLHFCQUFlO0FBQ2JDLGNBQU07QUFETyxPQURKO0FBSVhDLGlCQUFXO0FBQ1RELGNBQU0sSUFERztBQUVURSxnQkFBUTtBQUZDLE9BSkE7QUFRWEMsZ0JBQVU7QUFDUkgsY0FBTTtBQURFLE9BUkM7QUFXWEksZ0JBQVU7QUFDUkosY0FBTTtBQURFO0FBWEM7QUFMTjtBQURvRCxDQUE3QixDQUFsQzs7QUF3QkEsSUFBTUssV0FBVyw0QkFBZ0I7QUFDL0JDLFlBQVVaLGtCQURxQjtBQUUvQmEsT0FBSyxxREFHQUMscUJBQVlDLFdBSFosRUFHMEIsVUFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsd0JBQ3RCRCxLQURzQjtBQUV6Qm5CLHNCQUFnQm9CLE9BQU9DLE9BQVAsQ0FBZUMsSUFBZixHQUFzQixJQUF0QixHQUE2QixLQUZwQjtBQUd6QnJCLG9CQUFjbUIsT0FBT0MsT0FBUCxDQUFlQztBQUhKO0FBQUEsR0FIMUIsR0FTSHpCLGVBVEcsQ0FGMEI7QUFhL0IwQixXQUFTQztBQWJzQixDQUFoQixDQUFqQjs7a0JBZ0JlVixRIiwiZmlsZSI6InJlZHVjZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSBcInJlZHV4LWFjdGlvbnNcIjtcbmltcG9ydCB7IEFjdGlvblR5cGVzIH0gZnJvbSBcImtlcGxlci5nbC9hY3Rpb25zXCI7XG5pbXBvcnQgeyByb3V0ZXJSZWR1Y2VyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1yZWR1eFwiO1xuaW1wb3J0IGtlcGxlckdsUmVkdWNlciBmcm9tIFwia2VwbGVyLmdsL3JlZHVjZXJzXCI7XG5cbi8vIElOSVRJQUxfQVBQX1NUQVRFXG5jb25zdCBpbml0aWFsQXBwU3RhdGUgPSB7XG4gIGFwcE5hbWU6IFwiZXhhbXBsZVwiLFxuICBsb2FkZWQ6IGZhbHNlLFxuICBpc0xheWVyQ2xpY2tlZDogZmFsc2UsXG4gIGNsaWNrZWRMYXllcjogbnVsbCxcbn07XG5cbmNvbnN0IGN1c3RvbWl6ZWRLZXBsZXJHbFJlZHVjZXIgPSBrZXBsZXJHbFJlZHVjZXIuaW5pdGlhbFN0YXRlKHtcbiAgdWlTdGF0ZToge1xuICAgIC8vIGhpZGUgc2lkZSBwYW5lbCB0byBkaXNhbGxvdyB1c2VyIGN1c3RvbWl6ZSB0aGUgbWFwXG4gICAgcmVhZE9ubHk6IHRydWUsXG5cbiAgICAvLyBjdXN0b21pemUgd2hpY2ggbWFwIGNvbnRyb2wgYnV0dG9uIHRvIHNob3dcbiAgICBtYXBDb250cm9sczoge1xuICAgICAgdmlzaWJsZUxheWVyczoge1xuICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBtYXBMZWdlbmQ6IHtcbiAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHRvZ2dsZTNkOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHNwbGl0TWFwOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAgYXBwOiBoYW5kbGVBY3Rpb25zKFxuICAgIHtcbiAgICAgIC8vIHlvdSBjYW4gcHV0IHlvdXIgYXBwIHJlZHVjZXIgaGVyZVxuICAgICAgW0FjdGlvblR5cGVzLkxBWUVSX0hPVkVSXTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xheWVyQ2xpY2tlZDogYWN0aW9uLnBheWxvYWQuaW5mbyA/IHRydWUgOiBmYWxzZSxcbiAgICAgICAgY2xpY2tlZExheWVyOiBhY3Rpb24ucGF5bG9hZC5pbmZvLFxuICAgICAgfSksXG4gICAgfSxcbiAgICBpbml0aWFsQXBwU3RhdGVcbiAgKSxcbiAgcm91dGluZzogcm91dGVyUmVkdWNlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VycztcbiJdfQ==