'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib = require('tslib');
var Component = _interopDefault(require('vue-class-component'));
var vuePropertyDecorator = require('vue-property-decorator');

var Options =
/** @class */
function () {
  function Options(prefix) {
    this.prefix = prefix || '';
  }

  return Options;
}();
var defaultConfig = new Options();

var HelloWorldComponent =
/** @class */
function (_super) {
  tslib.__extends(HelloWorldComponent, _super);

  function HelloWorldComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Object.defineProperty(HelloWorldComponent.prototype, "options", {
    get: function get() {
      return this.$HELLO_WORLD_DEFAULT_OPTIONS || defaultConfig;
    },
    enumerable: true,
    configurable: true
  });
  HelloWorldComponent = tslib.__decorate([Component], HelloWorldComponent);
  return HelloWorldComponent;
}(vuePropertyDecorator.Vue);

/* script */
var __vue_script__ = HelloWorldComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('h1', [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.options.prefix)
    }
  }), _vm._v(" Hello World!")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "HelloWorldComponent.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var HelloWorldComponent$1 = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var index = {
  install: function install(Vue, globalOptions) {
    var options = tslib.__assign(tslib.__assign({}, defaultConfig), globalOptions);

    Vue.prototype.$HELLO_WORLD_DEFAULT_OPTIONS = options;
    Vue.component('hello-world', HelloWorldComponent$1);
  }
};

exports.HelloWorldComponent = HelloWorldComponent$1;
exports.default = index;
//# sourceMappingURL=index.js.map
