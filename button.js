'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonStyle = {
  position: 'absolute',
  zIndex: 100,
  bottom: 0,
  right: 0,
  width: '120px',
  height: '40px',
  backgroundColor: '#1f7cf4',
  color: '#FFFFFF',
  cursor: 'pointer',
  border: 0,
  borderRadius: '3px',
  fontSize: '12px',
  margin: '30px'
};

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'button',
    { style: buttonStyle, onClick: onClick },
    children
  );
};

exports.default = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9idXR0b24uanMiXSwibmFtZXMiOlsiYnV0dG9uU3R5bGUiLCJwb3NpdGlvbiIsInpJbmRleCIsImJvdHRvbSIsInJpZ2h0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImN1cnNvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwibWFyZ2luIiwiQnV0dG9uIiwib25DbGljayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYztBQUNsQkMsWUFBVSxVQURRO0FBRWxCQyxVQUFRLEdBRlU7QUFHbEJDLFVBQVEsQ0FIVTtBQUlsQkMsU0FBTyxDQUpXO0FBS2xCQyxTQUFPLE9BTFc7QUFNbEJDLFVBQVEsTUFOVTtBQU9sQkMsbUJBQWlCLFNBUEM7QUFRbEJDLFNBQU8sU0FSVztBQVNsQkMsVUFBUSxTQVRVO0FBVWxCQyxVQUFRLENBVlU7QUFXbEJDLGdCQUFjLEtBWEk7QUFZbEJDLFlBQVUsTUFaUTtBQWFsQkMsVUFBTztBQWJXLENBQXBCOztBQWdCQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxNQUFFQyxPQUFGLFFBQUVBLE9BQUY7QUFBQSxNQUFXQyxRQUFYLFFBQVdBLFFBQVg7QUFBQSxTQUNiO0FBQUE7QUFBQSxNQUFRLE9BQU9oQixXQUFmLEVBQTRCLFNBQVNlLE9BQXJDO0FBQStDQztBQUEvQyxHQURhO0FBQUEsQ0FBZjs7a0JBSWVGLE0iLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB6SW5kZXg6IDEwMCxcbiAgYm90dG9tOiAwLFxuICByaWdodDogMCxcbiAgd2lkdGg6ICcxMjBweCcsXG4gIGhlaWdodDogJzQwcHgnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMWY3Y2Y0JyxcbiAgY29sb3I6ICcjRkZGRkZGJyxcbiAgY3Vyc29yOiAncG9pbnRlcicsXG4gIGJvcmRlcjogMCxcbiAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgZm9udFNpemU6ICcxMnB4JyxcbiAgbWFyZ2luOiczMHB4Jyxcbn07XG5cbmNvbnN0IEJ1dHRvbiA9ICh7b25DbGljaywgY2hpbGRyZW59KSA9PiAoXG4gIDxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=