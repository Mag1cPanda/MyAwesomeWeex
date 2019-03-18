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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ({

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _discussQuestion = __webpack_require__(45);

var _discussQuestion2 = _interopRequireDefault(_discussQuestion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_discussQuestion2.default.el = '#root';
new Vue(_discussQuestion2.default);

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(46)
)

/* script */
__vue_exports__ = __webpack_require__(47)

/* template */
var __vue_template__ = __webpack_require__(48)
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
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/exam/discussQuestion.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-551ede4f"
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

/***/ 46:
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
  "foldBtn": {
    "width": "197",
    "height": "56",
    "backgroundColor": "rgba(255,255,255,1)",
    "borderRadius": "28",
    "borderColor": "#FFA200",
    "borderWidth": "2",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "optionsView": {
    "flexDirection": "row",
    "marginTop": "31",
    "marginLeft": "23",
    "marginRight": "23",
    "borderWidth": "2",
    "borderColor": "rgba(243,243,243,1)",
    "borderRadius": "6",
    "height": "120"
  },
  "indexLabel": {
    "marginTop": "39",
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
    "marginTop": "39",
    "marginLeft": "25",
    "marginRight": "20",
    "height": "42",
    "fontSize": "30",
    "fontWeight": "400",
    "flex": 1,
    "color": "rgba(74,74,74,1)"
  },
  "editer": {
    "marginTop": "41",
    "marginLeft": "23",
    "marginRight": "23",
    "height": "255",
    "borderWidth": "1",
    "borderColor": "#E5E5E5",
    "borderRadius": "6"
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

/***/ 47:
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
var navigator = weex.requireModule('navigator');

exports.default = {
    name: "discussQuestion",

    data: function data() {
        return {
            fontBtnTitle: '收起题目'
        };
    },


    methods: {
        enterIntoEditor: function enterIntoEditor(event) {
            console.log('will jump');
            navigator.push({
                url: 'http://192.168.1.100:8081/dist/exam/discussEditor.js',
                animated: "true"
            });
        }
    }
};

/***/ }),

/***/ 48:
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
  }, [_vm._v("我国经济增长的潜力、韧性和回旋余地仍较大，三新经济动能快速成长，企业效益有所改善，工业领域存在补库存需要，宏观调控政策仍有一定空间，将会支撑我国经济保持在合理运行空间。当然，全球经济增长仍然疲弱，一些国家大选、反全球化逆流和地缘政治等不确定性因素对经济复苏的影响加大；国内新的增长支撑点缺乏、产能过剩依然较大、民间投资不振、资金“脱实就虚”、金融风险加大、居民收入减速、部分领域改革推进缓慢、部分地区困难较大等因素叠加影响，我国经济仍将面临较大下行压力。 国内经济面临房地产市场波动影响宏观经济稳定运行、社会资金加速“脱实向虚”、各领域金融风险叠加隐患上升、民间企业投资活力不足、收入增速放缓抑制消费需求等问题。")]), _c('div', {
    staticStyle: {
      marginTop: "22px",
      justifyContent: "center",
      alignItems: "center"
    }
  }, [_c('text', {
    staticClass: ["grayLine"],
    staticStyle: {
      position: "absolute",
      left: "0px",
      right: "0px",
      top: "28px"
    }
  }), _c('div', {
    staticClass: ["foldBtn"]
  }, [_c('text', {
    staticStyle: {
      color: "#FFA200",
      fontSize: "26px"
    }
  }, [_vm._v(_vm._s(_vm.fontBtnTitle))])])]), _c('div', {
    staticClass: ["editer"],
    on: {
      "click": _vm.enterIntoEditor
    }
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
    staticClass: ["grayLine"],
    staticStyle: {
      marginLeft: "0px",
      marginRight: "0px"
    }
  }), _c('text', {
    staticStyle: {
      marginTop: "68px",
      marginLeft: "260px",
      fontSize: "26px",
      fontWeight: "500"
    }
  }, [_vm._v("点击进入编辑器")])]), _vm._l((_vm.blanks), function(blank) {
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