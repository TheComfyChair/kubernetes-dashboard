webpackJsonp([1,2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "/* @import \"./fonts/open_sans.css\"; */\n\n/* Font stacks */\n.src-assets-css-___fonts__fonts___1kpfK {\n    --primary-font-family: 'Open Sans', sans-serif;\n}\n\n.src-assets-css-___fonts__font-sizes___1vm2C {\n    --std-font-size: 1rem;\n\n    --xxs-font-size: calc(var(--std-font-size) * 0.625);\n    --xs-font-size: calc(var(--std-font-size) * 0.75);\n    --s-font-size: calc(var(--std-font-size) * 0.875);\n    --l-font-size: calc(var(--std-font-size) * 1.25);\n    --xl-font-size: calc(var(--std-font-size) * 1.375);\n    --xxl-font-size: calc(var(--std-font-size) * 1.5);\n\n    --form-font-size: var(--s-font-size);\n}\n\n.src-assets-css-___fonts__font-weights___2zxSD {\n    --std-font-weight: 400;\n\n    --thin-font-weight: 300;\n    --heavy-font-weight: 500;\n}\n\n", ""]);

// exports
exports.locals = {
	"fonts": "src-assets-css-___fonts__fonts___1kpfK",
	"font-sizes": "src-assets-css-___fonts__font-sizes___1vm2C",
	"font-weights": "src-assets-css-___fonts__font-weights___2zxSD"
};

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(13), undefined);

// module
exports.push([module.i, ".src-assets-css-___shadows__shadows___3-vDK {\n\n  --fuzzy-light: 0 0 4px 0 var(--standard-shadow-color);\n  --fuzzy-medium: 0 0 7px 0 var(--standard-shadow-color);\n  --fuzzy-medium-bottom-only: 0 4px 7px -4px  var(--standard-shadow-color);\n  --slight-shadow: 0 0 1px 0 var(--standard-shadow-color);\n  --fuzzy-large: 0 0 11px 2px var(--standard-shadow-color);\n  --sharp-light: 0 0 2px 1px var(--standard-shadow-color);\n\n  --highlight-glow: 0 0 7px 0 var(--highlight-color);\n}", ""]);

// exports
exports.locals = {
	"shadows": "src-assets-css-___shadows__shadows___3-vDK " + __webpack_require__(13).locals["colors"] + ""
};

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(358);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavLink = exports.NavLink = function NavLink(props) {
  return _react2.default.createElement(_reactRouterDom.Route, {
    path: props.to,
    children: function children(_ref) {
      var match = _ref.match;
      return _react2.default.createElement(
        _reactRouterDom.Link,
        {
          to: props.to,
          className: match ? props.activeClassName : props.className,
          onClick: props.onClick || function () {}
        },
        props.children
      );
    }
  });
};

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".src-assets-css-___colors__colors___3ljxL {\n    --primary-color: #ffffff;\n    --secondary-color: #efefef;\n    --tertiary-color: #007292;\n    --highlight-color: #00bbc8;\n}\n\n.src-assets-css-___colors__font-colors___zfWQT {\n    --primary-font-color: #000000;\n    --seconary-font-color: #FFFFFF;\n}\n", ""]);

// exports
exports.locals = {
	"colors": "src-assets-css-___colors__colors___3ljxL",
	"font-colors": "src-assets-css-___colors__font-colors___zfWQT"
};

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROUTE_PATTERN = exports.ROUTE_PATTERN = '/helloWorld';
var MODULE_TITLE = exports.MODULE_TITLE = 'Hello World';
var ROUTE_LINK = exports.ROUTE_LINK = '/helloWorld';

var USER_DETAILS_REDUCER = exports.USER_DETAILS_REDUCER = 'hw-user-details';

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storeChunk = __webpack_require__(188);

var _components = __webpack_require__(400);

var _constants = __webpack_require__(186);

exports.default = {
  reducers: _storeChunk.reducers,
  route: {
    link: _constants.ROUTE_LINK,
    pattern: _constants.ROUTE_PATTERN,
    components: {
      content: _components.HelloWorldContainer
    }
  },
  title: _constants.MODULE_TITLE
};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.selectors = exports.reducers = undefined;

var _reduxScc = __webpack_require__(179);

var _constants = __webpack_require__(186);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var userDetailsSchema = _reduxScc.Types.reducer(_reduxScc.Types.shape({
  name: _reduxScc.Types.string('react-app-skeleton')
}));

var _buildStoreChunk = (0, _reduxScc.buildStoreChunk)('hello-world', _defineProperty({}, _constants.USER_DETAILS_REDUCER, userDetailsSchema));

var reducers = _buildStoreChunk.reducers,
    selectors = _buildStoreChunk.selectors,
    actions = _buildStoreChunk.actions;
exports.reducers = reducers;
exports.selectors = selectors;
exports.actions = actions;

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".src-assets-css-___paddings__paddings___2trP3 {\n    /* All paddings should follow the border-box box-sizing functionality */\n    box-sizing: border-box;\n\n    --standard-padding: 1rem;\n    --half-padding: calc(var(--standard-padding) / 2);\n    --quarter-padding: calc(var(--standard-padding) / 4);\n    --eighth-padding: calc(var(--standard-padding) / 8);\n    --double-padding: calc(var(--standard-padding) * 2);\n}", ""]);

// exports
exports.locals = {
	"paddings": "src-assets-css-___paddings__paddings___2trP3"
};

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a router-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var router = _this.context.router;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            router.replace(to);
          } else {
            router.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        props = _objectWithoutProperties(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars

    var href = this.context.router.createHref(typeof to === 'string' ? { pathname: to } : to);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({}, props, { onClick: this.handleClick, href: href }));
  };

  return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Link.contextTypes = {
  router: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    push: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    replace: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
    createHref: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
  }).isRequired
};
Link.propTypes = {
  onClick: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  target: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  replace: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  to: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOfType([__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string, __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object]).isRequired
};
Link.defaultProps = {
  replace: false
};


/* harmony default export */ __webpack_exports__["a"] = Link;

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__ = __webpack_require__(709);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return __WEBPACK_IMPORTED_MODULE_0__BrowserRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HashRouter__ = __webpack_require__(710);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HashRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__HashRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_2__Link__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__ = __webpack_require__(711);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return __WEBPACK_IMPORTED_MODULE_3__MemoryRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavLink__ = __webpack_require__(712);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_4__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Prompt__ = __webpack_require__(713);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return __WEBPACK_IMPORTED_MODULE_5__Prompt__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Redirect__ = __webpack_require__(714);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return __WEBPACK_IMPORTED_MODULE_6__Redirect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Route__ = __webpack_require__(715);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return __WEBPACK_IMPORTED_MODULE_7__Route__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Router__ = __webpack_require__(716);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_8__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__StaticRouter__ = __webpack_require__(717);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return __WEBPACK_IMPORTED_MODULE_9__StaticRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(718);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_10__Switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__matchPath__ = __webpack_require__(719);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_11__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__withRouter__ = __webpack_require__(720);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_12__withRouter__["a"]; });



























/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(399);

Object.defineProperty(exports, 'ApplicationRoot', {
  enumerable: true,
  get: function get() {
    return _components.ApplicationRoot;
  }
});

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(80);

var _configureStore = __webpack_require__(402);

var _helloWorld = __webpack_require__(187);

var _helloWorld2 = _interopRequireDefault(_helloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = exports.store = (0, _configureStore.configureStore)((0, _redux.combineReducers)(_extends({}, _helloWorld2.default.reducers)));

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(756);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = function App(props) {
  return _react2.default.createElement(
    'main',
    { className: _styles2.default.app },
    props.children
  );
};

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MissedRoute = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(757);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MissedRoute = exports.MissedRoute = function MissedRoute(props) {
  return _react2.default.createElement(
    'div',
    {
      className: _styles2.default.container,
      'data-test-missed-route': true
    },
    (!props.children || props.message) && _react2.default.createElement(
      'p',
      { className: _styles2.default.message },
      props.message || "Oops! That page doesn't exist! :("
    ),
    props.children
  );
};

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _App = __webpack_require__(390);

Object.defineProperty(exports, 'App', {
  enumerable: true,
  get: function get() {
    return _App.App;
  }
});

var _MissedRoute = __webpack_require__(391);

Object.defineProperty(exports, 'MissedRoute', {
  enumerable: true,
  get: function get() {
    return _MissedRoute.MissedRoute;
  }
});

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _NavLink = __webpack_require__(119);

var _styles = __webpack_require__(758);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = exports.Navbar = function Navbar(props) {
  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'nav',
      {
        className: _styles2.default.container,
        'data-test-primary-nav': true
      },
      _react2.default.createElement(
        'div',
        { className: _styles2.default.links },
        props.modules.map(function (module) {
          return _react2.default.createElement(
            _NavLink.NavLink,
            {
              className: _styles2.default[(module.expanded ? 'expanded-' : '') + 'link'],
              activeClassName: _styles2.default['active-link'],
              key: module.link,
              to: module.link,
              onClick: function onClick(event) {
                event.nativeEvent.stopPropagation();
                if (!module.clickable) {
                  event.preventDefault();
                }
                props.onModuleClick(module.link);
              }
            },
            module.title
          );
        })
      )
    )
  );
};


Navbar.defaultProps = {
  links: [],
  logoLink: '/'
};

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactMotion = __webpack_require__(178);

var _Navbar = __webpack_require__(393);

var _NavigationGroup = __webpack_require__(395);

var _styles = __webpack_require__(759);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navigation = exports.Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this));

    _this._documentClickHandler = function (event) {
      if (event.target.className.indexOf('navigation') === -1) {
        _this.setState({
          expanded: false
        });
      }
    };

    _this._handleModuleExpansion = function (moduleUrl) {
      if (_this.state.expanded && moduleUrl === _this.state.expandedModuleUrl) {
        return _this.setState({
          expanded: false
        });
      }

      return _this.setState({
        expanded: !!_this.props.modules.find(function (module) {
          return module.link === moduleUrl;
        }).subModuleLinks,
        expandedModuleUrl: moduleUrl
      });
    };

    _this._mapModules = function (modules, expandedModuleUrl, expanded) {
      return modules.map(function (module) {
        return _extends({}, module, {
          expanded: expanded && expandedModuleUrl === module.link
        });
      });
    };

    _this._activeModule = function (modules, expandedModuleUrl) {
      return modules.find(function (module) {
        return module.link === expandedModuleUrl;
      });
    };

    _this.state = {
      expanded: false,
      expandedModuleUrl: ''
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      document.addEventListener('click', this._documentClickHandler);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this._documentClickHandler);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _styles2.default.navigation },
        _react2.default.createElement(_Navbar.Navbar, {
          modules: this._mapModules(this.props.modules, this.state.expandedModuleUrl, this.state.expanded),
          onModuleClick: this._handleModuleExpansion
        }),
        _react2.default.createElement(
          _reactMotion.Motion,
          {
            defaultStyle: { transform: 0 },
            style: { transform: (0, _reactMotion.spring)(this.state.expanded ? 100 : 0) }
          },
          function (iStyles) {
            return _react2.default.createElement(
              'div',
              {
                style: {
                  transform: 'translateY(-' + (100 - iStyles.transform) + '%)',
                  position: 'relative'
                }
              },
              _react2.default.createElement(_NavigationGroup.NavigationGroup, _this2._activeModule(_this2.props.modules, _this2.state.expandedModuleUrl))
            );
          }
        )
      );
    }
  }]);

  return Navigation;
}(_react.Component);

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationGroup = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(760);

var _styles2 = _interopRequireDefault(_styles);

var _NavigationLinks = __webpack_require__(396);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationGroup = exports.NavigationGroup = function NavigationGroup(props) {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.container },
    (props.subModuleLinks || []).map(function (subModule, index) {
      return _react2.default.createElement(_NavigationLinks.NavigationLinks, _extends({
        key: index
      }, subModule));
    })
  );
};

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationLinks = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _NavLink = __webpack_require__(119);

var _styles = __webpack_require__(761);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationLinks = exports.NavigationLinks = function NavigationLinks(props) {
  return _react2.default.createElement(
    'div',
    { className: _styles2.default.container },
    props.title && _react2.default.createElement(
      'h3',
      { className: _styles2.default.title },
      props.title
    ),
    props.subModuleLinks.map(function (link) {
      return _react2.default.createElement(
        _NavLink.NavLink,
        {
          key: link.link,
          to: link.link,
          className: _styles2.default.link,
          activeClassName: _styles2.default['active-link']
        },
        link.label
      );
    })
  );
};

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Navigation = __webpack_require__(394);

Object.defineProperty(exports, 'Navigation', {
  enumerable: true,
  get: function get() {
    return _Navigation.Navigation;
  }
});

var _NavLink = __webpack_require__(119);

Object.defineProperty(exports, 'NavLink', {
  enumerable: true,
  get: function get() {
    return _NavLink.NavLink;
  }
});

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationRoot = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _general = __webpack_require__(392);

var _navigation = __webpack_require__(397);

var _reactRouterDom = __webpack_require__(358);

var _helloWorld = __webpack_require__(187);

var _helloWorld2 = _interopRequireDefault(_helloWorld);

var _styles = __webpack_require__(762);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROUTES = [{
  path: _helloWorld2.default.route.pattern,
  component: _helloWorld2.default.route.components.content
}];

var ApplicationRoot = exports.ApplicationRoot = function ApplicationRoot() {
  return _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      _general.App,
      null,
      _react2.default.createElement(_navigation.Navigation, {
        modules: [{
          title: _helloWorld2.default.title,
          link: _helloWorld2.default.route.link,
          clickable: _helloWorld2.default.route.clickable
        }]
      }),
      _react2.default.createElement(_reactRouterDom.Route, {
        pattern: '/',
        exact: true,
        component: function component() {
          return _react2.default.createElement(_reactRouterDom.Redirect, { to: _helloWorld2.default.route.link });
        }
      }),
      _react2.default.createElement(
        'main',
        { className: _styles2.default.content },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          ROUTES.map(function (route, index) {
            return _react2.default.createElement(_reactRouterDom.Route, _extends({
              key: index
            }, route));
          }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _general.MissedRoute })
        )
      )
    )
  );
};

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApplicationRoot = __webpack_require__(398);

Object.defineProperty(exports, 'ApplicationRoot', {
  enumerable: true,
  get: function get() {
    return _ApplicationRoot.ApplicationRoot;
  }
});

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloWorldContainer = exports.HelloWorld = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(92);

var _selectors = __webpack_require__(401);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HelloWorld = exports.HelloWorld = function HelloWorld(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Hello world! My name is ',
      props.userName
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    userName: (0, _selectors.selectUserName)(state)
  };
};

var HelloWorldContainer = exports.HelloWorldContainer = (0, _reactRedux.connect)(mapStateToProps)(HelloWorld);

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectUserName = undefined;

var _reselect = __webpack_require__(180);

var _constants = __webpack_require__(186);

var _storeChunk = __webpack_require__(188);

var selectUserName = exports.selectUserName = (0, _reselect.createSelector)(_storeChunk.selectors[_constants.USER_DETAILS_REDUCER], function (_ref) {
  var name = _ref.name;
  return name;
});

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.configureStore = configureStore;

var _redux = __webpack_require__(80);

function configureStore(rootReducer) {
  if (!rootReducer) throw new Error('Cannot configure a store if the rootReducer is not passed in!');
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  return _extends({}, (0, _redux.createStore)(rootReducer, composeEnhancers()));
}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".src-assets-css-___margins__margins___3dg6B {\n    --standard-margin: 1rem;\n    --half-margin: calc(var(--standard-margin) / 2);\n    --quarter-margin: calc(var(--standard-margin) / 4);\n    --eighth-margin: calc(var(--standard-margin) / 8);\n    --double-margin: calc(var(--standard-margin) * 2);\n}", ""]);

// exports
exports.locals = {
	"margins": "src-assets-css-___margins__margins___3dg6B"
};

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(13), undefined);

// module
exports.push([module.i, ".src-common-ui-components-general-App-___styles__app___1Ie5Z {\n    background-color: var(--primary-color);\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}", ""]);

// exports
exports.locals = {
	"app": "src-common-ui-components-general-App-___styles__app___1Ie5Z " + __webpack_require__(13).locals["colors"] + ""
};

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(21), undefined);
exports.i(__webpack_require__(42), undefined);
exports.i(__webpack_require__(10), undefined);
exports.i(__webpack_require__(13), undefined);

// module
exports.push([module.i, ".src-common-ui-components-general-MissedRoute-___styles__container___1tsUH {\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: calc(var(--double-padding) * 4);\n}\n\n.src-common-ui-components-general-MissedRoute-___styles__logo___CDY1k {\n\n  margin-bottom: calc(var(--double-margin) * 2);\n  width: 35rem;\n}\n\n.src-common-ui-components-general-MissedRoute-___styles__message___2DVB2 {\n\n  color: var(--primary-font-color);\n  font-size: var(--l-font-size);\n  font-weight: var(--thin-font-weight);\n  font-family: var(--primary-font-family);\n}", ""]);

// exports
exports.locals = {
	"container": "src-common-ui-components-general-MissedRoute-___styles__container___1tsUH " + __webpack_require__(21).locals["paddings"] + "",
	"logo": "src-common-ui-components-general-MissedRoute-___styles__logo___CDY1k " + __webpack_require__(42).locals["margins"] + "",
	"message": "src-common-ui-components-general-MissedRoute-___styles__message___2DVB2 " + __webpack_require__(10).locals["fonts"] + " " + __webpack_require__(10).locals["font-sizes"] + " " + __webpack_require__(13).locals["font-colors"] + " " + __webpack_require__(10).locals["font-weights"] + ""
};

/***/ }),

/***/ 586:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(13), undefined);
exports.i(__webpack_require__(10), undefined);
exports.i(__webpack_require__(21), undefined);
exports.i(__webpack_require__(42), undefined);
exports.i(__webpack_require__(65), undefined);

// module
exports.push([module.i, ".src-common-ui-components-navigation-Navbar-___styles__container___1ufbY {\n\n  background-color: var(--secondary-color);\n  box-shadow: var(--fuzzy-large);\n  width: 100%;\n  position: relative;\n  box-sizing: border-box;\n  flex: none;\n  display: flex;\n  z-index: 99999;\n  justify-content: center;\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__links___2vPTg {\n\n  box-sizing: border-box;\n  padding: 0 var(--double-padding);\n\n  /* flex */\n  display: flex;\n  justify-content: center;\n  flex-grow: 1;\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__link___2pEbz {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: relative;\n  font-family: var(--primary-font-family);\n  color: var(--primary-font-color);\n  text-decoration: none;\n  font-size: var(--s-font-size);\n  user-select: none;\n  padding: var(--half-padding) calc(var(--standard-padding) * 1.5);\n  cursor: pointer;\n  text-align: center;\n  font-weight: var(--thin-font-weight);\n  opacity: 0.5;\n  transition: opacity var(--std-animation-duration);\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__link___2pEbz::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n  transform: scaleX(0);\n  transition: var(--std-animation-duration);\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__link___2pEbz:hover {\n  opacity: 0.7;\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__expanded-link___niLjO {\n  opacity: 0.7;\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__active-link___1C38w {\n\n  opacity: 1;\n  text-shadow: 0 0 1px var(--primary-font-color);\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__active-link___1C38w:hover {\n  opacity: 1;\n}\n\n.src-common-ui-components-navigation-Navbar-___styles__active-link___1C38w::after {\n  transform: scaleX(0.3);\n  opacity: 1;\n}\n\n", ""]);

// exports
exports.locals = {
	"container": "src-common-ui-components-navigation-Navbar-___styles__container___1ufbY " + __webpack_require__(13).locals["font-colors"] + " " + __webpack_require__(10).locals["font-sizes"] + " " + __webpack_require__(10).locals["fonts"] + " " + __webpack_require__(10).locals["font-weights"] + " " + __webpack_require__(21).locals["paddings"] + " " + __webpack_require__(42).locals["margins"] + " " + __webpack_require__(13).locals["colors"] + " " + __webpack_require__(65).locals["timings"] + "",
	"links": "src-common-ui-components-navigation-Navbar-___styles__links___2vPTg " + __webpack_require__(10).locals["fonts"] + " " + __webpack_require__(21).locals["paddings"] + "",
	"link": "src-common-ui-components-navigation-Navbar-___styles__link___2pEbz",
	"expanded-link": "src-common-ui-components-navigation-Navbar-___styles__expanded-link___niLjO src-common-ui-components-navigation-Navbar-___styles__link___2pEbz",
	"active-link": "src-common-ui-components-navigation-Navbar-___styles__active-link___1C38w src-common-ui-components-navigation-Navbar-___styles__link___2pEbz"
};

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".src-common-ui-components-navigation-Navigation-___styles__navigation___2APKg {\n  position: relative;\n  z-index: 10000;\n}", ""]);

// exports
exports.locals = {
	"navigation": "src-common-ui-components-navigation-Navigation-___styles__navigation___2APKg"
};

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(21), undefined);
exports.i(__webpack_require__(104), undefined);
exports.i(__webpack_require__(13), undefined);

// module
exports.push([module.i, ".src-common-ui-components-navigation-NavigationGroup-___styles__container___2uH0J {\n\n  width: 100%;\n  padding: var(--standard-padding) var(--double-padding) 0;\n  display: flex;\n  justify-content: center;\n  box-shadow: var(--fuzzy-large);\n  background-color: var(--secondary-color);\n  box-sizing: border-box;\n}", ""]);

// exports
exports.locals = {
	"container": "src-common-ui-components-navigation-NavigationGroup-___styles__container___2uH0J " + __webpack_require__(21).locals["paddings"] + " " + __webpack_require__(104).locals["shadows"] + " " + __webpack_require__(13).locals["colors"] + ""
};

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports
exports.i(__webpack_require__(10), undefined);
exports.i(__webpack_require__(13), undefined);
exports.i(__webpack_require__(21), undefined);
exports.i(__webpack_require__(42), undefined);
exports.i(__webpack_require__(65), undefined);

// module
exports.push([module.i, ".src-common-ui-components-navigation-NavigationLinks-___styles__container___1FjCN {\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 var(--standard-margin) var(--half-margin);\n}\n\n.src-common-ui-components-navigation-NavigationLinks-___styles__title___SjJpU {\n  margin-bottom: var(--half-margin);\n  padding: 0 var(--standard-padding) var(--quarter-padding);\n  font-size: var(--s-font-size);\n  font-weight: var(--thin-font-weight);\n  color: var(--primary-font-color);\n  border-bottom: 1px solid var(--secondary-border-line-color);\n  font-family: var(--primary-font-family);\n  opacity: 0.7;\n  cursor: default;\n}\n\n.src-common-ui-components-navigation-NavigationLinks-___styles__link___AU4SP {\n  text-decoration: none;\n  color: var(--primary-font-color);\n  font-family: var(--primary-font-family);\n  font-weight: var(--thin-font-weight);\n  font-size: var(--s-font-size);\n  padding: var(--quarter-padding);\n  opacity: 0.5;\n  transition: opacity var(--std-animation-duration);\n  cursor: pointer;\n}\n\n.src-common-ui-components-navigation-NavigationLinks-___styles__link___AU4SP:hover {\n  opacity: 0.7;\n}\n\n.src-common-ui-components-navigation-NavigationLinks-___styles__active-link___3VSDj {\n\n  opacity: 1;\n}\n\n.src-common-ui-components-navigation-NavigationLinks-___styles__active-link___3VSDj:hover {\n  opacity: 1;\n}", ""]);

// exports
exports.locals = {
	"container": "src-common-ui-components-navigation-NavigationLinks-___styles__container___1FjCN " + __webpack_require__(10).locals["fonts"] + " " + __webpack_require__(10).locals["font-weights"] + " " + __webpack_require__(10).locals["font-sizes"] + " " + __webpack_require__(13).locals["font-colors"] + " " + __webpack_require__(21).locals["paddings"] + " " + __webpack_require__(42).locals["margins"] + " " + __webpack_require__(65).locals["timings"] + "",
	"title": "src-common-ui-components-navigation-NavigationLinks-___styles__title___SjJpU",
	"link": "src-common-ui-components-navigation-NavigationLinks-___styles__link___AU4SP",
	"active-link": "src-common-ui-components-navigation-NavigationLinks-___styles__active-link___3VSDj src-common-ui-components-navigation-NavigationLinks-___styles__link___AU4SP"
};

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(116);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(87);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(147);

var _PathUtils = __webpack_require__(86);

var _createTransitionManager = __webpack_require__(148);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(221);

var _DOMUtils = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/mjackson/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canUseHistory = (0, _DOMUtils.supportsHistory)();
  var needsHashChangeListener = !(0, _DOMUtils.supportsPopStateOnHashChange)();

  var _props$basename = props.basename,
      basename = _props$basename === undefined ? '' : _props$basename,
      _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return _extends({}, (0, _PathUtils.parsePath)(path), {
      state: state,
      key: key
    });
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if ((0, _DOMUtils.isExtraneousPopstateEvent)(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + (0, _PathUtils.createPath)(location);
  };

  var push = function push(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : void 0;

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : void 0;

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createBrowserHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _warning = __webpack_require__(116);

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__(87);

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__(147);

var _PathUtils = __webpack_require__(86);

var _createTransitionManager = __webpack_require__(148);

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _ExecutionEnvironment = __webpack_require__(221);

var _DOMUtils = __webpack_require__(220);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$basename = props.basename,
      basename = _props$basename === undefined ? '' : _props$basename,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    if (basename) path = (0, _PathUtils.stripPrefix)(path, basename);

    return (0, _PathUtils.parsePath)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      (function () {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      })();
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored') : void 0;

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : void 0;

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored') : void 0;

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      return unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".src-assets-css-___animation__timings___1fDNG {\n  --std-animation-duration: 250ms;\n  --long-animation-duration: 375ms;\n}", ""]);

// exports
exports.locals = {
	"timings": "src-assets-css-___animation__timings___1fDNG"
};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_createBrowserHistory__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_createBrowserHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history_createBrowserHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_1_history_createBrowserHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

BrowserRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  forceRefresh: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  keyLength: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};


/* harmony default export */ __webpack_exports__["a"] = BrowserRouter;

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_createHashHistory__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history_createHashHistory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_history_createHashHistory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(24);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = __WEBPACK_IMPORTED_MODULE_1_history_createHashHistory___default()(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["Router"], { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

HashRouter.propTypes = {
  basename: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  getUserConfirmation: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  hashType: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].oneOf(['hashbang', 'noslash', 'slash']),
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node
};


/* harmony default export */ __webpack_exports__["a"] = HashRouter;

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["MemoryRouter"]; });


/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Link__ = __webpack_require__(357);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      rest = _objectWithoutProperties(_ref, ['to', 'exact', 'strict', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */], _extends({
        to: to,
        className: isActive ? [activeClassName, className].join(' ') : className,
        style: isActive ? _extends({}, style, activeStyle) : style
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: __WEBPACK_IMPORTED_MODULE_2__Link__["a" /* default */].propTypes.to,
  exact: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  strict: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool,
  activeClassName: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  className: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  activeStyle: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  style: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  isActive: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func
};

/* harmony default export */ __webpack_exports__["a"] = NavLink;

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["Prompt"]; });


/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["Redirect"]; });


/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["Route"]; });


/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["Router"]; });


/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["StaticRouter"]; });


/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["Switch"]; });


/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["matchPath"]; });


/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_router__["withRouter"]; });


/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(584);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(585);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(586);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(587);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(588);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(589);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(590);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(69)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss", function() {
			var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!./../../../../node_modules/postcss-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(117);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(92);

var _applicationRoot = __webpack_require__(368);

var _store = __webpack_require__(369);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store.store },
  _react2.default.createElement(_applicationRoot.ApplicationRoot, null)
), document.getElementById('react-app'));

/***/ })

},[767]);
//# sourceMappingURL=ims.map