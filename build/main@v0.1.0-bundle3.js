
/*************************** [bundle] ****************************/
// Original file:./src/App/pages/htmlcss/index.ts
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var _dec, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

__etcpack__scope_args__=window.__etcpack__getBundle('1');
var Component=__etcpack__scope_args__.Component;

__etcpack__scope_args__=window.__etcpack__getBundle('36');
var style =__etcpack__scope_args__.default;

__etcpack__scope_args__=window.__etcpack__getBundle('37');
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
      document.getElementsByTagName('title')[0].innerText = "HTML & CSS - W3C";
    }
  }]);

  return _class2;
}()) || _class2);

__etcpack__scope_bundle__.default=_class;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/htmlcss/index.scss
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "\n .view>header{\n\nline-height: 66px;\n\nbackground-color: #dbe7f0;\n\nfont-weight: 800;\n\nfont-size: 20px;\n\npadding-left: 20px;\n\nposition: relative;\n\n}\n\n .view>header::after{\n\nbackground-image: url('./images/icon_sprite.png');\n\nbackground-position: -132px 0;\n\ndisplay: inline-block;\n\nwidth: 44px;\n\nheight: 44px;\n\nposition: absolute;\n\ncontent: \" \";\n\nright: 11px;\n\ntop: 11px;\n\n}\n"
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/App/pages/htmlcss/index.html
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= "<div class=\"view doc-view\">\r\n    <header>\r\n        HTML & CSS\r\n    </header>\r\n    <p>\r\n        HTML（超文本标记语言）和CSS（级联样式表）是构建Web页面的两个核心技术。\r\n    </p>\r\n</div>"
  
    return __etcpack__scope_bundle__;
}
