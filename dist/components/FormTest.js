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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FormTest = __webpack_require__(9);

var _FormTest2 = _interopRequireDefault(_FormTest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_FormTest2.default.el = '#root';
new Vue(_FormTest2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(12)
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
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/components/FormTest.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-711938a6"
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
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "titleLab": {
    "fontSize": "40",
    "paddingTop": "40",
    "paddingBottom": "40",
    "textAlign": "center"
  },
  "lastRow": {
    "height": "90",
    "borderWidth": "0.5",
    "alignItems": "center",
    "flexDirection": "row",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "otherRow": {
    "height": "90",
    "borderLeftWidth": "0.5",
    "borderTopWidth": "0.5",
    "borderRightWidth": "0.5",
    "alignItems": "center",
    "flexDirection": "row",
    "marginLeft": "20",
    "marginRight": "20"
  },
  "leftText": {
    "paddingLeft": "10",
    "paddingRight": "10",
    "width": "200",
    "textAlign": "center",
    "color": "#999999",
    "lines": 2
  },
  "verticalLine": {
    "backgroundColor": "#cccccc",
    "width": "0.5",
    "height": "90"
  },
  "rightItems": {
    "flexDirection": "row",
    "flex": 1,
    "alignSelf": "stretch",
    "alignItems": "center"
  },
  "rightText": {
    "marginLeft": "20",
    "marginRight": "20",
    "flex": 1
  },
  "rightIcon": {
    "width": "40",
    "height": "40",
    "marginRight": "20",
    "backgroundColor": "#00B4FF"
  },
  "placeInput": {
    "paddingTop": "20",
    "paddingLeft": "20",
    "marginRight": "20",
    "flex": 1,
    "height": "80"
  },
  "dividerLine": {
    "marginTop": "30",
    "width": "750",
    "backgroundColor": "#F7F7F7",
    "height": "20"
  },
  "blueLine": {
    "backgroundColor": "#00B4FF",
    "width": "5",
    "height": "40",
    "marginLeft": "20"
  },
  "grayLine": {
    "backgroundColor": "#cccccc",
    "marginLeft": "20",
    "marginRight": "20",
    "height": "1"
  },
  "summaryTextarea": {
    "height": "200",
    "marginTop": "30",
    "marginBottom": "30",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingTop": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "color": "#666666",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#00B4FF"
  },
  "bottemMenu": {
    "backgroundColor": "#00B4FF",
    "flexDirection": "row",
    "alignItems": "center",
    "height": "100"
  }
}

/***/ }),
/* 11 */
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
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var picker = weex.requireModule('picker');
var navigator = weex.requireModule('navigator');
var typeItems = ['任命考核期转正', '试用期转正'];
var degreeItems = ['中专', '高中', '大专', '本科', '硕士', '博士', '博士后'];

exports.default = {
    data: function data() {
        return {
            timeValue: '',

            typeIndex: -1,
            degreeIndex: -1
            // typeValue: '',
            // degreeValue: ''
        };
    },


    computed: {
        typeValue: function typeValue() {
            if (this.typeIndex < typeItems.length) {
                return typeItems[this.typeIndex];
            }
            return '';
        },
        degreeValue: function degreeValue() {
            if (this.degreeIndex < degreeItems.length) {
                return degreeItems[this.degreeIndex];
            }
            return '';
        }
    },

    methods: {
        onBackClick: function onBackClick() {
            // navigator.push({
            //     url: '"http://192.168.1.100:8081/dist/components/GridList.js',
            //     animated: "true"
            // }, event => {
            //     modal.toast({ message: 'callback: ' + event })
            // })

            navigator.pop({
                animated: "true",
                data: {
                    username: '程三',
                    password: 123456
                }
            }, function (event) {});
        },
        selectTime: function selectTime() {
            var _this = this;

            picker.pickDate({
                value: this.timeValue,
                max: '2029-11-28',
                min: '1998-01-01'
            }, function (event) {
                if (event.result === 'success') {
                    _this.timeValue = event.data;
                }
            });
        },
        selectType: function selectType() {
            var _this2 = this;

            picker.pick({
                index: this.typeIndex,
                items: typeItems
            }, function (event) {
                if (event.result === 'success') {
                    _this2.typeIndex = event.data === -1 ? 0 : event.data;
                    _this2.typeValue = typeItems[event.data];
                }
            });
        },
        selectDegree: function selectDegree() {
            var _this3 = this;

            picker.pick({
                index: this.degreeIndex,
                items: degreeItems
            }, function (event) {
                if (event.result === 'success') {
                    _this3.degreeIndex = event.data === -1 ? 0 : event.data;
                    _this3.degreeValue = degreeItems[event.data];
                }
            });
        },
        oninput: function oninput(event) {
            console.log('oninput:', event.value);
        },
        onchange: function onchange(event) {
            console.log('onchange:', event.value);
        },
        onfocus: function onfocus(event) {
            console.log('onfocus:', event.value);
        },
        onblur: function onblur(event) {
            console.log('onblur:', event.value);
        },
        onInternalClick: function onInternalClick() {
            modal.toast({
                message: 'onInternalClick',
                duration: 0.8
            });
        },
        onOutsideClick: function onOutsideClick() {
            modal.toast({
                message: 'onOutsideClick',
                duration: 0.8
            });
        },
        onPassClick: function onPassClick() {
            modal.toast({
                message: 'onPassClick',
                duration: 0.8
            });
        },
        onNoPassClick: function onNoPassClick() {
            modal.toast({
                message: 'onNoPassClick',
                duration: 0.8
            });
        },
        saveClick: function saveClick(event) {
            modal.toast({
                message: 'saveClick',
                duration: 0.8
            });
        },
        sendClick: function sendClick(event) {
            modal.toast({
                message: 'sendClick',
                duration: 0.8
            });
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      backgroundColor: "#00B4FF",
      width: "750px",
      height: "88px",
      alignItems: "center",
      flexDirection: "row"
    }
  }, [_c('image', {
    staticStyle: {
      backgroundColor: "bisque",
      marginLeft: "20px",
      width: "40px",
      height: "40px"
    },
    on: {
      "click": _vm.onBackClick
    }
  })]), _c('scroller', {
    staticClass: ["form"]
  }, [_c('text', {
    staticClass: ["titleLab"]
  }, [_vm._v("转正申请表")]), _vm._m(0), _vm._m(1), _vm._m(2), _vm._m(3), _vm._m(4), _vm._m(5), _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("入职时间")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('div', {
    staticClass: ["rightItems"],
    on: {
      "click": _vm.selectTime
    }
  }, [_c('text', {
    staticClass: ["rightText"]
  }, [_vm._v(_vm._s(_vm.timeValue))]), _c('image', {
    staticClass: ["rightIcon"]
  })])]), _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("转正类型")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('div', {
    staticClass: ["rightItems"],
    on: {
      "click": _vm.selectType
    }
  }, [_c('text', {
    staticClass: ["rightText"]
  }, [_vm._v(_vm._s(_vm.typeValue))]), _c('image', {
    staticClass: ["rightIcon"]
  })])]), _c('div', {
    staticClass: ["lastRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("最高学历")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('div', {
    staticClass: ["rightItems"],
    on: {
      "click": _vm.selectDegree
    }
  }, [_c('text', {
    staticClass: ["rightText"]
  }, [_vm._v(_vm._s(_vm.degreeValue))]), _c('image', {
    staticClass: ["rightIcon"]
  })])]), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(6), _c('text', {
    staticClass: ["grayLine"]
  }), _c('textarea', {
    staticClass: ["summaryTextarea"],
    attrs: {
      "placeholder": "请在此输入信息"
    },
    on: {
      "input": _vm.oninput,
      "change": _vm.onchange,
      "focus": _vm.onfocus,
      "blur": _vm.onblur
    }
  }), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(7), _c('text', {
    staticClass: ["grayLine"]
  }), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(8), _c('text', {
    staticClass: ["grayLine"]
  }), _vm._m(9), _vm._m(10), _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("出勤类型")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('div', {
    staticClass: ["rightItems"],
    attrs: {
      ";": ""
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center"
    },
    on: {
      "click": _vm.onInternalClick
    }
  }, [_c('image', {
    staticStyle: {
      marginLeft: "20px",
      backgroundColor: "#00B4FF",
      width: "40px",
      height: "40px"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "10px"
    }
  }, [_vm._v("内勤岗")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "20px"
    },
    on: {
      "click": _vm.onOutsideClick
    }
  }, [_c('image', {
    staticStyle: {
      marginLeft: "20px",
      backgroundColor: "#00B4FF",
      width: "40px",
      height: "40px"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "10px"
    }
  }, [_vm._v("外勤岗")])])])]), _vm._m(11), _vm._m(12), _vm._m(13), _vm._m(14), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(15), _c('text', {
    staticClass: ["grayLine"]
  }), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(16), _c('text', {
    staticClass: ["grayLine"]
  }), _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "20px",
      marginTop: "20px"
    }
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center"
    },
    on: {
      "click": _vm.onPassClick
    }
  }, [_c('image', {
    staticStyle: {
      marginLeft: "20px",
      backgroundColor: "#00B4FF",
      width: "40px",
      height: "40px"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "10px"
    }
  }, [_vm._v("通过")])]), _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "20px"
    },
    on: {
      "click": _vm.onNoPassClick
    }
  }, [_c('image', {
    staticStyle: {
      marginLeft: "20px",
      backgroundColor: "#00B4FF",
      width: "40px",
      height: "40px"
    }
  }), _c('text', {
    staticStyle: {
      marginLeft: "10px"
    }
  }, [_vm._v("不通过")])])]), _c('text', {
    staticClass: ["dividerLine"]
  }), _vm._m(17), _c('text', {
    staticClass: ["grayLine"]
  })]), _c('div', {
    staticClass: ["bottemMenu"]
  }, [_c('text', {
    staticStyle: {
      color: "#FFFFFF",
      flex: "1",
      textAlign: "center"
    },
    on: {
      "click": _vm.saveClick
    }
  }, [_vm._v("保存")]), _c('text', {
    staticStyle: {
      backgroundColor: "#FFFFFF",
      width: "0.5px",
      height: "100px"
    }
  }), _c('text', {
    staticStyle: {
      color: "#FFFFFF",
      flex: "1",
      textAlign: "center"
    },
    on: {
      "click": _vm.sendClick
    }
  }, [_vm._v("发送")])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("工号")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }, [_vm._v("200182")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("申请人")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }, [_vm._v("潘神")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("岗位")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }, [_vm._v("软件开发工程师")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("申请时间")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }, [_vm._v("2019-02-19 11:56")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("工作单位")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }, [_vm._v("保宝项目组")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("工作地")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('input', {
    staticClass: ["placeInput"],
    attrs: {
      "type": "text"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("工作总结")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("部门审批")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("人事面谈")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"],
    staticStyle: {
      marginTop: "40px"
    }
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("预转正日期")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("转正后岗位")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("交补额度")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("工资上调额度")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }), _c('text', {
    staticStyle: {
      marginRight: "20px"
    }
  }, [_vm._v("元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["otherRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("试用工资总额")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }), _c('text', {
    staticStyle: {
      marginRight: "20px"
    }
  }, [_vm._v("元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["lastRow"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("转正工资总额")]), _c('text', {
    staticClass: ["verticalLine"]
  }), _c('text', {
    staticClass: ["rightText"]
  }), _c('text', {
    staticStyle: {
      marginRight: "20px"
    }
  }, [_vm._v("元")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("人力资源鉴定")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("总经理审批")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      height: "80px"
    }
  }, [_c('text', {
    staticClass: ["blueLine"]
  }), _c('text', {
    staticStyle: {
      marginLeft: "20px"
    }
  }, [_vm._v("人事归档")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);