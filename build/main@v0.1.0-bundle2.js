
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webdesign/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['25']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('34');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('35');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/function () {
  function _class2() {
    _classCallCheck(this, _class2);
  }

  _createClass(_class2, [{
    key: "$mounted",
    value: function $mounted() {
      document.getElementsByTagName('title')[0].innerText = "Web Design and Applications - W3C";
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webdesign/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view>header{\n\nline-height: 66px;\n\nbackground-color: #dbe7f0;\n\nfont-weight: 800;\n\nfont-size: 20px;\n\npadding-left: 20px;\n\nposition: relative;\n\n}\n\n .view>header::after{\n\nbackground-image: url('./images/icon_sprite.png');\n\nbackground-position: -132px 0;\n\ndisplay: inline-block;\n\nwidth: 44px;\n\nheight: 44px;\n\nposition: absolute;\n\ncontent: \" \";\n\nright: 11px;\n\ntop: 11px;\n\n}\n\n .view>ul{\n\ncolumn-count: 3;\n\n}\n\n .view>ul>li{\n\nbreak-inside: avoid;\n\nlist-style-type: none;\n\npadding: 20px;\n\n}\n\n .view>ul>li>h2>a{\n\ncolor: #036;\n\nbackground-image: url(./images/header-link.gif);\n\nbackground-repeat: no-repeat;\n\nbackground-position: right center;\n\npadding-right: 20px;\n\nfont-size: 20px;\n\n}\n\n .view>ul>li>h2>a:hover{\n\ntext-decoration: underline;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/webdesign/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view doc-view\">\r\n    <header>\r\n        Web设计和应用程序\r\n    </header>\r\n    <p>\r\n        Web设计和应用程序包括构建和渲染Web页面的标准，包括HTML、CSS、SVG、Ajax和别的技术。这一小节还包括残疾人可访问性、国际化以及移动设备等。\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            <h2>\r\n                <a href=\"#/htmlcss\" target=\"_blank\">\r\n                    HTML & CSS\r\n                </a>\r\n            </h2>\r\n            <p>\r\n                HTML和CSS是构建Web页面的基础技术：HTML构建页面的主体结构、CSS用于样式和布局，包括字体。寻找更好的构建Web页面资源和工具。\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
