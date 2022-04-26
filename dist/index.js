
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.globalName = factory());
})(this, (function () { 'use strict';

  var index = {
      object: "object",
      dataSource: "dataSource",
      string: "string",
      number: "number",
      img: "img",
      longtext: "longtext",
      boolean: "boolean",
      array: "array",
      ignore: "ignore",
      editor: "editor",
      audio: "audio" /** 音视频上传 */,
      select: "select" /** select下拉选择器 */,
      timestamp: "timestamp" /** 时间戳(日期时间选择器) */,
      css4number: "css4number" /** 4方向css数值编辑器 */,
      jsonUpload: "jsonUpdload" /** 上传json文件 */,
      animation: "animation" /** 上传动画文件 */,
  };

  return index;

}));
//# sourceMappingURL=index.js.map
