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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _discussEditor = __webpack_require__(40);

var _discussEditor2 = _interopRequireDefault(_discussEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_discussEditor2.default.el = '#root';
new Vue(_discussEditor2.default);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/exam/discussEditor.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e052896"
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

/***/ 41:
/***/ (function(module, exports) {

module.exports = {
  "editer": {
    "marginTop": "41",
    "marginLeft": "23",
    "width": "704",
    "height": "678",
    "borderWidth": "1",
    "borderColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "grayLine": {
    "backgroundColor": "#E5E5E5",
    "height": "1"
  },
  "textarea": {
    "backgroundColor": "#00B4FF",
    "height": "186",
    "marginTop": "20",
    "marginLeft": "27",
    "marginRight": "27",
    "marginBottom": "20",
    "fontSize": "30",
    "fontWeight": "400",
    "lineHeight": "48",
    "color": "#666666"
  },
  "imageBtn": {
    "backgroundColor": "#00B4FF",
    "marginLeft": "25",
    "marginTop": "30",
    "width": "159",
    "height": "159"
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

/***/ 42:
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
//
//
//

var modal = weex.requireModule('modal');
var globalEvent = weex.requireModule('globalEvent');
var spModule = weex.requireModule('SPModule');

exports.default = {
    name: "discussEditor",

    data: function data() {
        return {
            imageCount: 0,
            answerText: ''
        };
    },


    created: function created() {
        var _this = this;

        var self = this;

        spModule.getString('answerText', 'def', function (textValue) {
            _this.answerText = textValue;
        });

        globalEvent.addEventListener("saveText", function (e) {
            spModule.putString('answerText', _this.answerText, function (aValue) {});
        });
    },

    methods: {
        oninput: function oninput(event) {
            console.log('oninput:', event.value);
        },
        onchange: function onchange(event) {
            console.log('onchange:', event.value);
            this.answerText = event.value;
        },
        saveClick: function saveClick() {
            spModule.putString('answerText', this.answerText, function (aValue) {});
        }
    }
};

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["editer"]
  }, [_c('text', {
    staticStyle: {
      marginTop: "10px",
      marginBottom: "10px",
      marginLeft: "22px",
      color: "#2A2000",
      fontSize: "30px",
      fontWeight: "400"
    }
  }, [_vm._v("我的回答：")]), _c('text', {
    staticClass: ["grayLine"]
  }), _c('textarea', {
    staticClass: ["textarea"],
    attrs: {
      "value": (_vm.answerText)
    },
    on: {
      "input": [function($event) {
        _vm.answerText = $event.target.attr.value
      }, _vm.oninput],
      "change": _vm.onchange
    }
  })]), _c('image', {
    staticClass: ["imageBtn"]
  }), (_vm.imageCount > 1) ? _c('image', {
    staticClass: ["imageBtn"]
  }) : _vm._e(), (_vm.imageCount > 2) ? _c('image', {
    staticClass: ["imageBtn"]
  }) : _vm._e(), (_vm.imageCount > 3) ? _c('image', {
    staticClass: ["imageBtn"]
  }) : _vm._e(), (_vm.imageCount > 4) ? _c('image', {
    staticClass: ["imageBtn"]
  }) : _vm._e(), (_vm.imageCount > 5) ? _c('image', {
    staticClass: ["imageBtn"]
  }) : _vm._e(), _vm._m(0), _c('div', {
    staticClass: ["bottemMenu"]
  }, [_c('text', {
    staticClass: ["bottemButton"],
    on: {
      "click": _vm.saveClick
    }
  }, [_vm._v("保存")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      alignItems: "center",
      flexDirection: "row",
      marginTop: "24px"
    }
  }, [_c('image', {
    staticStyle: {
      marginLeft: "24px",
      width: "24px",
      height: "24px",
      backgroundColor: "#00B4FF"
    }
  }), _c('text', {
    staticStyle: {
      width: "182px",
      height: "33px",
      fontSize: "24px",
      fontWeight: "500",
      color: "rgba(68,68,68,1)",
      marginLeft: "10px"
    }
  }, [_vm._v("最多上传6张照片")])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });