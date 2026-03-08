/**
 * SPDX-License-Identifier: CC-BY-SA-4.0 OR Apache-2.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0|license2=Apache-2.0}}'
 *
 * Wikiplus
 *
 * @base {@link https://github.com/Wikiplus/Wikiplus}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/Wikiplus}
 * @source {@link https://github.com/FurryWiki-zh/FurryWikiGadgets/tree/master/src/Wikiplus/}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://furrywiki.org.cn/wiki/H:CC-BY-SA-4.0} OR Apache-2.0 {@link http://www.apache.org/licenses/LICENSE-2.0}
 */

/**
 * Copyright 2014-2024 Eridanus Sora (妹空酱)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/Wikiplus/Wikiplus.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.1.0";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
      userAgent = "YsArchives/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": constants_default.userAgent
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @param {params.contentmodel} contentmodel 内容模型 / Content Model
       * @returns {Promise<string>}
       */
      getPageInfo({
        title,
        revisionId
      }) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid,
                  contentmodel: _this2.pageInfoCache[title].contentmodel
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              const contentmodel = response.query.pages[Object.keys(response.query.pages)[0]].contentmodel;
              if (Object.keys(response.query.pages)[0] === "-1") {
                _this2.pageInfoCache[title] = {
                  contentmodel
                };
                return {
                  contentmodel
                };
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
                _this2.pageInfoCache[title].contentmodel = contentmodel;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid,
                contentmodel
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        })();
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText({
        section,
        revisionId
      }) {
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        })();
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(wikitext, title = "", config = {}) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        })();
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      } = {}) {
        return _asyncToGenerator(function* () {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        })();
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      contentmodel = "wikitext";
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       * @param {params.contentmodel} 页面内容模型 Content Model
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init({
        editToken = ""
      } = {}) {
        var _this4 = this;
        return _asyncToGenerator(function* () {
          const promiseArr = [_this4.getTimestamp(), _this4.getContentModel()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        })();
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得页面内容模型
       *
       * @param {Object} config
       * @param {string} config.revisionId
       */
      getContentModel() {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const {
            contentmodel
          } = yield wiki_default.getPageInfo({
            revisionId: _this7.revisionId,
            title: _this7.title
          });
          _this7.contentmodel = contentmodel || "wikitext";
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText({
        section = ""
      } = {}) {
        var _this8 = this;
        return _asyncToGenerator(function* () {
          const sec = section === -1 ? "" : section;
          if (_this8.sectionCache[sec]) {
            return _this8.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this8.revisionId
          });
          log_default.info("Wikitext of ".concat(_this8.title, "#").concat(section, " fetched."));
          _this8.sectionCache[sec] = wikiText;
          return wikiText;
        })();
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this9.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this10 = this;
        return _asyncToGenerator(function* () {
          if (!_this10.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this10.timestamp && !_this10.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this10.title,
            editToken: _this10.editToken,
            ..._this10.timestamp ? {
              timestamp: _this10.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this10.isNewPage ? {
                createonly: _this10.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this11 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Title");
        const summaryInputTitle = $("<p>").text(i18n_default.translate("redirect_summary_desc"));
        const summaryInput = $("<input>").addClass("Wikiplus-InterBox-Input").attr("id", "Wikiplus-SR-Summary");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append(summaryInputTitle).append(summaryInput).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $("#Wikiplus-SR-Title").val();
          const summary = $("#Wikiplus-SR-Summary").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              summary,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this11.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this11.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    summary,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this11.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this12 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this12.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    init_wikiplus();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x) {
          return _ref7.apply(this, arguments);
        };
      }();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x2) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref11 = _asyncToGenerator(function* ({
                title,
                summary,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const contentmodel = page.contentmodel;
                if (summary == "") {
                  summary = i18n_default.translate("redirect_from_summary", [title, currentPageName2]);
                }
                const content = (() => {
                  let content2;
                  switch (contentmodel) {
                    case "javascript":
                      content2 = '/* #REDIRECT */mw.loader.load("'.concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), '&action=raw&ctype=text/javascript");');
                      break;
                    case "css":
                      content2 = "/* #REDIRECT */@import url(".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?title=").concat(mw.util.wikiUrlencode(currentPageName2), "&action=raw&ctype=text/css);");
                      break;
                    case "Scribunto":
                      content2 = "return require [[".concat(currentPageName2, "]]");
                      break;
                    case "wikitext":
                    default:
                      content2 = "#REDIRECT [[".concat(currentPageName2, "]]");
                      break;
                  }
                  return content2;
                })();
                const payload = {
                  content,
                  config: {
                    summary
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x3) {
                return _ref11.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref12 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref12.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref13 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x4) {
          return _ref13.apply(this, arguments);
        };
      }();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
  }
});
//! src/Wikiplus/Wikiplus.ts
(function Wikiplus() {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const loader = /* @__PURE__ */ function() {
    var _ref14 = _asyncToGenerator(function* () {
      const {
        "visualeditor-enable": isVeEnable
      } = mw.user.options.get();
      if (isVeEnable) {
        yield mw.loader.using("ext.visualEditor.core");
      }
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
    });
    return function loader2() {
      return _ref14.apply(this, arguments);
    };
  }();
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYFlzQXJjaGl2ZXMvMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZSwgcGF5bG9hZHMgPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuXG5jbGFzcyBXaWtpIHtcblx0cGFnZUluZm9DYWNoZSA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdHJldHVybiBMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnN0cmluZ30gdGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0gcmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcGFyYW0ge3BhcmFtcy5jb250ZW50bW9kZWx9IGNvbnRlbnRtb2RlbCDlhoXlrrnmqKHlnosgLyBDb250ZW50IE1vZGVsXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkLFxuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLmNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0ge2NvbnRlbnRtb2RlbDogY29udGVudG1vZGVsfTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gcGFnZUluZm87XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLnmoQgV2lraXRleHRcblx0ICogR2V0IHdpa2l0ZXh0IG9mIHRoZSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgdGl0bGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZHM6IHJldmlzaW9uSWQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0XHRwYXJhbXMucnZzZWN0aW9uID0gc2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUluZm9bJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aXRsZSA9ICcnLCBjb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLnRpdGxlXG5cdCAqIEBwYXJhbSByb290MC5jb250ZW50XG5cdCAqIEBwYXJhbSByb290MC5lZGl0VG9rZW5cblx0ICogQHBhcmFtIHJvb3QwLnRpbWVzdGFtcFxuXHQgKiBAcGFyYW0gcm9vdDAuY29uZmlnXG5cdCAqIEBwYXJhbSByb290MC5hZGRpdGlvbmFsQ29uZmlnXG5cdCAqL1xuXHRhc3luYyBlZGl0KHt0aXRsZSwgY29udGVudCwgZWRpdFRva2VuLCB0aW1lc3RhbXAsIGNvbmZpZyA9IHt9LCBhZGRpdGlvbmFsQ29uZmlnID0ge319ID0ge30pIHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0XHRcdC4uLih0aW1lc3RhbXAgPyB7YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHQuLi5hZGRpdGlvbmFsQ29uZmlnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ25ldHdvcmtfZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0XHRpZiAocmVzcG9uc2UuZWRpdCkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jb2RlKSB7XG5cdFx0XHRcdC8vIEFidXNlIEZpbHRlclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpMThuLnRyYW5zbGF0ZSgnaGl0X2FidXNlZmlsdGVyJyl9OiR7cmVzcG9uc2UuZWRpdC5pbmZvLnJlcGxhY2UoJy9IaXQgQWJ1c2VGaWx0ZXI6IC9pZycsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsZXI7XCI+JHtyZXNwb25zZS5lZGl0Lndhcm5pbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5lcnJvci5jb2RlKTtcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5jb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X5oyH5a6a6aG16Z2i5pyA5paw5L+u6K6i57yW5Y+3XG5cdCAqIEdldCBsYXRlc3QgcmV2aXNpb25JZCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGl0bGVcblx0ICovXG5cdGFzeW5jIGdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRpdGxlKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KTtcblx0XHRyZXR1cm4gcmV2aXNpb25JZDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2lraSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDtcblx0ZWRpdFRva2VuO1xuXHR0aXRsZTtcblx0cmV2aXNpb25JZDtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0Y29udGVudG1vZGVsID0gJ3dpa2l0ZXh0JztcblxuXHRzZWN0aW9uQ2FjaGUgPSB7fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtwYXJhbXMudGl0bGV9IOmhtemdouagh+mimCBQYWdlIE5hbWUgKG9wdGlvbmFsKVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSDpobXpnaLkv67orqLnvJblj7cgUmV2aXNpb24gSWRcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSDpobXpnaLlhoXlrrnmqKHlnosgQ29udGVudCBNb2RlbFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdHRoaXMuaXNOZXdQYWdlID0gIXJldmlzaW9uSWQ7XG5cdH1cblxuXHQvKipcblx0ICog5Yid5aeL5YyWIOiOt+W+l+mhtemdokVkaXRUb2tlbuWSjOWIneWni1RpbWVTdGFtcFxuXHQgKiBJbml0aWFsaXphdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVkaXRUb2tlbiAob3B0aW9uYWwpIOWmguaenOaPkOS+m+S6hmVkaXRUb2tlbu+8jOWwhuS4jeS8muWGjeiOt+WPllxuXHQgKi9cblx0YXN5bmMgaW5pdCh7ZWRpdFRva2VuID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBwcm9taXNlQXJyID0gW3RoaXMuZ2V0VGltZXN0YW1wKCksIHRoaXMuZ2V0Q29udGVudE1vZGVsKCldO1xuXHRcdGlmICghZWRpdFRva2VuKSB7XG5cdFx0XHRwcm9taXNlQXJyLnB1c2godGhpcy5nZXRFZGl0VG9rZW4oKSk7XG5cdFx0fVxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VBcnIpO1xuXHRcdHRoaXMuaW5pdGVkID0gdHJ1ZTtcblx0XHRMb2cuaW5mbyhgUGFnZSBpbml0aWFsaXphdGlvbiBmb3IgJHt0aGlzLnRpdGxlfSMke3RoaXMucmV2aXNpb25JZH0gZmluaXNoZWQuYCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIEVkaXRUb2tlblxuXHQgKiBHZXQgRWRpdFRva2VuXG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXNlcicpO1xuXHRcdGlmIChtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICYmIG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgIT09ICcrXFxcXCcpIHtcblx0XHRcdC8vIOWmguaenCBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkg5Y+v5Lul55u05o6l6I635b6XIEVkaXRUb2tlbiDliJnnm7TmjqXov5Tlm55cblx0XHRcdC8vIFJldHVybiBFZGl0VG9rZW4gcmV0cmlldmVkIGZyb20gTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIGlmIGFjY2Vzc2libGVcblx0XHRcdHRoaXMuZWRpdFRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8g5LuOQVBJ6I635b6XRWRpdFRva2VuXG5cdFx0Ly8gR2V0IEVkaXRUb2tlbiBmcm9tIE1lZGlhV2lraSBBUElcblx0XHR0aGlzLmVkaXRUb2tlbiA9IGF3YWl0IFdpa2kuZ2V0RWRpdFRva2VuKCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X57yW6L6R5Z+65YeG5pe26Ze05oizXG5cdCAqIEdldCBCYXNlIFRpbWVzdGFtcFxuXHQgKi9cblx0YXN5bmMgZ2V0VGltZXN0YW1wKCkge1xuXHRcdGNvbnN0IHt0aW1lc3RhbXAsIHJldmlzaW9uSWR9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHRcdHRoaXMuaXNOZXdQYWdlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouWGheWuueaooeWei1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0Q29udGVudE1vZGVsKCkge1xuXHRcdGNvbnN0IHtjb250ZW50bW9kZWx9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLmNvbnRlbnRtb2RlbCA9IGNvbnRlbnRtb2RlbCB8fCAnd2lraXRleHQnO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/ICcnIDogc2VjdGlvbjtcblx0XHRpZiAodGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VjdGlvbkNhY2hlW3NlY107XG5cdFx0fVxuXHRcdGNvbnN0IHdpa2lUZXh0ID0gYXdhaXQgV2lraS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWMsXG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0fSk7XG5cdFx0TG9nLmluZm8oYFdpa2l0ZXh0IG9mICR7dGhpcy50aXRsZX0jJHtzZWN0aW9ufSBmZXRjaGVkLmApO1xuXHRcdHRoaXMuc2VjdGlvbkNhY2hlW3NlY10gPSB3aWtpVGV4dDtcblx0XHRyZXR1cm4gd2lraVRleHQ7XG5cdH1cblxuXHQvKipcblx0ICog6Kej5p6QIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCkge1xuXHRcdHJldHVybiBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkKSB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ01vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYE1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtJHt0eXBlfWApXG5cdFx0XHRcdC5hcHBlbmQoYDxzcGFuPiR7dGV4dH08L3NwYW4+YClcblx0XHQpO1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKS5mYWRlSW4oMzAwKTtcblx0XHR0aGlzLmJpbmQoKTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0Y2FsbGJhY2soJCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpKTtcblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGYpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlLCBzcGVlZCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQgfHwgMTUwLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTm90aWZpY2F0aW9uKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNvbnN0IHNsZWVwID0gKHRpbWUpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9fSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybCkge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zID0ge307XG5cdGxldCBtYXRjaDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IG1hdGNoWzNdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveCh0aXRsZSA9ICdXaWtpcGx1cycsIGNvbnRlbnQgPSAnJywgd2lkdGggPSA2MDAsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvL+aLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1vdXNlZG93bigoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC51bmJpbmQoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0LCBpZCkge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgPyAkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bikgOiAkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IHNlY3Rpb25CdG4gPVxuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHQ/ICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdFx0XHQnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuIG13LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIGVkaXQtcGFnZSBtdy11aS1pY29uLWZsdXNoLXJpZ2h0J1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgJzAuNzVlbScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd0aXRsZScsIGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0OiAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tZGl2aWRlcicpLnRleHQoJyB8ICcpKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0JCgnLm13LWVkaXRzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSBlZGl0VVJMXG5cdFx0XHRcdFx0Lm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pWzFdIC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0XHQucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pWzFdKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogc2VjdGlvblRhcmdldE5hbWUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdFx0PyAkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bilcblx0XHRcdFx0XHQ6ICQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9faW5pdF9xdWlja2VkaXQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXku7vmhI/pk77mjqXnvJbovpHlhaXlj6Ncblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRMaW5rRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5KHVybCk7XG5cdFx0XHRpZiAocGFyYW1zLmFjdGlvbiA9PT0gJ2VkaXQnICYmIHBhcmFtcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5zZWN0aW9uICE9PSAnbmV3Jykge1xuXHRcdFx0XHQkKHRoaXMpLmFmdGVyKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0XHRcdFx0XHRjbGFzczogJ1dpa2lwbHVzLUVkaXQtRXZlcnlXaGVyZUJ0bicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRleHQoYCgke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpfSlgKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHBhcmFtcy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBwYXJhbXMuc2VjdGlvbiA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9ICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9ICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0KHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCksXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJyksXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuaHRtbChlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0VzY+mAgOWHulxuXHRcdGlmIChlc2NFeGl0KSB7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoID09PSAyNykge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVRdWlja0VkaXRQYW5lbCgpIHtcblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLm9uRWRpdFxuXHQgKiBAcGFyYW0gcm9vdDAub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItVGl0bGUnKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXRUaXRsZSA9ICQoJzxwPicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3N1bW1hcnlfZGVzYycpKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItU3VtbWFyeScpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRpbnVlQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNvbnRpbnVlJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjb250aW51ZScpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZChpbnB1dClcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0VGl0bGUpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dClcblx0XHRcdC5hcHBlbmQoJCgnPGhyPicpKVxuXHRcdFx0LmFwcGVuZChhcHBseUJ0bilcblx0XHRcdC5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZGVzYycpLCBjb250ZW50LCA2MDApO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCgnI1dpa2lwbHVzLVNSLVRpdGxlJykudmFsKCk7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKTtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdGlmIChlcnJvci5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4uY2xpZW50LWRhcmttb2RlICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0ICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYmFzZSwgIzIwMjEyMik7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUludGVyQm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGUsICMyMDIxMjIpO1xuICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICAvKiDnoa7kv53pk77mjqXpopzoibLlj6/op4EgKi9cbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUludGVyQm94LUhlYWRlcixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMzZjO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveC1CdG4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gIGJvcmRlci1jb2xvcjogI2EyYTliMTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIGNvbG9yOiAjZWFlY2YwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNGQ0ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS0taG92ZXIsICM0ZDRkNGQpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJhc2UsICMyMDIxMjIpO1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuV2lraXBsdXMtSW50ZXJCb3ggYSxcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5XaWtpcGx1cy1JbnRlckJveCBhIHtcbiAgY29sb3I6ICMzNmM7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcm9ncmVzc2l2ZSwgIzM2Yyk7XG59XG4uY2xpZW50LWRhcmttb2RlIC5XaWtpcGx1cy1CdG4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuV2lraXBsdXMtQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhMmE5YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLldpa2lwbHVzLUJ0biBhLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLldpa2lwbHVzLUJ0biBhIHtcbiAgY29sb3I6ICNlYWVjZjA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbn1cbi5jbGllbnQtZGFya21vZGUgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UsXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlLCAjMjAyMTIyKTtcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5jbGllbnQtZGFya21vZGUgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Ugc3Bhbixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTMzMTE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc3VjY2Vzcy1zdWJ0bGUsICMwYTMzMTEpO1xuICBib3JkZXItbGVmdC1jb2xvcjogIzAwOGEwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MsICMwMDhhMDApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nLFxuaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtbmlnaHQgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzI3MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itd2FybmluZy1zdWJ0bGUsICMzMzI3MDApO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2Y0YmQwMDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcsICNmNGJkMDApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4sXG5odG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1uaWdodCAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICBjb2xvcjogI2VhZWNmMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xufVxuLmNsaWVudC1kYXJrbW9kZSAuTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvcixcbmh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW5pZ2h0IC5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMDUwMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1lcnJvci1zdWJ0bGUsICMzMzA1MDIpO1xuICBib3JkZXItbGVmdC1jb2xvcjogI2IwMGUwNjtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLWNvbG9yLWVycm9yLCAjYjAwZTA2KTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1iYXNlLCAjMjAyMTIyKTtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EyYTliMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLldpa2lwbHVzLUludGVyQm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTIyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtc3VidGxlLCAjMjAyMTIyKTtcbiAgICBib3JkZXItY29sb3I6ICNhMmE5YjE7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3ItYmFzZSwgI2EyYTliMSk7XG4gICAgY29sb3I6ICNlYWVjZjA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJhc2UsICNlYWVjZjApO1xuICAgIC8qIOehruS/nemTvuaOpeminOiJsuWPr+ingSAqL1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICMzNmM7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tY29sb3ItcHJvZ3Jlc3NpdmUsICMzNmMpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTJhOWIxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtSW50ZXJCb3gtQnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ZDRkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItaW50ZXJhY3RpdmUtLWhvdmVyLCAjNGQ0ZDRkKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtSW50ZXJCb3ggdGV4dGFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1iYXNlLCAjMjAyMTIyKTtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gICAgYm9yZGVyLWNvbG9yOiAjYTJhOWIxO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yLWJhc2UsICNhMmE5YjEpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1JbnRlckJveCBhIHtcbiAgICBjb2xvcjogIzM2YztcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJvZ3Jlc3NpdmUsICMzNmMpO1xuICB9XG4gIGh0bWwuc2tpbi10aGVtZS1jbGllbnRwcmVmLW9zIC5XaWtpcGx1cy1CdG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDIxMjI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZSwgIzIwMjEyMik7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTJhOWIxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvci1iYXNlLCAjYTJhOWIxKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuV2lraXBsdXMtQnRuIGEge1xuICAgIGNvbG9yOiAjZWFlY2YwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iYXNlLCAjZWFlY2YwKTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyMjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZSwgIzIwMjEyMik7XG4gICAgYm94LXNoYWRvdzogMCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICBodG1sLnNraW4tdGhlbWUtY2xpZW50cHJlZi1vcyAuTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMzMxMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXN1Y2Nlc3Mtc3VidGxlLCAjMGEzMzExKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzAwOGEwMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2VzcywgIzAwOGEwMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMjcwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXdhcm5pbmctc3VidGxlLCAjMzMyNzAwKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2Y0YmQwMDtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZywgI2Y0YmQwMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgICBjb2xvcjogI2VhZWNmMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmFzZSwgI2VhZWNmMCk7XG4gIH1cbiAgaHRtbC5za2luLXRoZW1lLWNsaWVudHByZWYtb3MgLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtZXJyb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzA1MDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1lcnJvci1zdWJ0bGUsICMzMzA1MDIpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjYjAwZTA2O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvciwgI2IwMGUwNik7XG4gIH1cbn1cbiIsICIvKipcbiAqIFdpa2lwbHVzXG4gKiBFcmlkYW51cyBTb3JhIDxzb3JhQHNvdW5kLm1vZT5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBXaWtpIGZyb20gJy4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncyc7XG5pbXBvcnQgTG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi91dGlscy9pMThuJztcbmltcG9ydCAnLi93aWtpcGx1cy5sZXNzJztcblxuJChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IFBhZ2VzID0ge307XG5cdGNvbnN0IGlzQ3VycmVudFBhZ2VFbXB0eSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMCAmJiBDb25zdGFudHMuYXJ0aWNsZUlkID09PSAwO1xuXG5cdC8qKlxuXHQgKiBHZXQgcGFnZSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoueJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimFxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZSA9IGFzeW5jICh7cmV2aXNpb25JZCwgdGl0bGV9KSA9PiB7XG5cdFx0aWYgKFBhZ2VzW3JldmlzaW9uSWRdKSB7XG5cdFx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1BhZ2UgPSBuZXcgUGFnZSh7XG5cdFx0XHRyZXZpc2lvbklkLFxuXHRcdFx0dGl0bGUsXG5cdFx0fSk7XG5cdFx0YXdhaXQgbmV3UGFnZS5pbml0KCk7XG5cdFx0UGFnZXNbcmV2aXNpb25JZF0gPSBuZXdQYWdlO1xuXHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0fTtcblxuXHRMb2cuaW5mbyhgV2lraXBsdXMgbm93IGxvYWRpbmcuIFZlcnNpb246ICR7Q29uc3RhbnRzLnZlcnNpb259YCk7XG5cblx0aWYgKCF3aW5kb3cubXcpIHtcblx0XHRjb25zb2xlLmxvZygnTWVkaWF3aWtpIEphdmFTY3JpcHQgbm90IGxvYWRlZCBvciBub3QgYSBNZWRpYXdpa2kgd2Vic2l0ZS4nKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXIsIHNlY3Rpb25OYW1lLCB0YXJnZXRQYWdlTmFtZX0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGlzT3RoZXJQYWdlID0gdGFyZ2V0UGFnZU5hbWUgIT09IGN1cnJlbnRQYWdlTmFtZTtcblx0XHRpZiAoaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkKSB7XG5cdFx0XHQvLyDlnKjljoblj7LniYjmnKznvJbovpHlhbbku5bpobXpnaLmnInpl67popgg5pqC5pe25LiN5pSv5oyBXG5cdFx0XHRMb2cuZXJyb3IoJ2Nyb3NzX3BhZ2VfaGlzdG9yeV9yZXZpc2lvbl9lZGl0X3dhcm5pbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2aXNpb25JZCA9IGlzT3RoZXJQYWdlID8gYXdhaXQgV2lraS5nZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0YXJnZXRQYWdlTmFtZSkgOiBDb25zdGFudHMucmV2aXNpb25JZDtcblxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtyZXZpc2lvbklkLCB0aXRsZTogdGFyZ2V0UGFnZU5hbWV9KTtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnZGVmYXVsdFN1bW1hcnknLCB7XG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uVGFyZ2V0TmFtZTogdGFyZ2V0UGFnZU5hbWUsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9XG5cdFx0XHRjdXN0b21TdW1tYXJ5IHx8XG5cdFx0XHQoc2VjdGlvbk5hbWVcblx0XHRcdFx0PyBgLyogJHtzZWN0aW9uTmFtZX0gKi8gJHtpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpfWBcblx0XHRcdFx0OiBpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnN1Y2Nlc3MoaTE4bi50cmFuc2xhdGUoJ2xvYWRpbmcnKSk7XG5cdFx0fSwgMjAwKTtcblx0XHRjb25zdCBzZWN0aW9uQ29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFncyA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0Li4uKHNlY3Rpb25OdW1iZXIgPT09IC0xID8ge30gOiB7c2VjdGlvbjogc2VjdGlvbk51bWJlcn0pLFxuXHRcdFx0XHRcdFx0Li4uKGVkaXRUYWdzLmxlbmd0aCA/IHt0YWdzOiBlZGl0VGFncy5qb2luKCd8Jyl9IDoge30pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc01pbm9yRWRpdCkge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5taW5vciA9ICd0cnVlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubm90bWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KGVkaXRQYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRlc2NFeGl0OiBlc2NUb0V4aXQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRcdG9uRWRpdDogYXN5bmMgKHt0aXRsZSwgc3VtbWFyeSwgZm9yY2VPdmVyd3JpdGUgPSBmYWxzZX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3RpdGxlfSk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdFx0XHRcdGNvbnN0IGNvbnRlbnRtb2RlbCA9IHBhZ2UuY29udGVudG1vZGVsO1xuXHRcdFx0XHRpZiAoc3VtbWFyeSA9PSAnJykge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZnJvbV9zdW1tYXJ5JywgW3RpdGxlLCBjdXJyZW50UGFnZU5hbWVdKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBjb250ZW50ID0gKCgpID0+IHtcblx0XHRcdFx0XHRsZXQgY29udGVudDtcblx0XHRcdFx0XHRzd2l0Y2ggKGNvbnRlbnRtb2RlbCkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnamF2YXNjcmlwdCc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovbXcubG9hZGVyLmxvYWQoXCIke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9qYXZhc2NyaXB0XCIpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnY3NzJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAvKiAjUkVESVJFQ1QgKi9AaW1wb3J0IHVybCgke2xvY2F0aW9uLnByb3RvY29sfS8vJHtcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5ob3N0XG5cdFx0XHRcdFx0XHRcdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9pbmRleC5waHA/dGl0bGU9JHttdy51dGlsLndpa2lVcmxlbmNvZGUoXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudFBhZ2VOYW1lXG5cdFx0XHRcdFx0XHRcdCl9JmFjdGlvbj1yYXcmY3R5cGU9dGV4dC9jc3MpO2A7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnU2NyaWJ1bnRvJzpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGByZXR1cm4gcmVxdWlyZSBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICd3aWtpdGV4dCc6XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYDtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0XHR9KSgpO1xuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQ6IGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICghZm9yY2VPdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRwYXlsb2FkLmNvbmZpZy5jcmVhdGVvbmx5ID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChwYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBDb25zdGFudHMuYXJ0aWNsZVBhdGgucmVwbGFjZSgvXFwkMS9naSwgdGl0bGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdFx0b25TdWJtaXQ6ICh7c2V0dGluZ3N9KSA9PiB7XG5cdFx0XHRcdEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfU2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVByZWxvYWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXJ9KSA9PiB7XG5cdFx0YXdhaXQgY3VycmVudFBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0fTtcblxuXHRVSS5pbnNlcnRUb3BRdWlja0VkaXRFbnRyeShoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydExpbmtFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24oaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQpO1xuXHRVSS5iaW5kUHJlbG9hZEV2ZW50cyhoYW5kbGVQcmVsb2FkKTtcbn0pO1xuXG5leHBvcnQge307XG4iLCAiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXgtd2lkdGgnLCBgY2FsYygke3dpbmRvd1dpZHRofXB4IC0gMmVtKWApO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5cbihmdW5jdGlvbiBXaWtpcGx1cygpOiB2b2lkIHtcblx0Y29uc3Qge3dnQWN0aW9uLCB3Z0lzQXJ0aWNsZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICF3Z0lzQXJ0aWNsZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGxvYWRlciA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRcdC8qIHNlZSA8aHR0cHM6Ly9naXRodWIuY29tL1dpa2lwbHVzL1dpa2lwbHVzL2lzc3Vlcy82NT4gKi9cblx0XHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQudmlzdWFsRWRpdG9yLmNvcmUnKTtcblx0XHR9XG5cblx0XHRhd2FpdCBpbXBvcnQoJy4vbW9kdWxlcy9pbmRleCcpO1xuXHRcdGF3YWl0IGltcG9ydCgnLi9yZXNpemUnKTtcblx0fTtcblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QjtBQUN0QkEsNEJBQWtCdk0sSUFBSSxhQUFBLFFBQUF4TCxPQUFxQjhYLGFBQVcsV0FBQSxDQUFXO1FBQ2xFO01BQ0QsQ0FBQztJQUNGLENBQUM7RUFBQTtBQUFBLENBQUE7O0NDUkEsU0FBU0UsV0FBaUI7QUFDMUIsUUFBTTtJQUFDQztJQUFVQztFQUFXLElBQUlqWixHQUFHQyxPQUFPQyxJQUFJO0FBQzlDLE1BQUk4WSxhQUFhLFVBQVUsQ0FBQ0MsYUFBYTtBQUN4QztFQUNEO0FBRUEsUUFBTWhQLFNBQUEsMkJBQUE7QUFBQSxRQUFBaVAsU0FBQTFYLGtCQUFTLGFBQTJCO0FBQ3pDLFlBQU07UUFBQyx1QkFBdUIyWDtNQUFVLElBQUluWixHQUFHbUssS0FBS2lQLFFBQVFsWixJQUFJO0FBR2hFLFVBQUlpWixZQUFZO0FBQ2YsY0FBTW5aLEdBQUdpSyxPQUFPQyxNQUFNLHVCQUF1QjtNQUM5QztBQUVBLFlBQU1KLFFBQUFnRCxRQUFBLEVBQUE2TCxLQUFBLE9BQUFuRCxhQUFBLEdBQUFELGdCQUFBO0FBQ04sWUFBTXpMLFFBQUFnRCxRQUFBLEVBQUE2TCxLQUFBLE9BQUFILFlBQUEsR0FBQUYsZUFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBVk1yTyxVQUFBO0FBQUEsYUFBQWlQLE9BQUFsRCxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEVBQUE7QUFZTixPQUFLaE0sT0FBTztBQUNiLEdBQUc7IiwKICAibmFtZXMiOiBbIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAidXNlckFnZW50IiwgImNvbmNhdCIsICJSZXF1ZXN0cyIsICJyZXF1ZXN0c19kZWZhdWx0IiwgImluaXRfcmVxdWVzdHMiLCAiYmFzZSIsICJsb2NhdGlvbiIsICJwcm90b2NvbCIsICJob3N0IiwgInF1ZXJ5IiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInVybCIsICJVUkwiLCAiX2kiLCAiX09iamVjdCRrZXlzIiwgIk9iamVjdCIsICJrZXlzIiwgImxlbmd0aCIsICJrZXkiLCAic2VhcmNoUGFyYW1zIiwgImFwcGVuZCIsICJyZXNwb25zZSIsICJmZXRjaCIsICJjcmVkZW50aWFscyIsICJoZWFkZXJzIiwgImpzb24iLCAicG9zdCIsICJwYXlsb2FkIiwgImZvcm0iLCAiRm9ybURhdGEiLCAiX2kyIiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInZhbHVlIiwgIm1ldGhvZCIsICJib2R5IiwgIkkxOG4iLCAiaTE4bl9kZWZhdWx0IiwgImluaXRfaTE4biIsICJsYW5ndWFnZSIsICJpMThuRGF0YSIsICJzZXNzaW9uVXBkYXRlTG9nIiwgImNvbnN0cnVjdG9yIiwgIkpTT04iLCAicGFyc2UiLCAibG9jYWxTdG9yYWdlIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJicm93c2VyTGFuZ3VhZ2UiLCAiaTE4bkNhY2hlIiwgImdldEl0ZW0iLCAiX2kzIiwgIl9PYmplY3Qka2V5czIiLCAic2V0SXRlbSIsICJ0cmFuc2xhdGUiLCAicGxhY2Vob2xkZXJzIiwgInJlc3VsdCIsICJsb2FkTGFuZ3VhZ2UiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgInMiLCAibiIsICJkb25lIiwgImluZGV4IiwgInBsYWNlaG9sZGVyIiwgImVyciIsICJlIiwgImYiLCAiX3RoaXMiLCAiaW5jbHVkZXMiLCAibm93VmVyc2lvbiIsICJwdXNoIiwgIl9fdmVyc2lvbiIsICJjb25zb2xlIiwgImluZm8iLCAic3RyaW5naWZ5IiwgIldpa2lwbHVzRXJyb3IiLCAiTG9nIiwgImxvZ19kZWZhdWx0IiwgImluaXRfbG9nIiwgIkVycm9yIiwgIm1lc3NhZ2UiLCAiY29kZSIsICJkZWJ1ZyIsICJlcnJvciIsICJlcnJvckNvZGUiLCAicGF5bG9hZHMiLCAidGVtcGxhdGUiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiaSIsICJ2IiwgIlJlZ0V4cCIsICJXaWtpIiwgIndpa2lfZGVmYXVsdCIsICJpbml0X3dpa2kiLCAicGFnZUluZm9DYWNoZSIsICJnZXRFZGl0VG9rZW4iLCAibWV0YSIsICJmb3JtYXQiLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJnZXRQYWdlSW5mbyIsICJ0aXRsZSIsICJfdGhpczIiLCAicGFyYW1zIiwgInByb3AiLCAicnZwcm9wIiwgInJldmlkcyIsICJ0aW1lc3RhbXAiLCAicmV2aWQiLCAiY29udGVudG1vZGVsIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiZ2V0V2lraVRleHQiLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGFyc2VXaWtpVGV4dCIsICJ3aWtpdGV4dCIsICJ0ZXh0IiwgInBzdCIsICJlZGl0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXJuaW5nIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiaW5pdCIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiZ2V0Q29udGVudE1vZGVsIiwgIlByb21pc2UiLCAiYWxsIiwgIl90aGlzNSIsICJsb2FkZXIiLCAidXNpbmciLCAidXNlciIsICJfdGhpczYiLCAiX3RoaXM3IiwgIl90aGlzOCIsICJzZWMiLCAid2lraVRleHQiLCAiX3RoaXM5IiwgIl90aGlzMTAiLCAiY3JlYXRlb25seSIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiJCIsICJkaXNwbGF5IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxMSIsICJpbnB1dCIsICJzdW1tYXJ5SW5wdXRUaXRsZSIsICJzdW1tYXJ5SW5wdXQiLCAiYXBwbHlCdG4iLCAiY2FuY2VsQnRuIiwgImNvbnRpbnVlQnRuIiwgImRpYWxvZyIsICJmb3JjZU92ZXJ3cml0ZSIsICJoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbCIsICJlcnJvcjIiLCAic2hvd1NldHRpbmdzUGFuZWwiLCAib25TdWJtaXQiLCAiX3RoaXMxMiIsICJXaWtpcGx1c19TZXR0aW5ncyIsICJzZXR0aW5ncyIsICJzYXZlZEJhbm5lciIsICJoaWRlU2V0dGluZ3NQYW5lbCIsICJiaW5kUHJlbG9hZEV2ZW50cyIsICJvblByZWxvYWQiLCAiU2V0dGluZ3MiLCAic2V0dGluZ3NfZGVmYXVsdCIsICJpbml0X3NldHRpbmdzIiwgImdldFNldHRpbmciLCAib2JqZWN0IiwgInciLCAiY3VzdG9tU2V0dGluZ0Z1bmN0aW9uIiwgIkZ1bmN0aW9uIiwgIl9pNCIsICJfT2JqZWN0JGtleXMzIiwgImtleTIiLCAiaW5pdF93aWtpcGx1cyIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3gyIiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMTAiLCAiX3JlZjExIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiY29udGVudDIiLCAidXRpbCIsICJ3aWtpVXJsZW5jb2RlIiwgIl94MyIsICJoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQiLCAiX3JlZjEyIiwgImhhbmRsZVByZWxvYWQiLCAiX3JlZjEzIiwgIl94NCIsICJyZXNpemVfZXhwb3J0cyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJpbml0X3Jlc2l6ZSIsICJyZXF1aXJlIiwgImdldEJvZHkiLCAidGhlbiIsICIkYm9keSIsICJ3aW5kb3dXaWR0aCIsICIkd2lraXBsdXNJbnRlcmJveCIsICJXaWtpcGx1cyIsICJ3Z0FjdGlvbiIsICJ3Z0lzQXJ0aWNsZSIsICJfcmVmMTQiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIl0KfQo=
