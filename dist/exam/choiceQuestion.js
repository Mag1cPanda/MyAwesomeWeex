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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _choiceQuestion = __webpack_require__(35);

var _choiceQuestion2 = _interopRequireDefault(_choiceQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_choiceQuestion2.default.el = '#root';
new Vue(_choiceQuestion2.default);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(36)
)

/* script */
__vue_exports__ = __webpack_require__(37)

/* template */
var __vue_template__ = __webpack_require__(38)
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
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/exam/choiceQuestion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6a9f3ace"
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

/***/ 36:
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
    "marginTop": "31",
    "marginLeft": "23",
    "marginRight": "23",
    "borderWidth": "2",
    "borderColor": "rgba(243,243,243,1)",
    "borderRadius": "6"
  },
  "indexLabel": {
    "marginTop": "19",
    "marginLeft": "26",
    "width": "42",
    "height": "42",
    "backgroundColor": "#777777",
    "color": "#FFFFFF",
    "textAlign": "center",
    "fontWeight": "bold",
    "fontSize": "32",
    "borderRadius": "21"
  },
  "contentLabel": {
    "marginTop": "19",
    "marginLeft": "23",
    "marginRight": "6",
    "marginBottom": "19",
    "color": "rgba(74,74,74,1)",
    "fontSize": "30",
    "textAlign": "left",
    "flex": 1
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

/***/ 37:
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

var modal = weex.requireModule('modal');
var date = weex.requireModule('DateModule');

exports.default = {
    name: "choiceQuestion",

    data: function data() {
        return {
            choiceItems: ['A', 'B', 'C', 'D']
        };
    },


    methods: {
        saveClick: function saveClick(event) {
            date.showDialogDate(1, function (tmp) {
                modal.toast({
                    message: 'saveClick',
                    duration: 0.8
                });
            });
        },
        sendClick: function sendClick(event) {
            modal.toast({
                message: 'sendClick',
                duration: 0.8
            });
        },
        onMarkClick: function onMarkClick(event) {
            modal.toast({
                message: 'markClick',
                duration: 0.8
            });
        }
    }
};

/***/ }),

/***/ 38:
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
  }, [_vm._v("世界科技发展突飞猛进，创新创造日新月异，世界科技正孕育着新的重大突破，知识在经济社会发展中的作用日益突出，科技竞争在综合国力竞争中的地位。")]), _vm._l((_vm.choiceItems), function(choice) {
    return _c('div', {
      staticClass: ["optionsView"]
    }, [_c('text', {
      staticClass: ["indexLabel"]
    }, [_vm._v(_vm._s(choice))]), _c('text', {
      staticClass: ["contentLabel"]
    }, [_vm._v("世界科技发展突飞猛进，创新创造日新月异 ，世界科技正孕育着新的重大突破")])])
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