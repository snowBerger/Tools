webpackJsonp([2],{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(40)
	__vue_template__ = __webpack_require__(41)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\MyWork\\MyProject\\Web\\Tools\\webpack\\webpack_vue_router\\src\\components\\c.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 40:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div>
	//     <h1> i am a conponent {{c}} async</h1>
	//     <p></p>
	//   </div>
	// </template>
	//
	// <script>
	exports.default = {
	  data: function data() {
	    return { c: 'C' };
	  }
	};
	// </script>

/***/ },

/***/ 41:
/***/ function(module, exports) {

	module.exports = "\r\n  <div>\r\n    <h1> i am a conponent {{c}} async</h1>\r\n    <p></p>\r\n  </div>\r\n";

/***/ }

});