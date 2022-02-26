'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Copyright (c) 2022 Uber Technologies, Inc.
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

exports.CustomPanelHeaderFactory = CustomPanelHeaderFactory;

var _components = require('kepler.gl/components');

var _actions = require('kepler.gl/actions');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEPLER_DOC = 'https://docs.kepler.gl/docs/keplergl-jupyter';

function CustomPanelHeaderFactory() {
  var PanelHeader = (0, _components.PanelHeaderFactory)();

  var actionItems = function actionItems(props) {
    return [{
      id: 'docs',
      iconComponent: _components.Icons.Docs,
      href: KEPLER_DOC,
      blank: true,
      tooltip: 'tooltip.documentation',
      onClick: function onClick() {}
    }];
  };

  var JupyterPanelHeader = function JupyterPanelHeader(props) {
    return _react2.default.createElement(
      _reactIntl.IntlProvider,
      { locale: 'en', messages: { 'tooltip.documentation': 'Documentation' } },
      _react2.default.createElement(PanelHeader, _extends({}, props, { actionItems: actionItems(props) }))
    );
  };
  return (0, _components.withState)([], function (state) {
    return state;
  }, {
    toggleModal: _actions.toggleModal
  })(JupyterPanelHeader);
}

exports.default = CustomPanelHeaderFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYW5lbC1oZWFkZXIuanMiXSwibmFtZXMiOlsiQ3VzdG9tUGFuZWxIZWFkZXJGYWN0b3J5IiwiS0VQTEVSX0RPQyIsIlBhbmVsSGVhZGVyIiwiYWN0aW9uSXRlbXMiLCJpZCIsImljb25Db21wb25lbnQiLCJJY29ucyIsIkRvY3MiLCJocmVmIiwiYmxhbmsiLCJ0b29sdGlwIiwib25DbGljayIsIkp1cHl0ZXJQYW5lbEhlYWRlciIsInByb3BzIiwic3RhdGUiLCJ0b2dnbGVNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tRQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztRQVNnQkEsd0IsR0FBQUEsd0I7O0FBUGhCOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxhQUFhLDhDQUFuQjs7QUFFTyxTQUFTRCx3QkFBVCxHQUFvQztBQUN6QyxNQUFNRSxjQUFjLHFDQUFwQjs7QUFFQSxNQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxXQUFTLENBQzNCO0FBQ0VDLFVBQUksTUFETjtBQUVFQyxxQkFBZUMsa0JBQU1DLElBRnZCO0FBR0VDLFlBQU1QLFVBSFI7QUFJRVEsYUFBTyxJQUpUO0FBS0VDLGVBQVMsdUJBTFg7QUFNRUMsZUFBUyxtQkFBTSxDQUFFO0FBTm5CLEtBRDJCLENBQVQ7QUFBQSxHQUFwQjs7QUFXQSxNQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFdBQ3pCO0FBQUMsNkJBQUQ7QUFBQSxRQUFjLFFBQU8sSUFBckIsRUFBMEIsVUFBVSxFQUFDLHlCQUF5QixlQUExQixFQUFwQztBQUNFLG9DQUFDLFdBQUQsZUFBaUJDLEtBQWpCLElBQXdCLGFBQWFWLFlBQVlVLEtBQVosQ0FBckM7QUFERixLQUR5QjtBQUFBLEdBQTNCO0FBS0EsU0FBTywyQkFBVSxFQUFWLEVBQWM7QUFBQSxXQUFTQyxLQUFUO0FBQUEsR0FBZCxFQUE4QjtBQUNuQ0M7QUFEbUMsR0FBOUIsRUFFSkgsa0JBRkksQ0FBUDtBQUdEOztrQkFFY1osd0IiLCJmaWxlIjoicGFuZWwtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIyIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtQYW5lbEhlYWRlckZhY3RvcnksIEljb25zLCB3aXRoU3RhdGV9IGZyb20gJ2tlcGxlci5nbC9jb21wb25lbnRzJztcbmltcG9ydCB7dG9nZ2xlTW9kYWx9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ludGxQcm92aWRlcn0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IEtFUExFUl9ET0MgPSAnaHR0cHM6Ly9kb2NzLmtlcGxlci5nbC9kb2NzL2tlcGxlcmdsLWp1cHl0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gQ3VzdG9tUGFuZWxIZWFkZXJGYWN0b3J5KCkge1xuICBjb25zdCBQYW5lbEhlYWRlciA9IFBhbmVsSGVhZGVyRmFjdG9yeSgpO1xuXG4gIGNvbnN0IGFjdGlvbkl0ZW1zID0gcHJvcHMgPT4gW1xuICAgIHtcbiAgICAgIGlkOiAnZG9jcycsXG4gICAgICBpY29uQ29tcG9uZW50OiBJY29ucy5Eb2NzLFxuICAgICAgaHJlZjogS0VQTEVSX0RPQyxcbiAgICAgIGJsYW5rOiB0cnVlLFxuICAgICAgdG9vbHRpcDogJ3Rvb2x0aXAuZG9jdW1lbnRhdGlvbicsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7fVxuICAgIH1cbiAgXTtcblxuICBjb25zdCBKdXB5dGVyUGFuZWxIZWFkZXIgPSBwcm9wcyA9PiAoXG4gICAgPEludGxQcm92aWRlciBsb2NhbGU9XCJlblwiIG1lc3NhZ2VzPXt7J3Rvb2x0aXAuZG9jdW1lbnRhdGlvbic6ICdEb2N1bWVudGF0aW9uJ319PlxuICAgICAgPFBhbmVsSGVhZGVyIHsuLi5wcm9wc30gYWN0aW9uSXRlbXM9e2FjdGlvbkl0ZW1zKHByb3BzKX0gLz5cbiAgICA8L0ludGxQcm92aWRlcj5cbiAgKTtcbiAgcmV0dXJuIHdpdGhTdGF0ZShbXSwgc3RhdGUgPT4gc3RhdGUsIHtcbiAgICB0b2dnbGVNb2RhbFxuICB9KShKdXB5dGVyUGFuZWxIZWFkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYW5lbEhlYWRlckZhY3Rvcnk7XG4iXX0=