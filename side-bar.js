'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  .side-panel--container {\n    transform:scale(0.85);\n    transform-origin: top left;\n    height: 117.64%;\n    padding-top: 0;\n    padding-right: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n\n    .side-bar {\n      height: 100%;\n    }\n    .side-bar__close {\n      right: -30px;\n      top: 14px;\n    }\n  }\n'], ['\n  .side-panel--container {\n    transform:scale(0.85);\n    transform-origin: top left;\n    height: 117.64%;\n    padding-top: 0;\n    padding-right: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n\n    .side-bar {\n      height: 100%;\n    }\n    .side-bar__close {\n      right: -30px;\n      top: 14px;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('kepler.gl/components');

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

var StyledSideBarContainer = _styledComponents2.default.div(_templateObject);

// Custom sidebar will render kepler.gl default side bar
// adding a wrapper component to edit its style
function CustomSidebarFactory() {
  var CloseButton = (0, _components.CollapseButtonFactory)();
  var Sidebar = (0, _components.SidebarFactory)(CloseButton);
  var CustomSidebar = function CustomSidebar(props) {
    return _react2.default.createElement(
      StyledSideBarContainer,
      null,
      _react2.default.createElement(Sidebar, props)
    );
  };
  return CustomSidebar;
}

exports.default = CustomSidebarFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zaWRlLWJhci5qcyJdLCJuYW1lcyI6WyJTdHlsZWRTaWRlQmFyQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ3VzdG9tU2lkZWJhckZhY3RvcnkiLCJDbG9zZUJ1dHRvbiIsIlNpZGViYXIiLCJDdXN0b21TaWRlYmFyIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBb0JBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztrSkF0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEseUJBQXlCQywyQkFBT0MsR0FBaEMsaUJBQU47O0FBb0JBO0FBQ0E7QUFDQSxTQUFTQyxvQkFBVCxHQUFnQztBQUM5QixNQUFNQyxjQUFjLHdDQUFwQjtBQUNBLE1BQU1DLFVBQVUsZ0NBQWVELFdBQWYsQ0FBaEI7QUFDQSxNQUFNRSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQ7QUFBQSxXQUNwQjtBQUFDLDRCQUFEO0FBQUE7QUFDRSxvQ0FBQyxPQUFELEVBQWFBLEtBQWI7QUFERixLQURvQjtBQUFBLEdBQXRCO0FBS0EsU0FBT0QsYUFBUDtBQUNEOztrQkFFY0gsb0IiLCJmaWxlIjoic2lkZS1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjIgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTaWRlYmFyRmFjdG9yeSwgQ29sbGFwc2VCdXR0b25GYWN0b3J5fSBmcm9tICdrZXBsZXIuZ2wvY29tcG9uZW50cyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkU2lkZUJhckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIC5zaWRlLXBhbmVsLS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjg1KTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICBoZWlnaHQ6IDExNy42NCU7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAuc2lkZS1iYXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAuc2lkZS1iYXJfX2Nsb3NlIHtcbiAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgIHRvcDogMTRweDtcbiAgICB9XG4gIH1cbmA7XG5cbi8vIEN1c3RvbSBzaWRlYmFyIHdpbGwgcmVuZGVyIGtlcGxlci5nbCBkZWZhdWx0IHNpZGUgYmFyXG4vLyBhZGRpbmcgYSB3cmFwcGVyIGNvbXBvbmVudCB0byBlZGl0IGl0cyBzdHlsZVxuZnVuY3Rpb24gQ3VzdG9tU2lkZWJhckZhY3RvcnkoKSB7XG4gIGNvbnN0IENsb3NlQnV0dG9uID0gQ29sbGFwc2VCdXR0b25GYWN0b3J5KCk7XG4gIGNvbnN0IFNpZGViYXIgPSBTaWRlYmFyRmFjdG9yeShDbG9zZUJ1dHRvbik7XG4gIGNvbnN0IEN1c3RvbVNpZGViYXIgPSAocHJvcHMpID0+IChcbiAgICA8U3R5bGVkU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgIDxTaWRlYmFyIHsuLi5wcm9wc30vPlxuICAgIDwvU3R5bGVkU2lkZUJhckNvbnRhaW5lcj5cbiAgKTtcbiAgcmV0dXJuIEN1c3RvbVNpZGViYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVNpZGViYXJGYWN0b3J5O1xuIl19