// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fillQuestion = __webpack_require__(50);

var _fillQuestion2 = _interopRequireDefault(_fillQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_fillQuestion2.default.el = '#root';
new Vue(_fillQuestion2.default);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(51)
)

/* script */
__vue_exports__ = __webpack_require__(52)

/* template */
var __vue_template__ = __webpack_require__(53)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/exam/fillQuestion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22a0f120"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = {
  "typeLabel": {
    "fontSize": "28",
    "fontWeight": "bold",
    "lineHeight": "36",
    "color": "rgba(0,0,0,1)"
  },
  "markLabel": {
    "marginLeft": "10",
    "fontSize": "24",
    "fontWeight": "400",
    "lineHeight": "45",
    "color": "rgba(42,32,0,1)"
  },
  "grayLine": {
    "backgroundColor": "#E5E5E5",
    "marginLeft": "25",
    "marginRight": "25",
    "height": "1"
  },
  "stemLabel": {
    "marginTop": "23",
    "marginLeft": "23",
    "marginRight": "23",
    "fontSize": "30",
    "fontWeight": "bold",
    "lineHeight": "44",
    "color": "rgba(42,32,0,1)"
  },
  "optionsView": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "31",
    "marginLeft": "23",
    "marginRight": "23",
    "borderWidth": "2",
    "borderColor": "rgba(243,243,243,1)",
    "borderRadius": "6",
    "height": "120"
  },
  "indexLabel": {
    "marginLeft": "25",
    "width": "42",
    "height": "42",
    "backgroundColor": "#777777",
    "color": "#FFFFFF",
    "textAlign": "center",
    "fontWeight": "bold",
    "fontSize": "32",
    "borderRadius": "21"
  },
  "placeInput": {
    "placeholder": "点击输入答案",
    "marginLeft": "25",
    "marginRight": "20",
    "height": "42",
    "fontSize": "30",
    "fontWeight": "400",
    "flex": 1,
    "color": "rgba(74,74,74,1)"
  },
  "bottemMenu": {
    "position": "fixed",
    "backgroundColor": "#F2F2F2",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "100",
    "width": "750",
    "bottom": "0"
  },
  "bottemButton": {
    "color": "#FFA200",
    "flex": 1,
    "textAlign": "center",
    "fontWeight": "bold",
    "fontSize": "32"
  }
}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "fillQuestion",

    data: function data() {
        return {
            value: '-',
            blanks: ['1', '2']
        };
    },


    methods: {
        oninput: function oninput(e) {
            this.value = e.value;
            if (this.value.length > 0) {}
        }
    }
};

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "23px",
      marginTop: "20px",
      marginBottom: "20px"
    }
  }, [_c('text', {
    staticClass: ["typeLabel"]
  }, [_vm._v("题目类型 (X分)")]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "359px"
    },
    on: {
      "click": _vm.onMarkClick
    }
  }, [_c('image', {
    staticStyle: {
      backgroundColor: "#F2F2F2",
      width: "30px",
      height: "30px"
    }
  }), _c('text', {
    staticClass: ["markLabel"]
  }, [_vm._v("标记此题")])])]), _c('text', {
    staticClass: ["grayLine"]
  }), _c('text', {
    staticClass: ["stemLabel"]
  }, [_vm._v("毛泽东思想形成的主要标志是（     ）、（     ）革命道路的提出。")]), _vm._l((_vm.blanks), function(blank) {
    return _c('div', {
      staticClass: ["optionsView"]
    }, [_c('text', {
      staticClass: ["indexLabel"]
    }, [_vm._v(_vm._s(blank))]), _c('input', {
      ref: "input1",
      refInFor: true,
      staticClass: ["placeInput"],
      attrs: {
        "type": "text"
      },
      on: {
        "input": _vm.oninput
      }
    })])
  }), _c('div', {
    staticClass: ["bottemMenu"]
  }, [_c('text', {
    staticClass: ["bottemButton"],
    on: {
      "click": _vm.saveClick
    }
  }, [_vm._v("答题卡")]), _c('text', {
    staticStyle: {
      backgroundColor: "#FFFFFF",
      width: "0.5px",
      height: "100px"
    }
  }), _c('text', {
    staticClass: ["bottemButton"],
    on: {
      "click": _vm.sendClick
    }
  }, [_vm._v("交卷")])])], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });