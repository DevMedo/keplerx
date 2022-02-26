// // Copyright (c) 2022 Uber Technologies, Inc.
// //
// // Permission is hereby granted, free of charge, to any person obtaining a copy
// // of this software and associated documentation files (the "Software"), to deal
// // in the Software without restriction, including without limitation the rights
// // to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// // copies of the Software, and to permit persons to whom the Software is
// // furnished to do so, subject to the following conditions:
// //
// // The above copyright notice and this permission notice shall be included in
// // all copies or substantial portions of the Software.
// //
// // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// // IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// // FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// // AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// // LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// // OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// // THE SOFTWARE.

// import React from "react";
// import { MapPopoverFactory } from "kepler.gl/components";

// const CustomMapPopoverFactory = (...deps) => {
//   const MapPopover = MapPopoverFactory(...deps);
//   const MapPopoverWrapper = (props) => {
//     // Disable tooltip for point layer
//     if (props.layerHoverProp?.layer?.id === "point_layer") {
//       return null;
//     }

//     return <MapPopover {...props} />;
//   };

//   return MapPopoverWrapper;
// };
// CustomMapPopoverFactory.deps = MapPopoverFactory.deps;
// export default CustomMapPopoverFactory;
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXN0b20tbWFwLXBvcG92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImN1c3RvbS1tYXAtcG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIENvcHlyaWdodCAoYykgMjAyMiBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy8gLy9cbi8vIC8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIC8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIC8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIC8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIC8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vIC8vXG4vLyAvLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vLyAvL1xuLy8gLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyAvLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIC8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIC8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyAvLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyAvLyBUSEUgU09GVFdBUkUuXG5cbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IE1hcFBvcG92ZXJGYWN0b3J5IH0gZnJvbSBcImtlcGxlci5nbC9jb21wb25lbnRzXCI7XG5cbi8vIGNvbnN0IEN1c3RvbU1hcFBvcG92ZXJGYWN0b3J5ID0gKC4uLmRlcHMpID0+IHtcbi8vICAgY29uc3QgTWFwUG9wb3ZlciA9IE1hcFBvcG92ZXJGYWN0b3J5KC4uLmRlcHMpO1xuLy8gICBjb25zdCBNYXBQb3BvdmVyV3JhcHBlciA9IChwcm9wcykgPT4ge1xuLy8gICAgIC8vIERpc2FibGUgdG9vbHRpcCBmb3IgcG9pbnQgbGF5ZXJcbi8vICAgICBpZiAocHJvcHMubGF5ZXJIb3ZlclByb3A/LmxheWVyPy5pZCA9PT0gXCJwb2ludF9sYXllclwiKSB7XG4vLyAgICAgICByZXR1cm4gbnVsbDtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4gPE1hcFBvcG92ZXIgey4uLnByb3BzfSAvPjtcbi8vICAgfTtcblxuLy8gICByZXR1cm4gTWFwUG9wb3ZlcldyYXBwZXI7XG4vLyB9O1xuLy8gQ3VzdG9tTWFwUG9wb3ZlckZhY3RvcnkuZGVwcyA9IE1hcFBvcG92ZXJGYWN0b3J5LmRlcHM7XG4vLyBleHBvcnQgZGVmYXVsdCBDdXN0b21NYXBQb3BvdmVyRmFjdG9yeTtcbiJdfQ==