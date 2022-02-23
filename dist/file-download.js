'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _window = require('global/window');

function downloadJsonFile(jsonData, filename) {
  var fileBlob = new _window.Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });

  var url = _window.URL.createObjectURL(fileBlob);

  var link = _window.document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);

  _window.document.body.appendChild(link);
  link.click();
  _window.document.body.removeChild(link);
  _window.URL.revokeObjectURL(url);
}

exports.default = downloadJsonFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9maWxlLWRvd25sb2FkLmpzIl0sIm5hbWVzIjpbImRvd25sb2FkSnNvbkZpbGUiLCJqc29uRGF0YSIsImZpbGVuYW1lIiwiZmlsZUJsb2IiLCJCbG9iIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJ1cmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsInJldm9rZU9iamVjdFVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLFFBQTFCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUM1QyxNQUFNQyxXQUFXLElBQUlDLFlBQUosQ0FBUyxDQUN4QkMsS0FBS0MsU0FBTCxDQUFlTCxRQUFmLEVBQXlCLElBQXpCLEVBQStCLENBQS9CLENBRHdCLENBQVQsRUFFZCxFQUFDTSxNQUFNLGtCQUFQLEVBRmMsQ0FBakI7O0FBSUEsTUFBTUMsTUFBTUMsWUFBSUMsZUFBSixDQUFvQlAsUUFBcEIsQ0FBWjs7QUFFQSxNQUFNUSxPQUFPQyxpQkFBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FGLE9BQUtHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJOLEdBQTFCO0FBQ0FHLE9BQUtHLFlBQUwsQ0FBa0IsVUFBbEIsRUFBOEJaLFFBQTlCOztBQUVBVSxtQkFBU0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxJQUExQjtBQUNBQSxPQUFLTSxLQUFMO0FBQ0FMLG1CQUFTRyxJQUFULENBQWNHLFdBQWQsQ0FBMEJQLElBQTFCO0FBQ0FGLGNBQUlVLGVBQUosQ0FBb0JYLEdBQXBCO0FBQ0Q7O2tCQUVjUixnQiIsImZpbGUiOiJmaWxlLWRvd25sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCbG9iLCBVUkwsIGRvY3VtZW50fSBmcm9tICdnbG9iYWwvd2luZG93JztcblxuZnVuY3Rpb24gZG93bmxvYWRKc29uRmlsZShqc29uRGF0YSwgZmlsZW5hbWUpIHtcbiAgY29uc3QgZmlsZUJsb2IgPSBuZXcgQmxvYihbXG4gICAgSlNPTi5zdHJpbmdpZnkoanNvbkRhdGEsIG51bGwsIDIpLFxuICBdLCB7dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlQmxvYik7XG5cbiAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgbGluay5jbGljaygpO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xuICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkSnNvbkZpbGU7XG4iXX0=