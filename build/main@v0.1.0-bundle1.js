
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/standards/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['24']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('32');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('33');
var template =__etcpack__scope_args__.default;


var _class = (_dec = Component({
  template: template,
  styles: [style]
}), _dec(_class2 = /*#__PURE__*/_createClass(function _class2() {
  _classCallCheck(this, _class2);
})) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/standards/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view ul{\n\nmargin-left: 0;\n\n}\n\n .view ul>li{\n\nposition: relative;\n\nlist-style-type: none;\n\npadding-left: 70px;\n\n}\n\n .view ul>li>h2>a{\n\ncolor: #036;\n\n}\n\n .view ul>li>h2>a:hover{\n\ntext-decoration: underline;\n\n}\n\n .view ul>li::before{\n\nbackground-image: url('./images/icon_sprite.png');\n\nposition: absolute;\n\ncontent: \" \";\n\ndisplay: inline-block;\n\nwidth: 44px;\n\nheight: 44px;\n\nleft: 0;\n\ntop: 10px;\n\n}\n\n .view ul>li.webdesign::before{\n\nbackground-position: -132px 0;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/standards/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view doc-view\">\r\n    <ul>\r\n        <li class=\"webdesign\">\r\n            <h2>\r\n                <a href=\"#/webdesign\" target=\"_blank\">Web设计和应用程序</a>\r\n            </h2>\r\n            <p>\r\n                Web设计和应用程序包括构建和渲染Web页面的标准，包括HTML、CSS、SVG、Ajax和别的技术。这一小节还包括残疾人可访问性、国际化以及移动设备等。\r\n            </p>\r\n        </li>\r\n    </ul>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
