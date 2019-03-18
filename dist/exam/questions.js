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
/******/ 	return __webpack_require__(__webpack_require__.s = 54);
/******/ })
/************************************************************************/
/******/ ({

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _questions = __webpack_require__(55);

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_questions2.default.el = '#root';
new Vue(_questions2.default);

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(56)
)

/* script */
__vue_exports__ = __webpack_require__(57)

/* template */
var __vue_template__ = __webpack_require__(58)
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
__vue_options__.__file = "/Users/longrise/Desktop/awesome-project/src/exam/questions.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6f889e14"
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

/***/ 56:
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "flexDirection": "row",
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": "100",
    "left": 0
  },
  "slider-pages": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
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
  "placeInput": {
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
  "saveBtn": {
    "width": "200",
    "height": "72",
    "lineHeight": "72",
    "borderRadius": "6",
    "borderColor": "rgba(255,162,0,1)",
    "borderWidth": "2",
    "color": "rgba(255,162,0,1)",
    "textAlign": "center"
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

/***/ 57:
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

var util = weex.requireModule('UtilModule') || {};
var dateModule = weex.requireModule('DateModule');
var modal = weex.requireModule('modal') || {};
// const navigator = weex.requireModule('navigator') || {};
var navigator = weex.requireModule('LENavigator') || {};
var globalEvent = weex.requireModule('globalEvent');
var spModule = weex.requireModule('SPModule');

exports.default = {
    name: "questions",

    data: function data() {
        return {
            //0选择 1填空 2论述
            questionType: 1,
            isFolded: false,
            currIdx: 0,
            answerText: '',
            loading: true,
            itemList: [{ type: 0, title: 'item1' }, { type: 1, title: 'item2' }, { type: 2, title: 'item3' }],
            choiceItems: ['A', 'B', 'C', 'D'],
            blanks: [],
            blank: ''
        };
    },

    created: function created() {
        var _this = this;

        var self = this;

        //每次创建此页面时先清除上次保存的内容
        spModule.putString('answerText', '', function (aValue) {});

        globalEvent.addEventListener("getText", function (e) {
            spModule.getString('answerText', 'def', function (textValue) {
                _this.answerText = textValue;
            });
        });
    },

    methods: {
        changeHandler: function changeHandler(e) {
            this.currIdx = e.index;
        },

        onMarkClick: function onMarkClick(event) {
            modal.toast({
                message: 'markClick',
                duration: 0.8
            });
        },


        // oninput: function(e) {
        //     modal.toast({
        //         message: this.blanks[0],
        //         duration: 0.8
        //     })
        // },

        enterIntoEditor: function enterIntoEditor(event) {
            console.log('will jump');
            navigator.refreshWithURL('http://192.168.1.117:8081/dist/exam/discussEditor.js', {});
            // navigator.push({
            //     url: 'http://192.168.1.117:8081/dist/exam/discussEditor.js',
            //     animated: "true"
            // })
        },
        saveClick: function saveClick(event) {
            modal.toast({
                message: 'saveClick',
                duration: 0.8
            });
        },
        sheetClick: function sheetClick(event) {
            modal.toast({
                message: 'sheetClick',
                duration: 0.8
            });
        },
        sendClick: function sendClick(event) {
            // modal.toast({
            //     message: 'sendClick',
            //     duration: 0.8
            // })

            this.blanks = ['1', '2', '3', '4'];
        }
    }
};

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      flexDirection: "row",
      flex: "1"
    }
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "false",
      "infinite": "false"
    },
    on: {
      "scroll": _vm.scrollHandler,
      "change": _vm.changeHandler
    }
  }, _vm._l((_vm.itemList), function(item, key) {
    return _c('div', {
      key: key,
      staticClass: ["slider-pages"]
    }, [_c('div', {
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
    }, [_vm._v("世界科技发展突飞猛进，创新创造日新月异，世界科技正孕育着新的重大突破，知识在经济社会发展中的作用日益突出，科技竞争在综合国力竞争中的地位。")]), (item.type === 0) ? _c('div', _vm._l((_vm.choiceItems), function(choice) {
      return _c('div', {
        staticClass: ["optionsView"]
      }, [_c('text', {
        staticClass: ["indexLabel"]
      }, [_vm._v(_vm._s(choice))]), _c('text', {
        staticClass: ["contentLabel"]
      }, [_vm._v("世界科技发展突飞猛进，创新创造日新月异 ，世界科技正孕育着新的重大突破")])])
    })) : _vm._e(), (item.type === 1) ? _c('div', [_vm._l((_vm.blanks), function(blank, index) {
      return _c('div', {
        key: index,
        staticClass: ["optionsView"]
      }, [_c('text', {
        staticClass: ["indexLabel"],
        style: (_vm.blanks[index].length > 0) ? {
          backgroundColor: '#FFA200'
        } : {
          backgroundColor: '#777777'
        }
      }, [_vm._v(_vm._s(index + 1))]), _c('input', {
        staticClass: ["placeInput"],
        attrs: {
          "type": "text",
          "placeholder": "点击输入答案",
          "value": (_vm.blanks[index])
        },
        on: {
          "input": function($event) {
            _vm.$set(_vm.blanks, index, $event.target.attr.value)
          }
        }
      })])
    }), _c('div', {
      staticStyle: {
        marginTop: "42px",
        flexDirection: "row",
        alignItems: "center",
        height: "72px",
        justifyContent: "center"
      }
    }, [_c('text', {
      staticClass: ["saveBtn"],
      on: {
        "click": _vm.saveClick
      }
    }, [_vm._v("保存")])])], 2) : _vm._e(), (item.type === 2) ? _c('div', [_c('div', {
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
    }, [_vm._v(_vm._s(_vm.isFolded ? '展开题目' : '收起题目'))])])]), _c('div', {
      staticClass: ["editer"],
      on: {
        "click": _vm.enterIntoEditor
      }
    }, [_c('div', {
      staticStyle: {
        flexDirection: "row",
        alignItems: "center"
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
    }, [_vm._v("我的回答：")]), (_vm.answerText.length > 0) ? _c('text', {
      staticStyle: {
        marginLeft: "435px",
        fontSize: "30px",
        fontWeight: "400",
        color: "rgba(255,162,0,1)"
      }
    }, [_vm._v("编辑")]) : _vm._e()]), _c('text', {
      staticClass: ["grayLine"],
      staticStyle: {
        marginLeft: "0px",
        marginRight: "0px"
      }
    }), _c('text', {
      staticStyle: {
        marginTop: "20px",
        marginLeft: "27px",
        marginRight: "27px",
        marginBottom: "20px",
        color: "rgba(74,74,74,1)",
        fontWeight: "400",
        fontSize: "30px",
        backgroundColor: "red"
      }
    }, [_vm._v(_vm._s(_vm.answerText))]), (_vm.answerText.length < 1) ? _c('text', {
      staticStyle: {
        position: "absolute",
        top: "126px",
        left: "260px",
        width: "182px",
        fontSize: "26px",
        fontWeight: "500",
        backgroundColor: "#00B4FF"
      }
    }, [_vm._v("点击进入编辑器")]) : _vm._e()])]) : _vm._e()])
  })), _c('div', {
    staticClass: ["bottemMenu"]
  }, [_c('text', {
    staticClass: ["bottemButton"],
    on: {
      "click": _vm.sheetClick
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
  }, [_vm._v("交卷")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });