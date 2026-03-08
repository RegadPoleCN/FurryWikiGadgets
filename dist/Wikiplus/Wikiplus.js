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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvY29uc3RhbnRzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3JlcXVlc3RzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2kxOG4uanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvbG9nLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3NlcnZpY2VzL3dpa2kuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS9wYWdlLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvbm90aWZpY2F0aW9uLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL3NsZWVwLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2hlbHBlcnMuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvY29yZS91aS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zZXR0aW5ncy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy93aWtpcGx1cy5sZXNzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2luZGV4LmpzIiwgInNyYy9XaWtpcGx1cy9yZXNpemUudHMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMS4wJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cblx0dXNlckFnZW50ID0gYFlzQXJjaGl2ZXMvMS4xIFdpa2lwbHVzLyR7dGhpcy52ZXJzaW9ufSAoJHt0aGlzLndpa2lJZH0pYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogQ29uc3RhbnRzLnVzZXJBZ2VudCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcblx0YXN5bmMgcG9zdChwYXlsb2FkKSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0Zm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGF5bG9hZCkpIHtcblx0XHRcdGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRib2R5OiBmb3JtLFxuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0cztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgSTE4biB7XG5cdGxhbmd1YWdlO1xuXHRpMThuRGF0YSA9IHt9O1xuXHRzZXNzaW9uVXBkYXRlTG9nID0gW107XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBsYW5ndWFnZTtcblx0XHR0cnkge1xuXHRcdFx0bGFuZ3VhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSlbJ2xhbmd1YWdlJ10gfHwgbmF2aWdhdG9yLmxhbmd1YWdlLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRsYW5ndWFnZSA9IChuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZSlcblx0XHRcdFx0LnJlcGxhY2UoL2hhbltzdF0tPy9pLCAnJykgLy8gZm9yIGxhbmd1YWdlcyBsaWtlIHpoLUhhbnMtQ05cblx0XHRcdFx0LnRvTG93ZXJDYXNlKCk7XG5cdFx0fVxuXHRcdHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcblx0XHQvLyBNZXJnZSB3aXRoIGxvY2FsU3RvcmFnZSBpMThuIGNhY2hlXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGkxOG5DYWNoZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScpKTtcblx0XHRcdGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGkxOG5DYWNoZSkpIHtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtrZXldID0gaTE4bkNhY2hlW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBGYWlsIHRvIHBhcnNlIGkxOG4gY2FjaGUsIHJlc2V0XG5cdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgJ3t9Jyk7XG5cdFx0fVxuXHR9XG5cdHRyYW5zbGF0ZShrZXksIHBsYWNlaG9sZGVycyA9IFtdKSB7XG5cdFx0bGV0IHJlc3VsdCA9ICcnO1xuXHRcdGlmICh0aGlzLmxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpIHtcblx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdW2tleV07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB0cnkgdXBkYXRlIGxhbmd1YWdlIHZlcmlzb25cblx0XHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0XHRcdGlmIChrZXkgaW4gdGhpcy5pMThuRGF0YVsnZW4tdXMnXSkge1xuXHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIEVuZ2xpc2hcblx0XHRcdFx0XHRyZXN1bHQgPSB0aGlzLmkxOG5EYXRhWydlbi11cyddW2tleV07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0ga2V5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdH1cblxuXHRcdGlmIChwbGFjZWhvbGRlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Zm9yIChjb25zdCBbaW5kZXgsIHBsYWNlaG9sZGVyXSBvZiBwbGFjZWhvbGRlcnMuZW50cmllcygpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGAkJHtpbmRleCArIDF9YCwgcGxhY2Vob2xkZXIpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGFzeW5jIGxvYWRMYW5ndWFnZShsYW5ndWFnZSkge1xuXHRcdGlmICh0aGlzLnNlc3Npb25VcGRhdGVMb2cuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG5cdFx0XHQvLyBIYXMgYmVlbiB1cGRhdGVkIHRoaXMgc2Vzc2lvbi5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKFxuXHRcdFx0XHRhd2FpdCBmZXRjaChcblx0XHRcdFx0XHRgaHR0cHM6Ly9naXRjZG4ucWl1d2VuLm5ldC5jbi9JbnRlcmZhY2VBZG1pbi9XaWtpcGx1cy9yYXcvYnJhbmNoL2Rldi9sYW5ndWFnZXMvJHtsYW5ndWFnZX0uanNvbmBcblx0XHRcdFx0KVxuXHRcdFx0KS5qc29uKCk7XG5cdFx0XHRjb25zdCBub3dWZXJzaW9uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1dpa2lwbHVzX0xhbmd1YWdlVmVyc2lvbicpIHx8ICcwMDAnO1xuXHRcdFx0dGhpcy5zZXNzaW9uVXBkYXRlTG9nLnB1c2gobGFuZ3VhZ2UpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLl9fdmVyc2lvbiAhPT0gbm93VmVyc2lvbiB8fCAhKGxhbmd1YWdlIGluIHRoaXMuaTE4bkRhdGEpKSB7XG5cdFx0XHRcdC8vIExhbmd1YWdlIGdldCB1cGRhdGVkXG5cdFx0XHRcdGNvbnNvbGUuaW5mbyhgVXBkYXRlICR7bGFuZ3VhZ2V9IHN1cHBvcnQgdG8gdmVyc2lvbiAke3Jlc3BvbnNlLl9fdmVyc2lvbn1gKTtcblx0XHRcdFx0dGhpcy5pMThuRGF0YVtsYW5ndWFnZV0gPSByZXNwb25zZTtcblx0XHRcdFx0Ly8gVXBkYXRlIGxvY2FsU3RvcmFnZSBjYWNoZVxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJywgSlNPTi5zdHJpbmdpZnkodGhpcy5pMThuRGF0YSkpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gVW5zdXBwb3J0ZWQgbGFuZ3VhZ2Vcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEkxOG4oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IGkxOG4gZnJvbSAnLi9pMThuJztcblxuY2xhc3MgV2lraXBsdXNFcnJvciBleHRlbmRzIEVycm9yIHtcblx0Y29uc3RydWN0b3IobWVzc2FnZSwgY29kZSkge1xuXHRcdHN1cGVyKG1lc3NhZ2UpO1xuXHRcdHRoaXMuY29kZSA9IGNvZGU7XG5cdH1cbn1cblxuY29uc3QgTG9nID0ge1xuXHRkZWJ1ZyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmRlYnVnKGBbV2lraXBsdXMtREVCVUddICR7bWVzc2FnZX1gKTtcblx0fSxcblx0aW5mbyhtZXNzYWdlID0gJycpIHtcblx0XHRjb25zb2xlLmluZm8oYFtXaWtpcGx1cy1JTkZPXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGVycm9yKGVycm9yQ29kZSwgcGF5bG9hZHMgPSBbXSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGkxOG4udHJhbnNsYXRlKGVycm9yQ29kZSk7XG5cdFx0aWYgKHBheWxvYWRzLmxlbmd0aCA+IDApIHtcblx0XHRcdC8vIEZpbGxcblx0XHRcdGZvciAoY29uc3QgW2ksIHZdIG9mIHBheWxvYWRzLmVudHJpZXMoKSkge1xuXHRcdFx0XHR0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cChgXFxcXCR7aSArIDF9YCwgJ2lnJyksIHYpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmVycm9yKGBbV2lraXBsdXMtRVJST1JdICR7dGVtcGxhdGV9YCk7XG5cdFx0dGhyb3cgbmV3IFdpa2lwbHVzRXJyb3IoYCR7dGVtcGxhdGV9YCwgZXJyb3JDb2RlKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZztcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gJy4uL3V0aWxzL3JlcXVlc3RzJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuXG5jbGFzcyBXaWtpIHtcblx0cGFnZUluZm9DYWNoZSA9IHt9O1xuXHQvKipcblx0ICog6I635b6XIEVkaXQgVG9rZW5cblx0ICogR2V0IEVkaXQgVG9rZW5cblx0ICpcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHQvLyDlsJ3or5Xku44gQVBJIOiOt+W+lyBFZGl0VG9rZW5cblx0XHQvLyBUcnkgdG8gZ2V0IEVkaXRUb2tlbiBmcm9tIEFQSVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0fSk7XG5cdFx0aWYgKFxuXHRcdFx0cmVzcG9uc2UucXVlcnkgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2VucyAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbiAhPT0gJytcXFxcJ1xuXHRcdCkge1xuXHRcdFx0cmV0dXJuIHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fVxuXHRcdHJldHVybiBMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLkuIrkuIDniYjmnKzml7bpl7TmiLNcblx0ICogR2V0IHRoZSB0aW1lc3RhbXAgb2YgdGhlIGxhc3QgcmV2aXNpb24gb2YgcGFnZSBzcGVjaWZpZWQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnN0cmluZ30gdGl0bGUg6aG16Z2i5ZCNIC8gUGFnZW5hbWVcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0gcmV2aXNpb25JZCDkv67orqLniYjmnKzlj7cgLyBSZXZpc2lvbiBJRFxuXHQgKiBAcGFyYW0ge3BhcmFtcy5jb250ZW50bW9kZWx9IGNvbnRlbnRtb2RlbCDlhoXlrrnmqKHlnosgLyBDb250ZW50IE1vZGVsXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkLFxuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLmNvbnRlbnRtb2RlbCxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhcmFtcy50aXRsZXMgPSB0aXRsZTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0Y29uc3QgY29udGVudG1vZGVsID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5jb250ZW50bW9kZWw7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0ge2NvbnRlbnRtb2RlbDogY29udGVudG1vZGVsfTtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Y29udGVudG1vZGVsOiBjb250ZW50bW9kZWwsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRpZiAodGl0bGUpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdID0gcGFnZUluZm87XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS5jb250ZW50bW9kZWwgPSBjb250ZW50bW9kZWw7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHBhZ2VJbmZvLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRyZXZpc2lvbklkOiBwYWdlSW5mby5yZXZpZCxcblx0XHRcdFx0XHRjb250ZW50bW9kZWw6IGNvbnRlbnRtb2RlbCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDojrflvpfpobXpnaLnmoQgV2lraXRleHRcblx0ICogR2V0IHdpa2l0ZXh0IG9mIHRoZSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgdGl0bGVcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWQg54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvbiDmrrXokL3lj7dcblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSB3aWtpdGV4dOWGheWuuVxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24sIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRyZXZpZHM6IHJldmlzaW9uSWQsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoc2VjdGlvbikge1xuXHRcdFx0XHRwYXJhbXMucnZzZWN0aW9uID0gc2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMuZ2V0KHBhcmFtcyk7XG5cdFx0XHRpZiAocmVzcG9uc2UucXVlcnkgJiYgcmVzcG9uc2UucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0aWYgKE9iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXSA9PT0gJy0xJykge1xuXHRcdFx0XHRcdC8vIOS4jeWtmOWcqOi/meS4gOmhtemdolxuXHRcdFx0XHRcdC8vIFBhZ2Ugbm90IGZvdW5kLlxuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBwYWdlSW5mbyA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzW09iamVjdC5rZXlzKHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKVswXV0ucmV2aXNpb25zWzBdO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUluZm9bJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aXRsZSA9ICcnLCBjb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLnRpdGxlXG5cdCAqIEBwYXJhbSByb290MC5jb250ZW50XG5cdCAqIEBwYXJhbSByb290MC5lZGl0VG9rZW5cblx0ICogQHBhcmFtIHJvb3QwLnRpbWVzdGFtcFxuXHQgKiBAcGFyYW0gcm9vdDAuY29uZmlnXG5cdCAqIEBwYXJhbSByb290MC5hZGRpdGlvbmFsQ29uZmlnXG5cdCAqL1xuXHRhc3luYyBlZGl0KHt0aXRsZSwgY29udGVudCwgZWRpdFRva2VuLCB0aW1lc3RhbXAsIGNvbmZpZyA9IHt9LCBhZGRpdGlvbmFsQ29uZmlnID0ge319ID0ge30pIHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0XHRcdC4uLih0aW1lc3RhbXAgPyB7YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHQuLi5hZGRpdGlvbmFsQ29uZmlnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ25ldHdvcmtfZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0XHRpZiAocmVzcG9uc2UuZWRpdCkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jb2RlKSB7XG5cdFx0XHRcdC8vIEFidXNlIEZpbHRlclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpMThuLnRyYW5zbGF0ZSgnaGl0X2FidXNlZmlsdGVyJyl9OiR7cmVzcG9uc2UuZWRpdC5pbmZvLnJlcGxhY2UoJy9IaXQgQWJ1c2VGaWx0ZXI6IC9pZycsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsZXI7XCI+JHtyZXNwb25zZS5lZGl0Lndhcm5pbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5lcnJvci5jb2RlKTtcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5jb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X5oyH5a6a6aG16Z2i5pyA5paw5L+u6K6i57yW5Y+3XG5cdCAqIEdldCBsYXRlc3QgcmV2aXNpb25JZCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGl0bGVcblx0ICovXG5cdGFzeW5jIGdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRpdGxlKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KTtcblx0XHRyZXR1cm4gcmV2aXNpb25JZDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2lraSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDtcblx0ZWRpdFRva2VuO1xuXHR0aXRsZTtcblx0cmV2aXNpb25JZDtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0Y29udGVudG1vZGVsID0gJ3dpa2l0ZXh0JztcblxuXHRzZWN0aW9uQ2FjaGUgPSB7fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHtwYXJhbXMudGl0bGV9IOmhtemdouagh+mimCBQYWdlIE5hbWUgKG9wdGlvbmFsKVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSDpobXpnaLkv67orqLnvJblj7cgUmV2aXNpb24gSWRcblx0ICogQHBhcmFtIHtwYXJhbXMuY29udGVudG1vZGVsfSDpobXpnaLlhoXlrrnmqKHlnosgQ29udGVudCBNb2RlbFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdHRoaXMuaXNOZXdQYWdlID0gIXJldmlzaW9uSWQ7XG5cdH1cblxuXHQvKipcblx0ICog5Yid5aeL5YyWIOiOt+W+l+mhtemdokVkaXRUb2tlbuWSjOWIneWni1RpbWVTdGFtcFxuXHQgKiBJbml0aWFsaXphdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVkaXRUb2tlbiAob3B0aW9uYWwpIOWmguaenOaPkOS+m+S6hmVkaXRUb2tlbu+8jOWwhuS4jeS8muWGjeiOt+WPllxuXHQgKi9cblx0YXN5bmMgaW5pdCh7ZWRpdFRva2VuID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBwcm9taXNlQXJyID0gW3RoaXMuZ2V0VGltZXN0YW1wKCksIHRoaXMuZ2V0Q29udGVudE1vZGVsKCldO1xuXHRcdGlmICghZWRpdFRva2VuKSB7XG5cdFx0XHRwcm9taXNlQXJyLnB1c2godGhpcy5nZXRFZGl0VG9rZW4oKSk7XG5cdFx0fVxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VBcnIpO1xuXHRcdHRoaXMuaW5pdGVkID0gdHJ1ZTtcblx0XHRMb2cuaW5mbyhgUGFnZSBpbml0aWFsaXphdGlvbiBmb3IgJHt0aGlzLnRpdGxlfSMke3RoaXMucmV2aXNpb25JZH0gZmluaXNoZWQuYCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIEVkaXRUb2tlblxuXHQgKiBHZXQgRWRpdFRva2VuXG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXNlcicpO1xuXHRcdGlmIChtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICYmIG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgIT09ICcrXFxcXCcpIHtcblx0XHRcdC8vIOWmguaenCBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkg5Y+v5Lul55u05o6l6I635b6XIEVkaXRUb2tlbiDliJnnm7TmjqXov5Tlm55cblx0XHRcdC8vIFJldHVybiBFZGl0VG9rZW4gcmV0cmlldmVkIGZyb20gTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIGlmIGFjY2Vzc2libGVcblx0XHRcdHRoaXMuZWRpdFRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8g5LuOQVBJ6I635b6XRWRpdFRva2VuXG5cdFx0Ly8gR2V0IEVkaXRUb2tlbiBmcm9tIE1lZGlhV2lraSBBUElcblx0XHR0aGlzLmVkaXRUb2tlbiA9IGF3YWl0IFdpa2kuZ2V0RWRpdFRva2VuKCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X57yW6L6R5Z+65YeG5pe26Ze05oizXG5cdCAqIEdldCBCYXNlIFRpbWVzdGFtcFxuXHQgKi9cblx0YXN5bmMgZ2V0VGltZXN0YW1wKCkge1xuXHRcdGNvbnN0IHt0aW1lc3RhbXAsIHJldmlzaW9uSWR9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHRcdHRoaXMuaXNOZXdQYWdlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouWGheWuueaooeWei1xuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0Q29udGVudE1vZGVsKCkge1xuXHRcdGNvbnN0IHtjb250ZW50bW9kZWx9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLmNvbnRlbnRtb2RlbCA9IGNvbnRlbnRtb2RlbCB8fCAnd2lraXRleHQnO1xuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/ICcnIDogc2VjdGlvbjtcblx0XHRpZiAodGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VjdGlvbkNhY2hlW3NlY107XG5cdFx0fVxuXHRcdGNvbnN0IHdpa2lUZXh0ID0gYXdhaXQgV2lraS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWMsXG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0fSk7XG5cdFx0TG9nLmluZm8oYFdpa2l0ZXh0IG9mICR7dGhpcy50aXRsZX0jJHtzZWN0aW9ufSBmZXRjaGVkLmApO1xuXHRcdHRoaXMuc2VjdGlvbkNhY2hlW3NlY10gPSB3aWtpVGV4dDtcblx0XHRyZXR1cm4gd2lraVRleHQ7XG5cdH1cblxuXHQvKipcblx0ICog6Kej5p6QIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCkge1xuXHRcdHJldHVybiBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkKSB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ01vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYE1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtJHt0eXBlfWApXG5cdFx0XHRcdC5hcHBlbmQoYDxzcGFuPiR7dGV4dH08L3NwYW4+YClcblx0XHQpO1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKS5mYWRlSW4oMzAwKTtcblx0XHR0aGlzLmJpbmQoKTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0Y2FsbGJhY2soJCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpKTtcblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGYpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlLCBzcGVlZCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQgfHwgMTUwLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTm90aWZpY2F0aW9uKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNvbnN0IHNsZWVwID0gKHRpbWUpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9fSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybCkge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zID0ge307XG5cdGxldCBtYXRjaDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IG1hdGNoWzNdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveCh0aXRsZSA9ICdXaWtpcGx1cycsIGNvbnRlbnQgPSAnJywgd2lkdGggPSA2MDAsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvL+aLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1vdXNlZG93bigoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC51bmJpbmQoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0LCBpZCkge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgPyAkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bikgOiAkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IHNlY3Rpb25CdG4gPVxuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHQ/ICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdFx0XHQnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuIG13LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIGVkaXQtcGFnZSBtdy11aS1pY29uLWZsdXNoLXJpZ2h0J1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgJzAuNzVlbScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd0aXRsZScsIGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0OiAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tZGl2aWRlcicpLnRleHQoJyB8ICcpKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0JCgnLm13LWVkaXRzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSBlZGl0VVJMXG5cdFx0XHRcdFx0Lm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pWzFdIC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0XHQucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pWzFdKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogc2VjdGlvblRhcmdldE5hbWUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdFx0PyAkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bilcblx0XHRcdFx0XHQ6ICQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9faW5pdF9xdWlja2VkaXQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXku7vmhI/pk77mjqXnvJbovpHlhaXlj6Ncblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRMaW5rRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5KHVybCk7XG5cdFx0XHRpZiAocGFyYW1zLmFjdGlvbiA9PT0gJ2VkaXQnICYmIHBhcmFtcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5zZWN0aW9uICE9PSAnbmV3Jykge1xuXHRcdFx0XHQkKHRoaXMpLmFmdGVyKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0XHRcdFx0XHRjbGFzczogJ1dpa2lwbHVzLUVkaXQtRXZlcnlXaGVyZUJ0bicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRleHQoYCgke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpfSlgKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHBhcmFtcy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBwYXJhbXMuc2VjdGlvbiA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9ICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9ICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0KHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCksXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJyksXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuaHRtbChlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0VzY+mAgOWHulxuXHRcdGlmIChlc2NFeGl0KSB7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoID09PSAyNykge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVRdWlja0VkaXRQYW5lbCgpIHtcblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLm9uRWRpdFxuXHQgKiBAcGFyYW0gcm9vdDAub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItVGl0bGUnKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXRUaXRsZSA9ICQoJzxwPicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3N1bW1hcnlfZGVzYycpKTtcblx0XHRjb25zdCBzdW1tYXJ5SW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0JykuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItU3VtbWFyeScpO1xuXHRcdGNvbnN0IGFwcGx5QnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRpbnVlQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNSLUNvbnRpbnVlJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjb250aW51ZScpKTtcblx0XHRjb25zdCBjb250ZW50ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZChpbnB1dClcblx0XHRcdC5hcHBlbmQoc3VtbWFyeUlucHV0VGl0bGUpXG5cdFx0XHQuYXBwZW5kKHN1bW1hcnlJbnB1dClcblx0XHRcdC5hcHBlbmQoJCgnPGhyPicpKVxuXHRcdFx0LmFwcGVuZChhcHBseUJ0bilcblx0XHRcdC5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZGVzYycpLCBjb250ZW50LCA2MDApO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCgnI1dpa2lwbHVzLVNSLVRpdGxlJykudmFsKCk7XG5cdFx0XHRjb25zdCBzdW1tYXJ5ID0gJCgnI1dpa2lwbHVzLVNSLVN1bW1hcnknKS52YWwoKTtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdGlmIChlcnJvci5jb2RlID09PSAnYXJ0aWNsZWV4aXN0cycpIHtcblx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZCgkKCc8aHI+JykpLmFwcGVuZChjb250aW51ZUJ0bikuYXBwZW5kKGNhbmNlbEJ0bik7XG5cdFx0XHRcdFx0Y2FuY2VsQnRuLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb250aW51ZUJ0bi5vbignY2xpY2snLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4jV2lraXBsdXMtUXVpY2tlZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQge1xuICB3aWR0aDogNTAlO1xufVxuLnNraW4tdmVjdG9yICNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQsXG4jV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogcmV2ZXJ0O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCB7XG4gIGNsZWFyOiBib3RoO1xuICBtYXJnaW46IDVweCAwO1xufVxuLldpa2lwbHVzLUJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogM3B4IDVweDtcbiAgcGFkZGluZzogM3B4IDFlbTtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAjYWFhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1CdG4gYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMDA7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICB6LWluZGV4OiAyMDA7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjEsIDE1NCwgMjIwLCAwLjQxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjlmNztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgdG9wOiAtOHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xuICBjdXJzb3I6IG1vdmU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiA2MCU7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogYXV0byAzcHg7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xufVxuLldpa2lwbHVzLUludGVyQm94LUNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggbGFiZWwge1xuICBmb250LXNpemU6IDAuOTVyZW07XG59XG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiB7XG4gIHRhYmxlLWxheW91dDogYXV0bztcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWFkZGVkbGluZSxcbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLWRlbGV0ZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbGluZW5vIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIC5kaWZmLW1hcmtlciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uV2lraXBsdXMtQmFubmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTMsIDIyMiwgMjE0LCAwLjUxKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAwIDVweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDNweCAjYWFhO1xuICBmb250LXNpemU6IDFyZW07XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZSBzcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDNweCBhdXRvIDNweCAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtc2Fucywgc2Fucy1zZXJpZik7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1zdWNjZXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGRkYTkzO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOGEwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXdhcm5pbmcge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmRmMDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRiZDAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS1lcnJvciB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2U3MTcxNztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDBlMDY7XG59XG4jTW9lTm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDMwcHg7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDcxMztcbiAgbWluLXdpZHRoOiAyMCU7XG59XG4iLCAiLyoqXG4gKiBXaWtpcGx1c1xuICogRXJpZGFudXMgU29yYSA8c29yYUBzb3VuZC5tb2U+XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgUGFnZSBmcm9tICcuL2NvcmUvcGFnZSc7XG5pbXBvcnQgVUkgZnJvbSAnLi9jb3JlL3VpJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9jb3JlL25vdGlmaWNhdGlvbic7XG5pbXBvcnQgV2lraSBmcm9tICcuL3NlcnZpY2VzL3dpa2knO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vdXRpbHMvc2V0dGluZ3MnO1xuaW1wb3J0IExvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBpMThuIGZyb20gJy4vdXRpbHMvaTE4bic7XG5pbXBvcnQgJy4vd2lraXBsdXMubGVzcyc7XG5cbiQoYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBQYWdlcyA9IHt9O1xuXHRjb25zdCBpc0N1cnJlbnRQYWdlRW1wdHkgPSAkKCcubm9hcnRpY2xldGV4dCcpLmxlbmd0aCA+IDAgJiYgQ29uc3RhbnRzLmFydGljbGVJZCA9PT0gMDtcblxuXHQvKipcblx0ICogR2V0IHBhZ2UgaW5zdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBwYXJhbXMucmV2aXNpb25JZCDpobXpnaLkv67orqLniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy50aXRsZSDpobXpnaLmoIfpophcblx0ICovXG5cdGNvbnN0IGdldFBhZ2UgPSBhc3luYyAoe3JldmlzaW9uSWQsIHRpdGxlfSkgPT4ge1xuXHRcdGlmIChQYWdlc1tyZXZpc2lvbklkXSkge1xuXHRcdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHRcdH1cblx0XHRjb25zdCBuZXdQYWdlID0gbmV3IFBhZ2Uoe1xuXHRcdFx0cmV2aXNpb25JZCxcblx0XHRcdHRpdGxlLFxuXHRcdH0pO1xuXHRcdGF3YWl0IG5ld1BhZ2UuaW5pdCgpO1xuXHRcdFBhZ2VzW3JldmlzaW9uSWRdID0gbmV3UGFnZTtcblx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdH07XG5cblx0TG9nLmluZm8oYFdpa2lwbHVzIG5vdyBsb2FkaW5nLiBWZXJzaW9uOiAke0NvbnN0YW50cy52ZXJzaW9ufWApO1xuXG5cdGlmICghd2luZG93Lm13KSB7XG5cdFx0Y29uc29sZS5sb2coJ01lZGlhd2lraSBKYXZhU2NyaXB0IG5vdCBsb2FkZWQgb3Igbm90IGEgTWVkaWF3aWtpIHdlYnNpdGUuJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGlmICghQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2F1dG9jb25maXJtZWQnKSAmJiAhQ29uc3RhbnRzLnVzZXJHcm91cHMuaW5jbHVkZXMoJ2NvbmZpcm1lZCcpKSB7XG5cdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdub3RfYXV0b2NvbmZpcm1lZF91c2VyJykpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghQ29uc3RhbnRzLmlzQXJ0aWNsZSB8fCBDb25zdGFudHMuYWN0aW9uICE9PSAndmlldycpIHtcblx0XHRMb2cuaW5mbygnTm90IGFuIGVkaXRhYmxlIHBhZ2UuIFN0b3AgaW5pdGlhbGl6YXRpb24uJyk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gSW5pdGlhbGl6ZSBjdXJyZW50IHBhZ2Ug6buY6K6k5Yid5aeL5YyW5b2T5YmN6aG16Z2iXG5cdHdpbmRvdy5fV2lraXBsdXNQYWdlcyA9IFBhZ2VzO1xuXHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRjb25zdCByZXZpc2lvbklkID0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdGNvbnN0IGN1cnJlbnRQYWdlID0gYXdhaXQgZ2V0UGFnZSh7XG5cdFx0cmV2aXNpb25JZCxcblx0XHR0aXRsZTogY3VycmVudFBhZ2VOYW1lLFxuXHR9KTtcblxuXHRjb25zdCBoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyLCBzZWN0aW9uTmFtZSwgdGFyZ2V0UGFnZU5hbWV9ID0ge30pID0+IHtcblx0XHRjb25zdCBpc090aGVyUGFnZSA9IHRhcmdldFBhZ2VOYW1lICE9PSBjdXJyZW50UGFnZU5hbWU7XG5cdFx0aWYgKGlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZCkge1xuXHRcdFx0Ly8g5Zyo5Y6G5Y+y54mI5pys57yW6L6R5YW25LuW6aG16Z2i5pyJ6Zeu6aKYIOaaguaXtuS4jeaUr+aMgVxuXHRcdFx0TG9nLmVycm9yKCdjcm9zc19wYWdlX2hpc3RvcnlfcmV2aXNpb25fZWRpdF93YXJuaW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldmlzaW9uSWQgPSBpc090aGVyUGFnZSA/IGF3YWl0IFdpa2kuZ2V0TGF0ZXN0UmV2aXNpb25JZEZvclBhZ2UodGFyZ2V0UGFnZU5hbWUpIDogQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cblx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7cmV2aXNpb25JZCwgdGl0bGU6IHRhcmdldFBhZ2VOYW1lfSk7XG5cdFx0Y29uc3QgY3VzdG9tU3VtbWFyeSA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2RlZmF1bHRTdW1tYXJ5Jywge1xuXHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0c2VjdGlvblRhcmdldE5hbWU6IHRhcmdldFBhZ2VOYW1lLFxuXHRcdH0pO1xuXHRcdGNvbnN0IHN1bW1hcnkgPVxuXHRcdFx0Y3VzdG9tU3VtbWFyeSB8fFxuXHRcdFx0KHNlY3Rpb25OYW1lXG5cdFx0XHRcdD8gYC8qICR7c2VjdGlvbk5hbWV9ICovICR7aTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKX1gXG5cdFx0XHRcdDogaTE4bi50cmFuc2xhdGUoJ2RlZmF1bHRfc3VtbWFyeV9zdWZmaXgnKSk7XG5cdFx0Y29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdE5vdGlmaWNhdGlvbi5zdWNjZXNzKGkxOG4udHJhbnNsYXRlKCdsb2FkaW5nJykpO1xuXHRcdH0sIDIwMCk7XG5cdFx0Y29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBhd2FpdCBwYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdFx0Y29uc3QgaXNFZGl0SGlzdG9yeVJldmlzaW9uID0gIWlzT3RoZXJQYWdlICYmIENvbnN0YW50cy5sYXRlc3RSZXZpc2lvbklkICE9PSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0XHRjb25zdCBlc2NUb0V4aXQgPVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09IHRydWUgfHwgLy8g5YW85a656ICB6K6+572ua2V5XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gJ3RydWUnIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gdHJ1ZSB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09ICd0cnVlJztcblx0XHRjb25zdCBjdXN0b21FZGl0VGFncyA9IFNldHRpbmdzLmdldFNldHRpbmcoJ2N1c3RvbV9lZGl0X3RhZ3MnKTtcblx0XHRjb25zdCBkZWZhdWx0RWRpdFRhZ3MgPSBbXTtcblx0XHRjb25zdCBlZGl0VGFncyA9IGN1c3RvbUVkaXRUYWdzPy5sZW5ndGggPyBjdXN0b21FZGl0VGFncyA6IGRlZmF1bHRFZGl0VGFncztcblx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdE5vdGlmaWNhdGlvbi5lbXB0eSgpO1xuXG5cdFx0aWYgKGlzRWRpdEhpc3RvcnlSZXZpc2lvbikge1xuXHRcdFx0Tm90aWZpY2F0aW9uLndhcm5pbmcoaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID0gaXNPdGhlclBhZ2UgPyAhcmV2aXNpb25JZCA6IGlzQ3VycmVudFBhZ2VFbXB0eTtcblxuXHRcdFVJLnNob3dRdWlja0VkaXRQYW5lbCh7XG5cdFx0XHR0aXRsZTogYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX0ke1xuXHRcdFx0XHRpc0VkaXRIaXN0b3J5UmV2aXNpb24gPyBpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSA6ICcnXG5cdFx0XHR9YCxcblx0XHRcdGNvbnRlbnQ6IHNob3VsZFNob3dDcmVhdGVQYWdlVGlwID8gaTE4bi50cmFuc2xhdGUoJ2NyZWF0ZV9wYWdlX3RpcCcpIDogc2VjdGlvbkNvbnRlbnQsXG5cdFx0XHRzdW1tYXJ5LFxuXHRcdFx0b25CYWNrOiBVSS5oaWRlUXVpY2tFZGl0UGFuZWwsXG5cdFx0XHRvblBhcnNlOiAod2lraVRleHQpID0+IHtcblx0XHRcdFx0cmV0dXJuIHBhZ2UucGFyc2VXaWtpVGV4dCh3aWtpVGV4dCk7XG5cdFx0XHR9LFxuXHRcdFx0b25FZGl0OiBhc3luYyAoe2NvbnRlbnQsIHN1bW1hcnksIGlzTWlub3JFZGl0fSkgPT4ge1xuXHRcdFx0XHRjb25zdCBlZGl0UGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHRcdC4uLihzZWN0aW9uTnVtYmVyID09PSAtMSA/IHt9IDoge3NlY3Rpb246IHNlY3Rpb25OdW1iZXJ9KSxcblx0XHRcdFx0XHRcdC4uLihlZGl0VGFncy5sZW5ndGggPyB7dGFnczogZWRpdFRhZ3Muam9pbignfCcpfSA6IHt9KSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoaXNNaW5vckVkaXQpIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm5vdG1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChlZGl0UGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0ZXNjRXhpdDogZXNjVG9FeGl0LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7XG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7dGl0bGUsIHN1bW1hcnksIGZvcmNlT3ZlcndyaXRlID0gZmFsc2V9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHt0aXRsZX0pO1xuXHRcdFx0XHRjb25zdCBjdXJyZW50UGFnZU5hbWUgPSBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lO1xuXHRcdFx0XHRjb25zdCBjb250ZW50bW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdFx0aWYgKHN1bW1hcnkgPT0gJycpIHtcblx0XHRcdFx0XHRzdW1tYXJ5ID0gaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb21fc3VtbWFyeScsIFt0aXRsZSwgY3VycmVudFBhZ2VOYW1lXSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgY29udGVudCA9ICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNvbnRlbnQ7XG5cdFx0XHRcdFx0c3dpdGNoIChjb250ZW50bW9kZWwpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ2phdmFzY3JpcHQnOlxuXHRcdFx0XHRcdFx0XHRjb250ZW50ID0gYC8qICNSRURJUkVDVCAqL213LmxvYWRlci5sb2FkKFwiJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvamF2YXNjcmlwdFwiKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2Nzcyc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgLyogI1JFRElSRUNUICovQGltcG9ydCB1cmwoJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7XG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uaG9zdFxuXHRcdFx0XHRcdFx0XHR9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vaW5kZXgucGhwP3RpdGxlPSR7bXcudXRpbC53aWtpVXJsZW5jb2RlKFxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQYWdlTmFtZVxuXHRcdFx0XHRcdFx0XHQpfSZhY3Rpb249cmF3JmN0eXBlPXRleHQvY3NzKTtgO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ1NjcmlidW50byc6XG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQgPSBgcmV0dXJuIHJlcXVpcmUgW1ske2N1cnJlbnRQYWdlTmFtZX1dXWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnd2lraXRleHQnOlxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0Y29udGVudCA9IGAjUkVESVJFQ1QgW1ske2N1cnJlbnRQYWdlTmFtZX1dXWA7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdFx0fSkoKTtcblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50OiBjb250ZW50LFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRpZiAoIWZvcmNlT3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0cGF5bG9hZC5jb25maWcuY3JlYXRlb25seSA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQocGF5bG9hZCk7XG5cdFx0XHR9LFxuXHRcdFx0b25TdWNjZXNzOiAoe3RpdGxlfSkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gQ29uc3RhbnRzLmFydGljbGVQYXRoLnJlcGxhY2UoL1xcJDEvZ2ksIHRpdGxlKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTZXR0aW5nc1BhbmVsKHtcblx0XHRcdG9uU3VibWl0OiAoe3NldHRpbmdzfSkgPT4ge1xuXHRcdFx0XHRKU09OLnBhcnNlKHNldHRpbmdzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX1NldHRpbmdzJywgc2V0dGluZ3MpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVQcmVsb2FkID0gYXN5bmMgKHtzZWN0aW9uTnVtYmVyfSkgPT4ge1xuXHRcdGF3YWl0IGN1cnJlbnRQYWdlLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlY3Rpb25OdW1iZXIsXG5cdFx0fSk7XG5cdH07XG5cblx0VUkuaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRMaW5rRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKGhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydFNldHRpbmdzUGFuZWxCdXR0b24oaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkKTtcblx0VUkuYmluZFByZWxvYWRFdmVudHMoaGFuZGxlUHJlbG9hZCk7XG59KTtcblxuZXhwb3J0IHt9O1xuIiwgImltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbigoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCQod2luZG93KS5vbigncmVzaXplJywgKCk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cdFx0Y29uc3QgJHdpa2lwbHVzSW50ZXJib3ggPSAkYm9keS5maW5kKCcuV2lraXBsdXMtSW50ZXJCb3gnKTtcblx0XHRpZiAoJHdpa2lwbHVzSW50ZXJib3gpIHtcblx0XHRcdCR3aWtpcGx1c0ludGVyYm94LmNzcygnbWF4LXdpZHRoJywgYGNhbGMoJHt3aW5kb3dXaWR0aH1weCAtIDJlbSlgKTtcblx0XHR9XG5cdH0pO1xufSk7XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLmxlc3MnO1xuXG4oZnVuY3Rpb24gV2lraXBsdXMoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0XHQvKiBzZWUgPGh0dHBzOi8vZ2l0aHViLmNvbS9XaWtpcGx1cy9XaWtpcGx1cy9pc3N1ZXMvNjU+ICovXG5cdFx0aWYgKGlzVmVFbmFibGUpIHtcblx0XHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdFx0fVxuXG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvaW5kZXgnKTtcblx0XHRhd2FpdCBpbXBvcnQoJy4vcmVzaXplJyk7XG5cdH07XG5cblx0dm9pZCBsb2FkZXIoKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQTtBQUFOLElBc0NPQztBQXRDUCxJQUFBQyxpQkFBQUMsTUFBQTtFQUFBLDRDQUFBO0FBQUE7QUFBTUgsZ0JBQU4sTUFBZ0I7TUFDZkksVUFBVTtNQUNWLElBQUlDLFlBQVk7QUFDZixlQUFPQyxPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDMUM7TUFDQSxJQUFJQyxrQkFBa0I7QUFDckIsZUFBT0osT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEVBQUVFLFFBQVEsTUFBTSxHQUFHO01BQzVEO01BQ0EsSUFBSUMsWUFBWTtBQUNmLGVBQU9OLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUMxQztNQUNBLElBQUlJLGFBQWE7QUFDaEIsZUFBT1AsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxjQUFjO01BQzNDO01BQ0EsSUFBSUssbUJBQW1CO0FBQ3RCLGVBQU9SLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksaUJBQWlCO01BQzlDO01BQ0EsSUFBSU0sY0FBYztBQUNqQixlQUFPVCxPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGVBQWU7TUFDNUM7TUFDQSxJQUFJTyxhQUFhO0FBQ2hCLGVBQU9WLE9BQU9DLEdBQUdDLE9BQU9DLElBQUksY0FBYztNQUMzQztNQUNBLElBQUlRLFNBQVM7QUFDWixlQUFPWCxPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVU7TUFDdkM7TUFDQSxJQUFJUyxPQUFPO0FBQ1YsZUFBT1osT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxNQUFNO01BQ25DO01BQ0EsSUFBSVUsYUFBYTtBQUNoQixlQUFPYixPQUFPQyxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7TUFDM0M7TUFDQSxJQUFJVyxTQUFTO0FBQ1osZUFBT2QsT0FBT0MsR0FBR0MsT0FBT0MsSUFBSSxVQUFVO01BQ3ZDO01BQ0FZLFlBQUEsMkJBQUFDLE9BQXVDLEtBQUtsQixTQUFPLElBQUEsRUFBQWtCLE9BQUssS0FBS0YsUUFBTSxHQUFBO0lBQ3BFO0FBRU9uQix3QkFBUSxJQUFJRCxVQUFVO0VBQUE7QUFBQSxDQUFBOztBQ3RDN0IsSUFJTXVCO0FBSk4sSUFxQ09DO0FBckNQLElBQUFDLGdCQUFBdEIsTUFBQTtFQUFBLDJDQUFBO0FBQUE7QUFFQUQsbUJBQUE7QUFFTXFCLGVBQVc7TUFDaEJHLE1BQUEsR0FBQUosT0FBU0ssU0FBU0MsVUFBUSxJQUFBLEVBQUFOLE9BQUtLLFNBQVNFLElBQUksRUFBQVAsT0FBR3JCLGtCQUFVZSxZQUFVLFVBQUE7TUFDN0RQLElBQUlxQixPQUFPO0FBQUEsZUFBQUMsa0JBQUEsYUFBQTtBQUNoQixnQkFBTUMsTUFBTSxJQUFJQyxJQUFJVixTQUFTRyxJQUFJO0FBQ2pDLG1CQUFBUSxLQUFBLEdBQUFDLGVBQWtCQyxPQUFPQyxLQUFLUCxLQUFLLEdBQUFJLEtBQUFDLGFBQUFHLFFBQUFKLE1BQUc7QUFBdEMsa0JBQVdLLE1BQUFKLGFBQUFELEVBQUE7QUFDVkYsZ0JBQUlRLGFBQWFDLE9BQU9GLEtBQUtULE1BQU1TLEdBQUcsQ0FBQztVQUN4QztBQUNBLGdCQUFNRyxXQUFBLE1BQWlCQyxNQUFNWCxLQUFLO1lBQ2pDWSxhQUFhO1lBQ2JDLFNBQVM7Y0FDUixrQkFBa0I1QyxrQkFBVW9CO1lBQzdCO1VBQ0QsQ0FBQztBQUNELGlCQUFBLE1BQWFxQixTQUFTSSxLQUFLO1FBQUEsQ0FBQSxFQUFBO01BQzVCO01BQ01DLEtBQUtDLFNBQVM7QUFBQSxlQUFBakIsa0JBQUEsYUFBQTtBQUNuQixnQkFBTUMsTUFBTSxJQUFJQyxJQUFJVixTQUFTRyxJQUFJO0FBQ2pDLGdCQUFNdUIsT0FBTyxJQUFJQyxTQUFTO0FBQzFCLG1CQUFBQyxNQUFBLEdBQUFDLGtCQUEyQmhCLE9BQU9pQixRQUFRTCxPQUFPLEdBQUFHLE1BQUFDLGdCQUFBZCxRQUFBYSxPQUFHO0FBQXBELGtCQUFXLENBQUNaLEtBQUtlLEtBQUssSUFBQUYsZ0JBQUFELEdBQUE7QUFDckJGLGlCQUFLUixPQUFPRixLQUFLZSxLQUFLO1VBQ3ZCO0FBQ0EsZ0JBQU1aLFdBQUEsTUFBaUJDLE1BQU1YLEtBQUs7WUFDakN1QixRQUFRO1lBQ1JDLE1BQU1QO1lBQ05MLGFBQWE7WUFDYkMsU0FBUztjQUNSLGtCQUFrQjVDLGtCQUFVb0I7WUFDN0I7VUFDRCxDQUFDO0FBQ0QsaUJBQUEsTUFBYXFCLFNBQVNJLEtBQUs7UUFBQSxDQUFBLEVBQUE7TUFDNUI7SUFDRDtBQUVPdEIsdUJBQVFEO0VBQUE7QUFBQSxDQUFBOztBQ3JDZixJQUVNa0M7QUFGTixJQStFT0M7QUEvRVAsSUFBQUMsWUFBQXhELE1BQUE7RUFBQSx1Q0FBQTtBQUFBO0FBRU1zRCxXQUFOLE1BQVc7TUFDVkc7TUFDQUMsV0FBVyxDQUFDO01BQ1pDLG1CQUFtQixDQUFBO01BQ25CQyxjQUFjO0FBQ2IsWUFBSUg7QUFDSixZQUFJO0FBQ0hBLHFCQUFXSSxLQUFLQyxNQUFNQyxhQUFhLG1CQUFtQixDQUFDLEVBQUUsVUFBVSxLQUFLQyxVQUFVUCxTQUFTUSxZQUFZO1FBQ3hHLFFBQVE7QUFDUFIsc0JBQVlPLFVBQVVQLFlBQVlPLFVBQVVFLGlCQUMxQzFELFFBQVEsY0FBYyxFQUFFLEVBQ3hCeUQsWUFBWTtRQUNmO0FBQ0EsYUFBS1IsV0FBV0E7QUFFaEIsWUFBSTtBQUNILGdCQUFNVSxZQUFZTixLQUFLQyxNQUFNQyxhQUFhSyxRQUFRLG9CQUFvQixDQUFDO0FBQ3ZFLG1CQUFBQyxNQUFBLEdBQUFDLGdCQUFrQnJDLE9BQU9DLEtBQUtpQyxTQUFTLEdBQUFFLE1BQUFDLGNBQUFuQyxRQUFBa0MsT0FBRztBQUExQyxrQkFBV2pDLE1BQUFrQyxjQUFBRCxHQUFBO0FBQ1YsaUJBQUtYLFNBQVN0QixHQUFHLElBQUkrQixVQUFVL0IsR0FBRztVQUNuQztRQUNELFFBQVE7QUFFUDJCLHVCQUFhUSxRQUFRLHNCQUFzQixJQUFJO1FBQ2hEO01BQ0Q7TUFDQUMsVUFBVXBDLEtBQUtxQyxlQUFlLENBQUEsR0FBSTtBQUNqQyxZQUFJQyxTQUFTO0FBQ2IsWUFBSSxLQUFLakIsWUFBWSxLQUFLQyxVQUFVO0FBQ25DLGNBQUl0QixPQUFPLEtBQUtzQixTQUFTLEtBQUtELFFBQVEsR0FBRztBQUN4Q2lCLHFCQUFTLEtBQUtoQixTQUFTLEtBQUtELFFBQVEsRUFBRXJCLEdBQUc7VUFDMUMsT0FBTztBQUVOLGlCQUFLdUMsYUFBYSxLQUFLbEIsUUFBUTtBQUMvQixnQkFBSXJCLE9BQU8sS0FBS3NCLFNBQVMsT0FBTyxHQUFHO0FBRWxDZ0IsdUJBQVMsS0FBS2hCLFNBQVMsT0FBTyxFQUFFdEIsR0FBRztZQUNwQyxPQUFPO0FBQ05zQyx1QkFBU3RDO1lBQ1Y7VUFDRDtRQUNELE9BQU87QUFDTixlQUFLdUMsYUFBYSxLQUFLbEIsUUFBUTtRQUNoQztBQUVBLFlBQUlnQixhQUFhdEMsU0FBUyxHQUFHO0FBQUEsY0FBQXlDLFlBQUFDLDJCQUNPSixhQUFhdkIsUUFBUSxDQUFBLEdBQUE0QjtBQUFBLGNBQUE7QUFBeEQsaUJBQUFGLFVBQUFHLEVBQUEsR0FBQSxFQUFBRCxRQUFBRixVQUFBSSxFQUFBLEdBQUFDLFFBQTJEO0FBQUEsb0JBQWhELENBQUNDLE9BQU9DLFdBQVcsSUFBQUwsTUFBQTNCO0FBQzdCdUIsdUJBQVNBLE9BQU9sRSxRQUFBLElBQUFXLE9BQVkrRCxRQUFRLENBQUMsR0FBSUMsV0FBVztZQUNyRDtVQUFBLFNBQUFDLEtBQUE7QUFBQVIsc0JBQUFTLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFSLHNCQUFBVSxFQUFBO1VBQUE7UUFDRDtBQUNBLGVBQU9aO01BQ1I7TUFDTUMsYUFBYWxCLFVBQVU7QUFBQSxZQUFBOEIsUUFBQTtBQUFBLGVBQUEzRCxrQkFBQSxhQUFBO0FBQzVCLGNBQUkyRCxNQUFLNUIsaUJBQWlCNkIsU0FBUy9CLFFBQVEsR0FBRztBQUU3QztVQUNEO0FBQ0EsY0FBSTtBQUNILGtCQUFNbEIsV0FBQSxPQUFXLE1BQ1ZDLE1BQUEsaUZBQUFyQixPQUM0RXNDLFVBQVEsT0FBQSxDQUMxRixHQUNDZCxLQUFLO0FBQ1Asa0JBQU04QyxhQUFhMUIsYUFBYUssUUFBUSwwQkFBMEIsS0FBSztBQUN2RW1CLGtCQUFLNUIsaUJBQWlCK0IsS0FBS2pDLFFBQVE7QUFDbkMsZ0JBQUlsQixTQUFTb0QsY0FBY0YsY0FBYyxFQUFFaEMsWUFBWThCLE1BQUs3QixXQUFXO0FBRXRFa0Msc0JBQVFDLEtBQUEsVUFBQTFFLE9BQWVzQyxVQUFRLHNCQUFBLEVBQUF0QyxPQUF1Qm9CLFNBQVNvRCxTQUFTLENBQUU7QUFDMUVKLG9CQUFLN0IsU0FBU0QsUUFBUSxJQUFJbEI7QUFFMUJ3QiwyQkFBYVEsUUFBUSxzQkFBc0JWLEtBQUtpQyxVQUFVUCxNQUFLN0IsUUFBUSxDQUFDO1lBQ3pFO1VBQ0QsUUFBUTtVQUVSO1FBQUEsQ0FBQSxFQUFBO01BQ0Q7SUFDRDtBQUVPSCxtQkFBUSxJQUFJRCxLQUFLO0VBQUE7QUFBQSxDQUFBOztBQy9FeEIsSUFJTXlDO0FBSk4sSUFXTUM7QUFYTixJQStCT0M7QUEvQlAsSUFBQUMsV0FBQWxHLE1BQUE7RUFBQSxzQ0FBQTtBQUFBO0FBRUF3RCxjQUFBO0FBRU11QyxvQkFBTixjQUE0QkksTUFBTTtNQUNqQ3ZDLFlBQVl3QyxTQUFTQyxNQUFNO0FBQzFCLGNBQU1ELE9BQU87QUFDYixhQUFLQyxPQUFPQTtNQUNiO0lBQ0Q7QUFFTUwsVUFBTTtNQUNYTSxNQUFNRixVQUFVLElBQUk7QUFDbkJSLGdCQUFRVSxNQUFBLG9CQUFBbkYsT0FBMEJpRixPQUFPLENBQUU7TUFDNUM7TUFDQVAsS0FBS08sVUFBVSxJQUFJO0FBQ2xCUixnQkFBUUMsS0FBQSxtQkFBQTFFLE9BQXdCaUYsT0FBTyxDQUFFO01BQzFDO01BQ0FHLE1BQU1DLFdBQVdDLFdBQVcsQ0FBQSxHQUFJO0FBQy9CLFlBQUlDLFdBQVduRCxhQUFLaUIsVUFBVWdDLFNBQVM7QUFDdkMsWUFBSUMsU0FBU3RFLFNBQVMsR0FBRztBQUFBLGNBQUF3RSxhQUFBOUIsMkJBRUg0QixTQUFTdkQsUUFBUSxDQUFBLEdBQUEwRDtBQUFBLGNBQUE7QUFBdEMsaUJBQUFELFdBQUE1QixFQUFBLEdBQUEsRUFBQTZCLFNBQUFELFdBQUEzQixFQUFBLEdBQUFDLFFBQXlDO0FBQUEsb0JBQTlCLENBQUM0QixHQUFHQyxDQUFDLElBQUFGLE9BQUF6RDtBQUNmdUQseUJBQVdBLFNBQVNsRyxRQUFRLElBQUl1RyxPQUFBLEtBQUE1RixPQUFZMEYsSUFBSSxDQUFDLEdBQUksSUFBSSxHQUFHQyxDQUFDO1lBQzlEO1VBQUEsU0FBQTFCLEtBQUE7QUFBQXVCLHVCQUFBdEIsRUFBQUQsR0FBQTtVQUFBLFVBQUE7QUFBQXVCLHVCQUFBckIsRUFBQTtVQUFBO1FBQ0Q7QUFDQU0sZ0JBQVFXLE1BQUEsb0JBQUFwRixPQUEwQnVGLFFBQVEsQ0FBRTtBQUM1QyxjQUFNLElBQUlYLGNBQUEsR0FBQTVFLE9BQWlCdUYsUUFBUSxHQUFJRixTQUFTO01BQ2pEO0lBQ0Q7QUFFT1Asa0JBQVFEO0VBQUE7QUFBQSxDQUFBOztBQy9CZixJQU1NZ0I7QUFOTixJQXNOT0M7QUF0TlAsSUFBQUMsWUFBQWxILE1BQUE7RUFBQSwwQ0FBQTtBQUFBO0FBRUFzQixrQkFBQTtBQUNBNEUsYUFBQTtBQUNBMUMsY0FBQTtBQUVNd0QsV0FBTixNQUFXO01BQ1ZHLGdCQUFnQixDQUFDOzs7Ozs7O01BT1hDLGVBQWU7QUFBQSxlQUFBeEYsa0JBQUEsYUFBQTtBQUdwQixnQkFBTVcsV0FBQSxNQUFpQmxCLGlCQUFTZixJQUFJO1lBQ25DUSxRQUFRO1lBQ1J1RyxNQUFNO1lBQ05DLFFBQVE7VUFDVCxDQUFDO0FBQ0QsY0FDQy9FLFNBQVNaLFNBQ1RZLFNBQVNaLE1BQU00RixVQUNmaEYsU0FBU1osTUFBTTRGLE9BQU9DLGFBQ3RCakYsU0FBU1osTUFBTTRGLE9BQU9DLGNBQWMsT0FDbkM7QUFDRCxtQkFBT2pGLFNBQVNaLE1BQU00RixPQUFPQztVQUM5QjtBQUNBLGlCQUFPdkIsWUFBSU0sTUFBTSx1QkFBdUI7UUFBQSxDQUFBLEVBQUE7TUFDekM7Ozs7Ozs7Ozs7TUFVTWtCLFlBQVk7UUFBQ0M7UUFBT2hIO01BQVUsR0FBRztBQUFBLFlBQUFpSCxTQUFBO0FBQUEsZUFBQS9GLGtCQUFBLGFBQUE7QUFDdEMsY0FBSTtBQUNILGtCQUFNZ0csU0FBUztjQUNkOUcsUUFBUTtjQUNSK0csTUFBTTtjQUNOQyxRQUFRO2NBQ1JSLFFBQVE7WUFDVDtBQUNBLGdCQUFJNUcsWUFBWTtBQUNma0gscUJBQU9HLFNBQVNySDtZQUNqQixXQUFXZ0gsT0FBTztBQUNqQixrQkFBSUMsT0FBS1IsY0FBY08sS0FBSyxHQUFHO0FBRTlCLHVCQUFPO2tCQUNOTSxXQUFXTCxPQUFLUixjQUFjTyxLQUFLLEVBQUVNO2tCQUNyQ3RILFlBQVlpSCxPQUFLUixjQUFjTyxLQUFLLEVBQUVPO2tCQUN0Q0MsY0FBY1AsT0FBS1IsY0FBY08sS0FBSyxFQUFFUTtnQkFDekM7Y0FDRDtBQUNBTixxQkFBT08sU0FBU1Q7WUFDakI7QUFDQSxrQkFBTW5GLFdBQUEsTUFBaUJsQixpQkFBU2YsSUFBSXNILE1BQU07QUFDMUMsZ0JBQUlyRixTQUFTWixTQUFTWSxTQUFTWixNQUFNeUcsT0FBTztBQUMzQyxvQkFBTUYsZUFBZTNGLFNBQVNaLE1BQU15RyxNQUFNbkcsT0FBT0MsS0FBS0ssU0FBU1osTUFBTXlHLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRUY7QUFDaEYsa0JBQUlqRyxPQUFPQyxLQUFLSyxTQUFTWixNQUFNeUcsS0FBSyxFQUFFLENBQUMsTUFBTSxNQUFNO0FBR2xEVCx1QkFBS1IsY0FBY08sS0FBSyxJQUFJO2tCQUFDUTtnQkFBMEI7QUFDdkQsdUJBQU87a0JBQ05BO2dCQUNEO2NBQ0Q7QUFDQSxvQkFBTUcsV0FBVzlGLFNBQVNaLE1BQU15RyxNQUFNbkcsT0FBT0MsS0FBS0ssU0FBU1osTUFBTXlHLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRUUsVUFBVSxDQUFDO0FBQ3ZGLGtCQUFJWixPQUFPO0FBQ1ZDLHVCQUFLUixjQUFjTyxLQUFLLElBQUlXO0FBQzVCVix1QkFBS1IsY0FBY08sS0FBSyxFQUFFUSxlQUFlQTtjQUMxQztBQUNBLHFCQUFPO2dCQUNORixXQUFXSyxTQUFTTDtnQkFDcEJ0SCxZQUFZMkgsU0FBU0o7Z0JBQ3JCQztjQUNEO1lBQ0Q7VUFDRCxRQUFRO0FBQ1BqQyx3QkFBSU0sTUFBTSx1QkFBdUI7VUFDbEM7UUFBQSxDQUFBLEVBQUE7TUFDRDs7Ozs7Ozs7Ozs7TUFXTWdDLFlBQVk7UUFBQ0M7UUFBUzlIO01BQVUsR0FBRztBQUFBLGVBQUFrQixrQkFBQSxhQUFBO0FBQ3hDLGNBQUk7QUFDSCxrQkFBTWdHLFNBQVM7Y0FDZDlHLFFBQVE7Y0FDUitHLE1BQU07Y0FDTkMsUUFBUTtjQUNSUixRQUFRO2NBQ1JTLFFBQVFySDtZQUNUO0FBQ0EsZ0JBQUlBLFlBQVk7QUFDZmtILHFCQUFPRyxTQUFTckg7WUFDakI7QUFDQSxnQkFBSThILFNBQVM7QUFDWloscUJBQU9hLFlBQVlEO1lBQ3BCO0FBQ0Esa0JBQU1qRyxXQUFBLE1BQWlCbEIsaUJBQVNmLElBQUlzSCxNQUFNO0FBQzFDLGdCQUFJckYsU0FBU1osU0FBU1ksU0FBU1osTUFBTXlHLE9BQU87QUFDM0Msa0JBQUluRyxPQUFPQyxLQUFLSyxTQUFTWixNQUFNeUcsS0FBSyxFQUFFLENBQUMsTUFBTSxNQUFNO0FBR2xELHVCQUFPO2NBQ1I7QUFDQSxvQkFBTUMsV0FBVzlGLFNBQVNaLE1BQU15RyxNQUFNbkcsT0FBT0MsS0FBS0ssU0FBU1osTUFBTXlHLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRUUsVUFBVSxDQUFDO0FBQ3ZGLHFCQUFPRCxTQUFTLEdBQUc7WUFDcEI7VUFDRCxRQUFRO0FBQ1BwQyx3QkFBSU0sTUFBTSxzQkFBc0I7VUFDakM7UUFBQSxDQUFBLEVBQUE7TUFDRDs7Ozs7Ozs7O01BU01tQyxjQUFjQyxVQUFVakIsUUFBUSxJQUFJckgsU0FBUyxDQUFDLEdBQUc7QUFBQSxlQUFBdUIsa0JBQUEsYUFBQTtBQUN0RCxjQUFJO0FBQ0gsa0JBQU1XLFdBQUEsTUFBaUJsQixpQkFBU3VCLEtBQUs7Y0FDcEMwRSxRQUFRO2NBQ1J4RyxRQUFRO2NBQ1I4SCxNQUFNRDtjQUNOakI7Y0FDQW1CLEtBQUs7WUFDTixDQUFDO0FBQ0QsZ0JBQUl0RyxTQUFTdUIsU0FBU3ZCLFNBQVN1QixNQUFNOEUsTUFBTTtBQUMxQyxxQkFBT3JHLFNBQVN1QixNQUFNOEUsS0FBSyxHQUFHO1lBQy9CO1VBQ0QsUUFBUTtBQUNQM0Msd0JBQUlNLE1BQU0scUJBQXFCO1VBQ2hDO1FBQUEsQ0FBQSxFQUFBO01BQ0Q7Ozs7Ozs7Ozs7OztNQWFNdUMsS0FBSztRQUFDcEI7UUFBT3FCO1FBQVNDO1FBQVdoQjtRQUFXM0gsU0FBUyxDQUFDO1FBQUc0SSxtQkFBbUIsQ0FBQztNQUFDLElBQUksQ0FBQyxHQUFHO0FBQUEsZUFBQXJILGtCQUFBLGFBQUE7QUFDM0YsY0FBSVc7QUFDSixjQUFJO0FBQ0hBLHVCQUFBLE1BQWlCbEIsaUJBQVN1QixLQUFLO2NBQzlCOUIsUUFBUTtjQUNSd0csUUFBUTtjQUNSc0IsTUFBTUc7Y0FDTnJCO2NBQ0F3QixPQUFPRjtjQUNQLEdBQUloQixZQUFZO2dCQUFDbUIsZUFBZW5CO2NBQVMsSUFBSSxDQUFDO2NBQzlDLEdBQUczSDtjQUNILEdBQUc0STtZQUNKLENBQUM7VUFDRixRQUFRO0FBQ1BoRCx3QkFBSU0sTUFBTSxvQkFBb0I7VUFDL0I7QUFDQSxjQUFJaEUsU0FBU3VHLE1BQU07QUFDbEIsZ0JBQUl2RyxTQUFTdUcsS0FBS3BFLFdBQVcsV0FBVztBQUN2QyxxQkFBTztZQUNSO0FBQ0EsZ0JBQUluQyxTQUFTdUcsS0FBS3pDLE1BQU07QUFFdkIsb0JBQU0sSUFBSUYsTUFBQSw2QkFBQWhGLE9BQ1lvQyxhQUFLaUIsVUFBVSxpQkFBaUIsR0FBQyxHQUFBLEVBQUFyRCxPQUFJb0IsU0FBU3VHLEtBQUtqRCxLQUFLckYsUUFBUSx5QkFBeUIsRUFBRSxHQUFDLDJGQUFBLEVBQUFXLE9BRTNEb0IsU0FBU3VHLEtBQUtNLFNBQU8sOEJBQUEsQ0FDM0Q7WUFDbEIsT0FBTztBQUNObkQsMEJBQUlNLE1BQU0sb0JBQW9CO1lBQy9CO1VBQ0QsV0FBV2hFLFNBQVNnRSxTQUFTaEUsU0FBU2dFLE1BQU1GLE1BQU07QUFDakRKLHdCQUFJTSxNQUFNaEUsU0FBU2dFLE1BQU1GLElBQUk7VUFDOUIsV0FBVzlELFNBQVM4RCxNQUFNO0FBQ3pCSix3QkFBSU0sTUFBTWhFLFNBQVM4RCxJQUFJO1VBQ3hCLE9BQU87QUFDTkosd0JBQUlNLE1BQU0sb0JBQW9CO1VBQy9CO1FBQUEsQ0FBQSxFQUFBO01BQ0Q7Ozs7Ozs7TUFRTThDLDJCQUEyQjNCLE9BQU87QUFBQSxZQUFBNEIsU0FBQTtBQUFBLGVBQUExSCxrQkFBQSxhQUFBO0FBQ3ZDLGdCQUFNO1lBQUNsQjtVQUFVLElBQUEsTUFBVTRJLE9BQUs3QixZQUFZO1lBQUNDO1VBQUssQ0FBQztBQUNuRCxpQkFBT2hIO1FBQUEsQ0FBQSxFQUFBO01BQ1I7SUFDRDtBQUVPdUcsbUJBQVEsSUFBSUQsS0FBSztFQUFBO0FBQUEsQ0FBQTs7QUN0TnhCLElBS011QztBQUxOLElBc0pPQztBQXRKUCxJQUFBQyxZQUFBekosTUFBQTtFQUFBLHNDQUFBO0FBQUE7QUFFQWtILGNBQUE7QUFDQWhCLGFBQUE7QUFFTXFELFdBQU4sTUFBVztNQUNWdkI7TUFDQWdCO01BQ0F0QjtNQUNBaEg7TUFFQWdKLFNBQVM7TUFDVEMsWUFBWTtNQUVaekIsZUFBZTtNQUVmMEIsZUFBZSxDQUFDOzs7Ozs7TUFPaEJoRyxZQUFZO1FBQUM4RDtRQUFPaEg7TUFBVSxHQUFHO0FBQ2hDLGFBQUtnSCxRQUFRQTtBQUNiLGFBQUtoSCxhQUFhQTtBQUNsQixhQUFLaUosWUFBWSxDQUFDako7TUFDbkI7Ozs7Ozs7TUFRTW1KLEtBQUs7UUFBQ2IsWUFBWTtNQUFFLElBQUksQ0FBQyxHQUFHO0FBQUEsWUFBQWMsU0FBQTtBQUFBLGVBQUFsSSxrQkFBQSxhQUFBO0FBQ2pDLGdCQUFNbUksYUFBYSxDQUFDRCxPQUFLRSxhQUFhLEdBQUdGLE9BQUtHLGdCQUFnQixDQUFDO0FBQy9ELGNBQUksQ0FBQ2pCLFdBQVc7QUFDZmUsdUJBQVdyRSxLQUFLb0UsT0FBSzFDLGFBQWEsQ0FBQztVQUNwQztBQUNBLGdCQUFNOEMsUUFBUUMsSUFBSUosVUFBVTtBQUM1QkQsaUJBQUtKLFNBQVM7QUFDZHpELHNCQUFJSixLQUFBLDJCQUFBMUUsT0FBZ0MySSxPQUFLcEMsT0FBSyxHQUFBLEVBQUF2RyxPQUFJMkksT0FBS3BKLFlBQVUsWUFBQSxDQUFZO1FBQUEsQ0FBQSxFQUFBO01BQzlFOzs7OztNQU1NMEcsZUFBZTtBQUFBLFlBQUFnRCxTQUFBO0FBQUEsZUFBQXhJLGtCQUFBLGFBQUE7QUFDcEIsZ0JBQU14QixHQUFHaUssT0FBT0MsTUFBTSxnQkFBZ0I7QUFDdEMsY0FBSWxLLEdBQUdtSyxLQUFLaEQsT0FBT2pILElBQUksV0FBVyxLQUFLRixHQUFHbUssS0FBS2hELE9BQU9qSCxJQUFJLFdBQVcsTUFBTSxPQUFPO0FBR2pGOEosbUJBQUtwQixZQUFZNUksR0FBR21LLEtBQUtoRCxPQUFPakgsSUFBSSxXQUFXO0FBQy9DO1VBQ0Q7QUFHQThKLGlCQUFLcEIsWUFBQSxNQUFrQi9CLGFBQUtHLGFBQWE7UUFBQSxDQUFBLEVBQUE7TUFDMUM7Ozs7O01BTU00QyxlQUFlO0FBQUEsWUFBQVEsU0FBQTtBQUFBLGVBQUE1SSxrQkFBQSxhQUFBO0FBQ3BCLGdCQUFNO1lBQUNvRztZQUFXdEg7VUFBVSxJQUFBLE1BQVV1RyxhQUFLUSxZQUFZO1lBQ3REL0csWUFBWThKLE9BQUs5SjtZQUNqQmdILE9BQU84QyxPQUFLOUM7VUFDYixDQUFDO0FBQ0Q4QyxpQkFBS3hDLFlBQVlBO0FBQ2pCLGNBQUl0SCxZQUFZO0FBQ2Y4SixtQkFBSzlKLGFBQWFBO0FBQ2xCOEosbUJBQUtiLFlBQVk7VUFDbEI7UUFBQSxDQUFBLEVBQUE7TUFDRDs7Ozs7OztNQVFNTSxrQkFBa0I7QUFBQSxZQUFBUSxTQUFBO0FBQUEsZUFBQTdJLGtCQUFBLGFBQUE7QUFDdkIsZ0JBQU07WUFBQ3NHO1VBQVksSUFBQSxNQUFVakIsYUFBS1EsWUFBWTtZQUM3Qy9HLFlBQVkrSixPQUFLL0o7WUFDakJnSCxPQUFPK0MsT0FBSy9DO1VBQ2IsQ0FBQztBQUNEK0MsaUJBQUt2QyxlQUFlQSxnQkFBZ0I7UUFBQSxDQUFBLEVBQUE7TUFDckM7Ozs7Ozs7O01BU01LLFlBQVk7UUFBQ0MsVUFBVTtNQUFFLElBQUksQ0FBQyxHQUFHO0FBQUEsWUFBQWtDLFNBQUE7QUFBQSxlQUFBOUksa0JBQUEsYUFBQTtBQUN0QyxnQkFBTStJLE1BQU1uQyxZQUFZLEtBQUssS0FBS0E7QUFDbEMsY0FBSWtDLE9BQUtkLGFBQWFlLEdBQUcsR0FBRztBQUMzQixtQkFBT0QsT0FBS2QsYUFBYWUsR0FBRztVQUM3QjtBQUNBLGdCQUFNQyxXQUFBLE1BQWlCM0QsYUFBS3NCLFlBQVk7WUFDdkNDLFNBQVNtQztZQUNUakssWUFBWWdLLE9BQUtoSztVQUNsQixDQUFDO0FBQ0R1RixzQkFBSUosS0FBQSxlQUFBMUUsT0FBb0J1SixPQUFLaEQsT0FBSyxHQUFBLEVBQUF2RyxPQUFJcUgsU0FBTyxXQUFBLENBQVc7QUFDeERrQyxpQkFBS2QsYUFBYWUsR0FBRyxJQUFJQztBQUN6QixpQkFBT0E7UUFBQSxDQUFBLEVBQUE7TUFDUjs7Ozs7O01BT01sQyxjQUFjQyxVQUFVO0FBQUEsWUFBQWtDLFNBQUE7QUFBQSxlQUFBakosa0JBQUEsYUFBQTtBQUM3QixpQkFBT3FGLGFBQUt5QixjQUFjQyxVQUFVa0MsT0FBS25ELEtBQUs7UUFBQSxDQUFBLEVBQUE7TUFDL0M7Ozs7Ozs7TUFRTW9CLEtBQUtqRyxTQUFTO0FBQUEsWUFBQWlJLFVBQUE7QUFBQSxlQUFBbEosa0JBQUEsYUFBQTtBQUNuQixjQUFJLENBQUNrSixRQUFLOUIsV0FBVztBQUNwQi9DLHdCQUFJTSxNQUFNLHVCQUF1QjtBQUNqQztVQUNEO0FBQ0EsY0FBSSxDQUFDdUUsUUFBSzlDLGFBQWEsQ0FBQzhDLFFBQUtuQixXQUFXO0FBRXZDMUQsd0JBQUlNLE1BQU0sdUJBQXVCO0FBQ2pDO1VBQ0Q7QUFDQSxpQkFBT1UsYUFBSzZCLEtBQUs7WUFDaEJwQixPQUFPb0QsUUFBS3BEO1lBQ1pzQixXQUFXOEIsUUFBSzlCO1lBQ2hCLEdBQUk4QixRQUFLOUMsWUFBWTtjQUFDQSxXQUFXOEMsUUFBSzlDO1lBQVMsSUFBSSxDQUFDO1lBQ3BELEdBQUduRjtZQUNIb0csa0JBQWtCO2NBQ2pCLEdBQUk2QixRQUFLbkIsWUFBWTtnQkFBQ29CLFlBQVlELFFBQUtuQjtjQUFTLElBQUksQ0FBQztZQUN0RDtVQUNELENBQUM7UUFBQSxDQUFBLEVBQUE7TUFDRjtJQUNEO0FBRU9ILG1CQUFRRDtFQUFBO0FBQUEsQ0FBQTs7QUN0SmYsSUFFTXlCO0FBRk4sSUErRU9DO0FBL0VQLElBQUFDLG9CQUFBbEwsTUFBQTtFQUFBLDhDQUFBO0FBQUE7QUFFTWdMLG1CQUFOLE1BQW1CO01BQ2xCcEgsY0FBYztBQUNiLGFBQUtpRyxLQUFLO01BQ1g7TUFDQUEsT0FBTztBQUNOc0IsVUFBRSxNQUFNLEVBQUU3SSxPQUFPLGtDQUFrQztNQUNwRDtNQUNBOEksUUFBUXhDLE9BQU8sTUFBTXlDLE9BQU8sV0FBV0MsV0FBV0EsTUFBTTtNQUFDLEdBQUc7QUFDM0RILFVBQUUsa0JBQWtCLEVBQUU3SSxPQUNyQjZJLEVBQUUsT0FBTyxFQUNQSSxTQUFTLHdCQUF3QixFQUNqQ0EsU0FBQSwwQkFBQXBLLE9BQW1Da0ssSUFBSSxDQUFFLEVBQ3pDL0ksT0FBQSxTQUFBbkIsT0FBZ0J5SCxNQUFJLFNBQUEsQ0FBUyxDQUNoQztBQUNBdUMsVUFBRSxrQkFBa0IsRUFBRUssS0FBSyx5QkFBeUIsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEdBQUc7QUFDdkUsYUFBS0MsS0FBSztBQUNWLGFBQUtDLE1BQU07QUFDWE4saUJBQVNILEVBQUUsa0JBQWtCLEVBQUVLLEtBQUsseUJBQXlCLEVBQUVDLEtBQUssQ0FBQztNQUN0RTtNQUNBRSxPQUFPO0FBQ04sY0FBTUUsT0FBTztBQUNiVixVQUFFLHlCQUF5QixFQUFFVyxHQUFHLGFBQWEsV0FBWTtBQUN4REQsZUFBS0UsVUFBVVosRUFBRSxJQUFJLENBQUM7UUFDdkIsQ0FBQztNQUNGO01BQ0FhLFFBQVFwRCxNQUFNMEMsVUFBVTtBQUN2QixhQUFLRixRQUFReEMsTUFBTSxXQUFXMEMsUUFBUTtNQUN2QztNQUNBbEMsUUFBUVIsTUFBTTBDLFVBQVU7QUFDdkIsYUFBS0YsUUFBUXhDLE1BQU0sV0FBVzBDLFFBQVE7TUFDdkM7TUFDQS9FLE1BQU1xQyxNQUFNMEMsVUFBVTtBQUNyQixhQUFLRixRQUFReEMsTUFBTSxTQUFTMEMsUUFBUTtNQUNyQztNQUNBTSxRQUFRO0FBQ1AsWUFBSVQsRUFBRSx5QkFBeUIsRUFBRWhKLFVBQVUsSUFBSTtBQUM5Q2dKLFlBQUUsa0JBQWtCLEVBQ2xCYyxTQUFTLEVBQ1RDLE1BQU0sRUFDTkMsUUFBUSxLQUFLLFdBQVk7QUFDekJoQixjQUFFLElBQUksRUFBRWlCLE9BQU87VUFDaEIsQ0FBQztBQUNGQyxxQkFBVyxLQUFLVCxPQUFPLEdBQUc7UUFDM0I7TUFDRDtNQUNBVSxNQUFNaEgsR0FBRztBQUNSNkYsVUFBRSx5QkFBeUIsRUFBRW9CLEtBQUssU0FBVTFGLEdBQUc7QUFDOUMsY0FBSSxPQUFPdkIsTUFBTSxZQUFZO0FBQzVCLGtCQUFNa0gsTUFBTXJCLEVBQUUsSUFBSTtBQUNsQmtCLHVCQUFXLE1BQU07QUFDaEIvRyxnQkFBRWtILEdBQUc7WUFDTixHQUFHLE1BQU0zRixDQUFDO1VBQ1gsT0FBTztBQUNOc0UsY0FBRSxJQUFJLEVBQ0pzQixNQUFNNUYsSUFBSSxHQUFHLEVBQ2JzRixRQUFRLFFBQVEsV0FBWTtBQUM1QmhCLGdCQUFFLElBQUksRUFBRWlCLE9BQU87WUFDaEIsQ0FBQztVQUNIO1FBQ0QsQ0FBQztNQUNGO01BQ0FMLFVBQVVTLEtBQUtFLE9BQU87QUFDckJGLFlBQUlHLElBQUksWUFBWSxVQUFVO0FBQzlCSCxZQUFJSSxRQUNIO1VBQ0NDLE1BQU07UUFDUCxHQUNBSCxTQUFTLEtBQ1QsV0FBWTtBQUNYdkIsWUFBRSxJQUFJLEVBQUVnQixRQUFRLFFBQVEsV0FBWTtBQUNuQ2hCLGNBQUUsSUFBSSxFQUFFaUIsT0FBTztVQUNoQixDQUFDO1FBQ0YsQ0FDRDtNQUNEO0lBQ0Q7QUFFT25CLDJCQUFRLElBQUlELGFBQWE7RUFBQTtBQUFBLENBQUE7O0FDL0VoQyxJQUVNOEI7QUFGTixJQU9PQztBQVBQLElBQUFDLGFBQUFoTixNQUFBO0VBQUEsd0NBQUE7QUFBQTtBQUVNOE0sWUFBU0csVUFBUztBQUN2QixhQUFPLElBQUkvQyxRQUFTZ0QsYUFBWTtBQUMvQixlQUFPYixXQUFXYSxTQUFTRCxJQUFJO01BQ2hDLENBQUM7SUFDRjtBQUNPRixvQkFBUUQ7RUFBQTtBQUFBLENBQUE7O0FDRVIsU0FBU0ssV0FBV3RMLEtBQUs7QUFDL0IsUUFBTXVMLE1BQU07QUFDWixRQUFNeEYsU0FBUyxDQUFDO0FBQ2hCLE1BQUl5RjtBQUNKLFNBQVFBLFFBQVFELElBQUlFLEtBQUt6TCxHQUFHLEdBQUk7QUFDL0IsUUFBSTtBQUNIK0YsYUFBT3lGLE1BQU0sQ0FBQyxDQUFDLElBQUlFLG1CQUFtQkYsTUFBTSxDQUFDLENBQUM7SUFDL0MsUUFBUTtBQUNQekYsYUFBT3lGLE1BQU0sQ0FBQyxDQUFDLElBQUlBLE1BQU0sQ0FBQztJQUMzQjtFQUNEO0FBQ0EsU0FBT3pGO0FBQ1I7QUFyQkEsSUFBQTRGLGVBQUF4TixNQUFBO0VBQUEsMENBQUE7QUFBQTtFQUFBO0FBQUEsQ0FBQTs7QUNBQSxJQVNNeU47QUFUTixJQXFsQk9DO0FBcmxCUCxJQUFBQyxVQUFBM04sTUFBQTtFQUFBLG9DQUFBO0FBQUE7QUFFQUQsbUJBQUE7QUFDQW1MLHNCQUFBO0FBQ0ExSCxjQUFBO0FBQ0EwQyxhQUFBO0FBQ0E4RyxlQUFBO0FBQ0FRLGlCQUFBO0FBRU1DLFNBQU4sTUFBUztNQUNSRyx3QkFBd0I7TUFDeEJDLFlBQVk7Ozs7Ozs7OztNQVVaQyxnQkFBZ0JwRyxRQUFRLFlBQVlxQixVQUFVLElBQUlnRixRQUFRLEtBQUt6QyxXQUFXQSxNQUFNO01BQUMsR0FBRztBQUNuRixZQUFJSCxFQUFFLG9CQUFvQixFQUFFaEosU0FBUyxHQUFHO0FBQ3ZDZ0osWUFBRSxvQkFBb0IsRUFBRW9CLEtBQUssV0FBWTtBQUN4Q3BCLGNBQUUsSUFBSSxFQUFFaUIsT0FBTztVQUNoQixDQUFDO1FBQ0Y7QUFDQSxjQUFNNEIsY0FBYzdOLE9BQU84TjtBQUMzQixjQUFNQyxlQUFlL04sT0FBT2dPO0FBQzVCLGNBQU1DLGNBQWNDLEtBQUtDLElBQUlOLGFBQWFELEtBQUs7QUFDL0MsY0FBTVEsWUFBWXBELEVBQUUsT0FBTyxFQUN6QkksU0FBUyxtQkFBbUIsRUFDNUJvQixJQUFJO1VBQ0osZUFBZXFCLGNBQWMsSUFBSUksY0FBYztVQUMvQ0ksS0FBS3JELEVBQUVzRCxRQUFRLEVBQUVaLFVBQVUsSUFBSUssZUFBZTtVQUM5QzlDLFNBQVM7UUFDVixDQUFDLEVBQ0E5SSxPQUFPNkksRUFBRSxPQUFPLEVBQUVJLFNBQVMsMEJBQTBCLEVBQUVtRCxLQUFLaEgsS0FBSyxDQUFDLEVBQ2xFcEYsT0FBTzZJLEVBQUUsT0FBTyxFQUFFSSxTQUFTLDJCQUEyQixFQUFFakosT0FBT3lHLE9BQU8sQ0FBQyxFQUN2RXpHLE9BQU82SSxFQUFFLFFBQVEsRUFBRXZDLEtBQUssR0FBRyxFQUFFMkMsU0FBUyx5QkFBeUIsQ0FBQztBQUNsRUosVUFBRSxNQUFNLEVBQUU3SSxPQUFPaU0sU0FBUztBQUMxQnBELFVBQUUsb0JBQW9CLEVBQUU0QyxNQUFNSyxXQUFXO0FBQ3pDakQsVUFBRSwwQkFBMEIsRUFBRVcsR0FBRyxTQUFTLFdBQVk7QUFDckRYLFlBQUUsSUFBSSxFQUNKd0QsT0FBTyxFQUNQeEMsUUFBUSxRQUFRLFdBQVk7QUFDNUJoTSxtQkFBT3lPLGlCQUFpQixTQUFVek8sT0FBTzBPLGlCQUFpQixNQUFVO0FBQ3BFMUQsY0FBRSxJQUFJLEVBQUVpQixPQUFPO1VBQ2hCLENBQUM7UUFDSCxDQUFDO0FBRUQsY0FBTTBDLGVBQWUsU0FBVUMsU0FBUztBQUN2Q0Esa0JBQVFDLFVBQVczSixPQUFNO0FBQ3hCLGtCQUFNNEosUUFBUTVKLEVBQUU2SjtBQUNoQixrQkFBTUMsUUFBUTlKLEVBQUUrSjtBQUNoQixrQkFBTUMsY0FBY04sUUFBUUosT0FBTyxFQUFFVyxPQUFPLEVBQUV6QztBQUM5QyxrQkFBTTBDLGNBQWNSLFFBQVFKLE9BQU8sRUFBRVcsT0FBTyxFQUFFZDtBQUM5Q3JELGNBQUVzRCxRQUFRLEVBQUUzQyxHQUFHLGFBQWMwRCxRQUFNO0FBQ2xDVCxzQkFBUUosT0FBTyxFQUFFaEMsSUFBSTtnQkFDcEIsZUFBZTBDLGNBQWNHLEdBQUVOLFVBQVVEO2dCQUN6Q1QsS0FBS2UsY0FBY0MsR0FBRUosVUFBVUQ7Y0FDaEMsQ0FBQztZQUNGLENBQUM7QUFDRGhFLGNBQUVzRCxRQUFRLEVBQUUzQyxHQUFHLFdBQVcsTUFBTTtBQUMvQmlELHNCQUFRVSxPQUFPLFdBQVc7QUFDMUJ0RSxnQkFBRXNELFFBQVEsRUFBRWlCLElBQUksV0FBVztBQUMzQnZFLGdCQUFFc0QsUUFBUSxFQUFFaUIsSUFBSSxTQUFTO0FBQ3pCWiwyQkFBYUMsT0FBTztZQUNyQixDQUFDO1VBQ0YsQ0FBQztRQUNGO0FBQ0FELHFCQUFhM0QsRUFBRSwyQkFBMkIsQ0FBQztBQUMzQ0EsVUFBRSxvQkFBb0IsRUFBRU8sT0FBTyxHQUFHO0FBQ2xDSixpQkFBUztBQUNULGVBQU9pRDtNQUNSOzs7Ozs7Ozs7TUFVQW9CLGtCQUFrQi9HLE1BQU1nSCxJQUFJO0FBQzNCLFlBQUlDO0FBQ0osZ0JBQVEvUCxrQkFBVWlCLE1BQUE7VUFDakIsS0FBSztBQUNKOE8scUJBQVMxRSxFQUFFLE1BQU0sRUFDZjJFLEtBQUssTUFBTUYsRUFBRSxFQUNickUsU0FBUyxrQkFBa0IsRUFDM0JqSixPQUNBNkksRUFBRSxLQUFLLEVBQ0xJLFNBQVMsdURBQXVELEVBQ2hFakosT0FDQTZJLEVBQUUsUUFBUSxFQUNSMkUsS0FBSyxRQUFRLHFCQUFxQixFQUNsQ3ZFLFNBQVMseUJBQXlCLEVBQ2xDM0MsS0FBS0EsSUFBSSxDQUNaLENBQ0Y7QUFDRDtVQUVELEtBQUs7QUFDSmlILHFCQUFTMUUsRUFBRSxNQUFNLEVBQ2ZJLFNBQVMsK0JBQStCLEVBQ3hDdUUsS0FBSyxNQUFNRixFQUFFLEVBQ2J0TixPQUFPNkksRUFBRSxLQUFLLEVBQUUyRSxLQUFLLFFBQVEscUJBQXFCLEVBQUVsSCxLQUFLQSxJQUFJLENBQUM7QUFDaEU7VUFFRDtBQUNDaUgscUJBQVMxRSxFQUFFLE1BQU0sRUFDZkksU0FBUyxjQUFjLEVBQ3ZCQSxTQUFTLG1CQUFtQixFQUM1QnVFLEtBQUssTUFBTUYsRUFBRSxFQUNidE4sT0FBTzZJLEVBQUUsS0FBSyxFQUFFMkUsS0FBSyxRQUFRLHFCQUFxQixFQUFFbEgsS0FBS0EsSUFBSSxDQUFDO1FBQ2xFO0FBQ0EsWUFBSTlJLGtCQUFVaUIsU0FBUyxhQUFhb0ssRUFBRSxPQUFPLEVBQUVoSixTQUFTLEdBQUc7QUFDMURnSixZQUFFLE9BQU8sRUFBRTdJLE9BQU91TixNQUFNO0FBQ3hCLGlCQUFPMUUsRUFBQSxJQUFBaEssT0FBTXlPLEVBQUUsQ0FBRTtRQUNsQixXQUFXOVAsa0JBQVVpQixTQUFTLFdBQVc7QUFDeENvSyxZQUFFLG9CQUFvQixFQUFFZSxNQUFNLEVBQUU1SixPQUFPdU4sTUFBTTtBQUM3QyxpQkFBTzFFLEVBQUEsSUFBQWhLLE9BQU15TyxFQUFFLENBQUU7UUFDbEIsV0FBV3pFLEVBQUUsYUFBYSxFQUFFaEosU0FBUyxHQUFHO0FBQ3ZDZ0osWUFBRSxnQkFBZ0IsRUFBRTdJLE9BQU91TixNQUFNO0FBQ2pDLGlCQUFPMUUsRUFBQSxJQUFBaEssT0FBTXlPLEVBQUUsQ0FBRTtRQUNsQjtBQUNBM0osb0JBQUlKLEtBQUt0QyxhQUFLaUIsVUFBVSxrQkFBa0IsQ0FBQztNQUM1Qzs7Ozs7O01BT0F1TCwyQkFBMkJDLFVBQVVBLE1BQU07TUFBQyxHQUFHO0FBQzlDLGNBQU1ILFNBQVMsS0FBS0Ysa0JBQWtCcE0sYUFBS2lCLFVBQVUsZUFBZSxHQUFHLG1CQUFtQjtBQUMxRixZQUFJcUwsUUFBUTtBQUNYQSxpQkFBTy9ELEdBQUcsU0FBU2tFLE9BQU87UUFDM0I7TUFDRDs7Ozs7O01BT0FDLDBCQUEwQkQsVUFBVUEsTUFBTTtNQUFDLEdBQUc7QUFDN0MsY0FBTUgsU0FBUyxLQUFLRixrQkFBa0JwTSxhQUFLaUIsVUFBVSxtQkFBbUIsR0FBRyx5QkFBeUI7QUFDcEcsWUFBSXFMLFFBQVE7QUFDWEEsaUJBQU8vRCxHQUFHLFNBQVNrRSxPQUFPO1FBQzNCO01BQ0Q7Ozs7Ozs7TUFRQUUsd0JBQXdCRixTQUFTO0FBQ2hDLGNBQU1HLFNBQVNoRixFQUFFLE1BQU0sRUFBRTJFLEtBQUssTUFBTSxzQkFBc0IsRUFBRUEsS0FBSyxTQUFTLGNBQWM7QUFDeEYsY0FBTU0sYUFBYWpGLEVBQUUsS0FBSyxFQUN4QjJFLEtBQUssUUFBUSxvQkFBb0IsRUFDakNsSCxLQUFBLEdBQUF6SCxPQUFRb0MsYUFBS2lCLFVBQVUsa0JBQWtCLENBQUMsQ0FBRTtBQUM5QzJMLGVBQU83TixPQUFPOE4sVUFBVTtBQUN4QixnQkFBUXRRLGtCQUFVaUIsTUFBQTtVQUNqQixLQUFLO0FBQ0pvUCxtQkFBT3hELElBQUk7Y0FBQyxlQUFlO2NBQVV2QixTQUFTO1lBQU0sQ0FBQztBQUNyRCtFLG1CQUFPM0UsS0FBSyxNQUFNLEVBQUVELFNBQVMsOEJBQThCO0FBQzNENEUsbUJBQ0UzRSxLQUFLLEdBQUcsRUFDUkQsU0FDQSw4RkFDRCxFQUNDb0IsSUFBSSxrQkFBa0IsUUFBUTtBQUNoQztVQUVELEtBQUs7QUFDSndELG1CQUFPNUUsU0FBUyxtQkFBbUI7QUFDbkM7VUFFRCxLQUFLO0FBQ0o0RSxtQkFBTzdOLE9BQU82SSxFQUFFLFFBQVEsRUFBRTdJLE9BQU84TixVQUFVLENBQUM7QUFDNUM7VUFFRDtRQUNEO0FBQ0FqRixVQUFFZ0YsTUFBTSxFQUFFckUsR0FBRyxTQUFTLE1BQU07QUFDM0JrRSxrQkFBUTtZQUNQSyxlQUFlO1lBQ2ZDLGdCQUFnQnhRLGtCQUFVUztVQUMzQixDQUFDO1FBQ0YsQ0FBQztBQUNELFlBQUk0SyxFQUFFLFVBQVUsRUFBRWhKLFNBQVMsS0FBS2dKLEVBQUUsdUJBQXVCLEVBQUVoSixXQUFXLEdBQUc7QUFDeEVyQyw0QkFBVWlCLFNBQVMsWUFBWW9LLEVBQUUsVUFBVSxFQUFFd0QsT0FBTyxFQUFFNEIsTUFBTUosTUFBTSxJQUFJaEYsRUFBRSxVQUFVLEVBQUVvRixNQUFNSixNQUFNO1FBQ2pHO01BQ0Q7Ozs7Ozs7TUFRQUssOEJBQThCUixVQUFVQSxNQUFNO01BQUMsR0FBRztBQUNqRCxjQUFNUyxhQUNMM1Esa0JBQVVpQixTQUFTLFlBQ2hCb0ssRUFBRSxRQUFRLEVBQUU3SSxPQUNaNkksRUFBRSxLQUFLLEVBQ0xJLFNBQ0EsMEhBQ0QsRUFDQ29CLElBQUksZUFBZSxRQUFRLEVBQzNCbUQsS0FBSyxRQUFRLG9CQUFvQixFQUNqQ0EsS0FBSyxTQUFTdk0sYUFBS2lCLFVBQVUsc0JBQXNCLENBQUMsQ0FDdkQsSUFDQzJHLEVBQUUsUUFBUSxFQUNUN0ksT0FBTzZJLEVBQUUsUUFBUSxFQUFFSSxTQUFTLHdCQUF3QixFQUFFM0MsS0FBSyxLQUFLLENBQUMsRUFDakV0RyxPQUNBNkksRUFBRSxLQUFLLEVBQ0xJLFNBQVMsMEJBQTBCLEVBQ25DdUUsS0FBSyxRQUFRLG9CQUFvQixFQUNqQ2xILEtBQUtyRixhQUFLaUIsVUFBVSxzQkFBc0IsQ0FBQyxDQUM5QztBQUNKMkcsVUFBRSxpQkFBaUIsRUFBRW9CLEtBQUssU0FBVTFGLEdBQUc7QUFDdEMsY0FBSTtBQUNILGtCQUFNNkosVUFBVXZGLEVBQUUsSUFBSSxFQUFFSyxLQUFLLHdCQUF3QixFQUFFVSxNQUFNLEVBQUU0RCxLQUFLLE1BQU07QUFDMUUsa0JBQU1PLGdCQUFnQkssUUFDcEJyRCxNQUFNLHdCQUF3QixFQUFFLENBQUMsRUFDakM3TSxRQUFRLFFBQVEsRUFBRTtBQUNwQixrQkFBTW1RLG9CQUFvQnBELG1CQUFtQm1ELFFBQVFyRCxNQUFNLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDN0Usa0JBQU11RCxZQUFZekYsRUFBRSxJQUFJLEVBQUUwRixLQUFLLEVBQUVDLE1BQU07QUFDdkNGLHNCQUFVcEYsS0FBSyxxQkFBcUIsRUFBRVksT0FBTztBQUM3QyxrQkFBTTJFLGNBQWNILFVBQVVoSSxLQUFLLEVBQUVvSSxLQUFLO0FBQzFDLGtCQUFNQyxjQUFjUixXQUFXSyxNQUFNO0FBQ3JDRyx3QkFBWXpGLEtBQUssMkJBQTJCLEVBQUVNLEdBQUcsU0FBUyxNQUFNO0FBQy9Ea0Usc0JBQVE7Z0JBQ1BLO2dCQUNBVTtnQkFDQVQsZ0JBQWdCSztjQUNqQixDQUFDO1lBQ0YsQ0FBQztBQUNEN1EsOEJBQVVpQixTQUFTLFlBQ2hCb0ssRUFBRSxJQUFJLEVBQUU3SSxPQUFPMk8sV0FBVyxJQUMxQjlGLEVBQUUsSUFBSSxFQUFFSyxLQUFLLHlCQUF5QixFQUFFQyxLQUFLLEVBQUV5RixPQUFPRCxXQUFXO1VBQ3JFLFFBQVE7QUFDUGhMLHdCQUFJTSxNQUFNLHdCQUF3QjtVQUNuQztRQUNELENBQUM7TUFDRjs7Ozs7O01BT0E0SyxzQkFBc0JuQixVQUFVQSxNQUFNO01BQUMsR0FBRztBQUN6QzdFLFVBQUUsNkJBQTZCLEVBQUVvQixLQUFLLFNBQVUxRixHQUFHO0FBQ2xELGdCQUFNaEYsTUFBTXNKLEVBQUUsSUFBSSxFQUFFMkUsS0FBSyxNQUFNO0FBQy9CLGdCQUFNbEksU0FBU3VGLFdBQVd0TCxHQUFHO0FBQzdCLGNBQUkrRixPQUFPOUcsV0FBVyxVQUFVOEcsT0FBT0YsVUFBVSxVQUFhRSxPQUFPWSxZQUFZLE9BQU87QUFDdkYyQyxjQUFFLElBQUksRUFBRW9GLE1BQ1BwRixFQUFFLEtBQUssRUFDTDJFLEtBQUs7Y0FDTHNCLE1BQU07Y0FDTkMsT0FBTztZQUNSLENBQUMsRUFDQXpJLEtBQUEsSUFBQXpILE9BQVNvQyxhQUFLaUIsVUFBVSxzQkFBc0IsR0FBQyxHQUFBLENBQUcsRUFDbERzSCxHQUFHLFNBQVMsTUFBTTtBQUFBLGtCQUFBd0Y7QUFDbEJ0QixzQkFBUTtnQkFDUE0sZ0JBQWdCMUksT0FBT0Y7Z0JBQ3ZCMkksZ0JBQUFpQixrQkFBZTFKLE9BQU9ZLGFBQUEsUUFBQThJLG9CQUFBLFNBQUFBLGtCQUFXO2NBQ2xDLENBQUM7WUFDRixDQUFDLENBQ0g7VUFDRDtRQUNELENBQUM7TUFDRjtNQUVBQyxtQkFBbUI7UUFDbEI3SixRQUFRO1FBQ1JxQixVQUFVO1FBQ1Z5SSxVQUFVO1FBQ1ZDLFNBQVNBLE1BQU07UUFBQztRQUNoQkMsVUFBVUEsTUFBTTtRQUFDO1FBQ2pCQyxTQUFTQSxNQUFNO1FBQUM7UUFDaEJDLFVBQVU7TUFDWCxHQUFHO0FBQ0YsY0FBTS9GLE9BQU87QUFDYixhQUFLZ0MsWUFBWTFDLEVBQUVzRCxRQUFRLEVBQUVaLFVBQVU7QUFDdkMsWUFBSSxLQUFLRCx1QkFBdUI7QUFDL0IsZUFBS2lFLG1CQUFtQjtRQUN6QjtBQUNBLGFBQUtqRSx3QkFBd0I7QUFFN0J6TixlQUFPeU8saUJBQ04sU0FDQ3pPLE9BQU8wTyxpQkFBaUIsV0FBWTtBQUNwQyxpQkFBQSxHQUFBMU4sT0FBVW9DLGFBQUtpQixVQUFVLGlCQUFpQixDQUFDO1FBQzVDLENBQ0Q7QUFDQSxjQUFNbUYsWUFBWXdCLEVBQUUsZ0JBQWdCLEVBQUVoSixTQUFTO0FBRS9DLGNBQU0yUCxVQUFVM0csRUFBRSxRQUFRLEVBQ3hCMkUsS0FBSyxNQUFNLHlCQUF5QixFQUNwQ3ZFLFNBQVMsY0FBYyxFQUN2QjNDLEtBQUEsR0FBQXpILE9BQVFvQyxhQUFLaUIsVUFBVSxNQUFNLENBQUMsQ0FBRTtBQUNsQyxjQUFNdU4sVUFBVTVHLEVBQUUsUUFBUSxFQUN4QjJFLEtBQUssTUFBTSx5QkFBeUIsRUFDcEN2RSxTQUFTLGNBQWMsRUFDdkJqSixPQUNBNkksRUFBRSxLQUFLLEVBQ0wyRSxLQUFLLFFBQVEscUJBQXFCLEVBQ2xDbEgsS0FBQSxHQUFBekgsT0FBUW9DLGFBQUtpQixVQUFVLGNBQWMsQ0FBQyxDQUFFLENBQzNDO0FBQ0QsY0FBTXdOLFdBQVc3RyxFQUFFLFlBQVksRUFBRTJFLEtBQUssTUFBTSxvQkFBb0I7QUFDaEUsY0FBTW1DLGFBQWE5RyxFQUFFLE9BQU8sRUFBRTJFLEtBQUssTUFBTSxtQ0FBbUM7QUFDNUUsY0FBTW9DLGFBQWEvRyxFQUFFLFNBQVMsRUFDNUIyRSxLQUFLLE1BQU0sa0NBQWtDLEVBQzdDQSxLQUFLLGVBQUEsR0FBQTNPLE9BQWtCb0MsYUFBS2lCLFVBQVUsbUJBQW1CLENBQUMsQ0FBRTtBQUM5RCxjQUFNMk4sZ0JBQWdCaEgsRUFBRSxVQUFVLEVBQ2hDMkUsS0FBSyxNQUFNLDJCQUEyQixFQUN0Q2xILEtBQUEsR0FBQXpILE9BQVFvQyxhQUFLaUIsVUFBVW1GLFlBQVksaUJBQWlCLGdCQUFnQixHQUFDLFVBQUEsQ0FBVTtBQUNqRixjQUFNeUksbUJBQW1CakgsRUFBRSxVQUFVLEVBQ25DMkUsS0FBSyxNQUFNLG1DQUFtQyxFQUM5Q2xILEtBQUEsR0FBQXpILE9BQVFvQyxhQUFLaUIsVUFBVSxTQUFTLENBQUMsQ0FBRTtBQUNyQyxjQUFNNk4sY0FBY2xILEVBQUUsT0FBTyxFQUMzQjdJLE9BQU82SSxFQUFFLFNBQVMsRUFBRTJFLEtBQUs7VUFBQ3pFLE1BQU07VUFBWXVFLElBQUk7UUFBOEIsQ0FBQyxDQUFDLEVBQ2hGdE4sT0FDQTZJLEVBQUUsU0FBUyxFQUNUMkUsS0FBSyxPQUFPLDhCQUE4QixFQUMxQ2xILEtBQUEsR0FBQXpILE9BQVFvQyxhQUFLaUIsVUFBVSxnQkFBZ0IsR0FBQyxnQkFBQSxDQUFnQixDQUMzRCxFQUNDbUksSUFBSTtVQUFDMkYsUUFBUTtVQUFvQmxILFNBQVM7UUFBUSxDQUFDO0FBRXJELGNBQU1tSCxXQUFXcEgsRUFBRSxPQUFPLEVBQUU3SSxPQUMzQndQLFNBQ0FDLFNBQ0FFLFlBQ0FELFVBQ0FFLFlBQ0EvRyxFQUFFLE1BQU0sR0FDUmtILGFBQ0FGLGVBQ0FDLGdCQUNEO0FBQ0EsYUFBS3RFLGdCQUFnQnBHLE9BQU82SyxVQUFVLEtBQU0sTUFBTTtBQUNqRHBILFlBQUUscUJBQXFCLEVBQUVxSCxJQUFJekosT0FBTztBQUNwQ29DLFlBQUUsbUNBQW1DLEVBQUVxSCxJQUFJaEIsT0FBTztRQUNuRCxDQUFDO0FBRURyRyxVQUFFLDBCQUEwQixFQUFFVyxHQUFHLFNBQVMyRixNQUFNO0FBRWhEdEcsVUFBRSxvQ0FBb0MsRUFBRVcsR0FBRyxTQUFBbEssa0NBQVMsYUFBa0I7QUFDckUsZ0JBQU02USxnQkFBZ0J0SCxFQUFFLE9BQU8sRUFDN0JJLFNBQVMsaUJBQWlCLEVBQzFCM0MsS0FBQSxHQUFBekgsT0FBUW9DLGFBQUtpQixVQUFVLGlCQUFpQixDQUFDLENBQUU7QUFDN0MsZ0JBQU1vRyxXQUFXTyxFQUFFLHFCQUFxQixFQUFFcUgsSUFBSTtBQUM5Q3JILFlBQUUsSUFBSSxFQUFFMkUsS0FBSyxZQUFZLFVBQVU7QUFDbkMzRSxZQUFFLG9DQUFvQyxFQUFFZ0IsUUFBUSxLQUFLLE1BQU07QUFDMURoQixjQUFFLG9DQUFvQyxFQUFFdUQsS0FBSyxFQUFFLEVBQUVwTSxPQUFPbVEsYUFBYTtBQUNyRXRILGNBQUUsb0NBQW9DLEVBQUVPLE9BQU8sR0FBRztVQUNuRCxDQUFDO0FBQ0RQLFlBQUUsWUFBWSxFQUFFeUIsUUFBUTtZQUFDaUIsV0FBV2hDLEtBQUtnQztVQUFTLEdBQUcsR0FBRztBQUN4RCxnQkFBTW5KLFNBQUEsTUFBZWdOLFFBQVE5RyxRQUFRO0FBQ3JDTyxZQUFFLG9DQUFvQyxFQUFFZ0IsUUFBUSxPQUFPLE1BQU07QUFDNURoQixjQUFFLG9DQUFvQyxFQUFFdUQsS0FBQSxvQ0FBQXZOLE9BQXlDdUQsUUFBTSxZQUFBLENBQVk7QUFDbkd5RyxjQUFFLG9DQUFvQyxFQUFFTyxPQUFPLEtBQUs7QUFDcERQLGNBQUUsb0NBQW9DLEVBQUV0RCxLQUFLLFlBQVksS0FBSztVQUMvRCxDQUFDO1FBQ0YsQ0FBQyxDQUFBO0FBRURzRCxVQUFFLDRCQUE0QixFQUFFVyxHQUFHLFNBQUFsSyxrQ0FBUyxhQUFZO0FBQ3ZELGdCQUFNOFEsUUFBUUMsS0FBS0MsSUFBSTtBQUN2QixnQkFBTUMsYUFBYTFILEVBQUUsT0FBTyxFQUMxQkksU0FBUyxpQkFBaUIsRUFDMUIzQyxLQUFBLEdBQUF6SCxPQUFRb0MsYUFBS2lCLFVBQVUsaUJBQWlCLENBQUMsQ0FBRTtBQUM3QyxnQkFBTTNCLFVBQVU7WUFDZjJPLFNBQVNyRyxFQUFFLG1DQUFtQyxFQUFFcUgsSUFBSTtZQUNwRHpKLFNBQVNvQyxFQUFFLHFCQUFxQixFQUFFcUgsSUFBSTtZQUN0Q0gsYUFBYWxILEVBQUUsK0JBQStCLEVBQUUySCxHQUFHLFVBQVU7VUFDOUQ7QUFFQTNILFlBQUUsbUZBQW1GLEVBQUUyRSxLQUN0RixZQUNBLFVBQ0Q7QUFDQTNFLFlBQUUsWUFBWSxFQUFFeUIsUUFBUTtZQUFDaUIsV0FBV2hDLEtBQUtnQztVQUFTLEdBQUcsR0FBRztBQUN4RDFDLFlBQUUsb0NBQW9DLEVBQUVnQixRQUFRLEtBQUssTUFBTTtBQUMxRGhCLGNBQUUsb0NBQW9DLEVBQUV1RCxLQUFLLEVBQUUsRUFBRXBNLE9BQU91USxVQUFVO0FBQ2xFMUgsY0FBRSxvQ0FBb0MsRUFBRU8sT0FBTyxHQUFHO1VBQ25ELENBQUM7QUFDRCxjQUFJO0FBQ0gsa0JBQU1pRyxPQUFPOU8sT0FBTztBQUNwQixrQkFBTWtRLFVBQVVKLEtBQUtDLElBQUksSUFBSUY7QUFDN0J2SCxjQUFFLG9DQUFvQyxFQUNwQ0ssS0FBSyxrQkFBa0IsRUFDdkJtQixJQUFJLGNBQWMsd0JBQXdCO0FBQzVDeEIsY0FBRSxvQ0FBb0MsRUFDcENLLEtBQUssa0JBQWtCLEVBQ3ZCNUMsS0FBQSxHQUFBekgsT0FBUW9DLGFBQUtpQixVQUFVLGdCQUFnQixDQUFDdU8sUUFBUUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFO0FBQ2hFN1MsbUJBQU95TyxpQkFBaUIsU0FBVXpPLE9BQU8wTyxpQkFBaUIsTUFBVTtBQUNwRXhDLHVCQUFXLE1BQU07QUFDaEI3Syx1QkFBU3lSLE9BQU87WUFDakIsR0FBRyxHQUFHO1VBQ1AsU0FBUzFNLE9BQU87QUFDZlgsb0JBQVFzTixJQUFJM00sS0FBSztBQUNqQjRFLGNBQUUsa0JBQWtCLEVBQUV3QixJQUFJLGNBQWMsMkJBQTJCO0FBQ25FeEIsY0FBRSxrQkFBa0IsRUFBRXVELEtBQUtuSSxNQUFNSCxPQUFPO1VBQ3pDLFVBQUE7QUFDQytFLGNBQUUsbUZBQW1GLEVBQUV0RCxLQUN0RixZQUNBLEtBQ0Q7VUFDRDtRQUNELENBQUMsQ0FBQTtBQUVEc0QsVUFBRSxxRkFBcUYsRUFBRVcsR0FBRyxXQUFZekcsT0FBTTtBQUM3RyxjQUFJQSxFQUFFOE4sV0FBVzlOLEVBQUUrTixVQUFVLElBQUk7QUFDaEMsZ0JBQUkvTixFQUFFZ08sVUFBVTtBQUNmbEksZ0JBQUUsK0JBQStCLEVBQUVtSSxRQUFRLE9BQU87WUFDbkQ7QUFDQW5JLGNBQUUsNEJBQTRCLEVBQUVtSSxRQUFRLE9BQU87QUFDL0NqTyxjQUFFa08sZUFBZTtBQUNqQmxPLGNBQUVtTyxnQkFBZ0I7VUFDbkI7UUFDRCxDQUFDO0FBRUQsWUFBSTVCLFNBQVM7QUFDWnpHLFlBQUVzRCxRQUFRLEVBQUUzQyxHQUFHLFdBQVl6RyxPQUFNO0FBQ2hDLGdCQUFJQSxFQUFFK04sVUFBVSxJQUFJO0FBQ25CakksZ0JBQUUsMEJBQTBCLEVBQUVtSSxRQUFRLE9BQU87WUFDOUM7VUFDRCxDQUFDO1FBQ0Y7TUFDRDtNQUVBekIscUJBQXFCO0FBQ3BCLGFBQUtqRSx3QkFBd0I7QUFDN0J6QyxVQUFFLG9CQUFvQixFQUFFZ0IsUUFBUSxRQUFRLFdBQVk7QUFDbkRoTSxpQkFBT3lPLGlCQUFpQixTQUFVek8sT0FBTzBPLGlCQUFpQixNQUFVO0FBQ3BFMUQsWUFBRSxJQUFJLEVBQUVpQixPQUFPO1FBQ2hCLENBQUM7TUFDRjs7Ozs7Ozs7TUFTQXFILHdCQUF3QjtRQUFDOUIsU0FBU0EsTUFBTTtRQUFDO1FBQUcrQixZQUFZQSxNQUFNO1FBQUM7TUFBQyxJQUFJLENBQUMsR0FBRztBQUFBLFlBQUFDLFVBQUE7QUFDdkUsY0FBTUMsUUFBUXpJLEVBQUUsU0FBUyxFQUFFSSxTQUFTLHlCQUF5QixFQUFFdUUsS0FBSyxNQUFNLG1CQUFtQjtBQUM3RixjQUFNK0Qsb0JBQW9CMUksRUFBRSxLQUFLLEVBQUV2QyxLQUFLckYsYUFBS2lCLFVBQVUsdUJBQXVCLENBQUM7QUFDL0UsY0FBTXNQLGVBQWUzSSxFQUFFLFNBQVMsRUFBRUksU0FBUyx5QkFBeUIsRUFBRXVFLEtBQUssTUFBTSxxQkFBcUI7QUFDdEcsY0FBTWlFLFdBQVc1SSxFQUFFLE9BQU8sRUFDeEJJLFNBQVMsdUJBQXVCLEVBQ2hDdUUsS0FBSyxNQUFNLG1CQUFtQixFQUM5QmxILEtBQUtyRixhQUFLaUIsVUFBVSxRQUFRLENBQUM7QUFDL0IsY0FBTXdQLFlBQVk3SSxFQUFFLE9BQU8sRUFDekJJLFNBQVMsdUJBQXVCLEVBQ2hDdUUsS0FBSyxNQUFNLG9CQUFvQixFQUMvQmxILEtBQUtyRixhQUFLaUIsVUFBVSxRQUFRLENBQUM7QUFDL0IsY0FBTXlQLGNBQWM5SSxFQUFFLE9BQU8sRUFDM0JJLFNBQVMsdUJBQXVCLEVBQ2hDdUUsS0FBSyxNQUFNLHNCQUFzQixFQUNqQ2xILEtBQUtyRixhQUFLaUIsVUFBVSxVQUFVLENBQUM7QUFDakMsY0FBTXVFLFVBQVVvQyxFQUFFLE9BQU8sRUFDdkI3SSxPQUFPc1IsS0FBSyxFQUNadFIsT0FBT3VSLGlCQUFpQixFQUN4QnZSLE9BQU93UixZQUFZLEVBQ25CeFIsT0FBTzZJLEVBQUUsTUFBTSxDQUFDLEVBQ2hCN0ksT0FBT3lSLFFBQVEsRUFDZnpSLE9BQU8wUixTQUFTO0FBQ2xCLGNBQU1FLFNBQVMsS0FBS3BHLGdCQUFnQnZLLGFBQUtpQixVQUFVLGVBQWUsR0FBR3VFLFNBQVMsR0FBRztBQUNqRmdMLGlCQUFTakksR0FBRyxTQUFBbEssa0NBQVMsYUFBWTtBQUNoQyxnQkFBTThGLFFBQVF5RCxFQUFFLG9CQUFvQixFQUFFcUgsSUFBSTtBQUMxQyxnQkFBTWhCLFVBQVVyRyxFQUFFLHNCQUFzQixFQUFFcUgsSUFBSTtBQUM5Q3JILFlBQUUsNEJBQTRCLEVBQUV1RCxLQUFBLGdDQUFBdk4sT0FDQ29DLGFBQUtpQixVQUFVLGlCQUFpQixHQUFDLFFBQUEsQ0FDbEU7QUFDQSxjQUFJO0FBQ0gsa0JBQU1tTixPQUFPO2NBQ1pqSztjQUNBOEo7Y0FDQTJDLGdCQUFnQjtZQUNqQixDQUFDO0FBQ0RoSixjQUFFLGtCQUFrQixFQUFFdkMsS0FBS3JGLGFBQUtpQixVQUFVLGdCQUFnQixDQUFDO0FBQzNEbVAsb0JBQUtTLHdCQUF3QkYsTUFBTTtBQUNuQ1Isc0JBQVU7Y0FBQ2hNO1lBQUssQ0FBQztVQUNsQixTQUFTbkIsT0FBTztBQUNmNEUsY0FBRSxrQkFBa0IsRUFBRXdCLElBQUksY0FBYywyQkFBMkI7QUFDbkV4QixjQUFFLGtCQUFrQixFQUFFdkMsS0FBS3JDLE1BQU1ILE9BQU87QUFDeEMsZ0JBQUlHLE1BQU1GLFNBQVMsaUJBQWlCO0FBQ25DOEUsZ0JBQUUsNEJBQTRCLEVBQUU3SSxPQUFPNkksRUFBRSxNQUFNLENBQUMsRUFBRTdJLE9BQU8yUixXQUFXLEVBQUUzUixPQUFPMFIsU0FBUztBQUN0RkEsd0JBQVVsSSxHQUFHLFNBQVMsTUFBTTtBQUMzQjZILHdCQUFLUyx3QkFBd0JGLE1BQU07Y0FDcEMsQ0FBQztBQUNERCwwQkFBWW5JLEdBQUcsU0FBQWxLLGtDQUFTLGFBQVk7QUFDbkN1SixrQkFBRSw0QkFBNEIsRUFBRXVELEtBQUEsZ0NBQUF2TixPQUNDb0MsYUFBS2lCLFVBQVUsaUJBQWlCLEdBQUMsUUFBQSxDQUNsRTtBQUNBLG9CQUFJO0FBQ0gsd0JBQU1tTixPQUFPO29CQUNaaks7b0JBQ0E4SjtvQkFDQTJDLGdCQUFnQjtrQkFDakIsQ0FBQztBQUNEaEosb0JBQUUsa0JBQWtCLEVBQUV2QyxLQUFLckYsYUFBS2lCLFVBQVUsZ0JBQWdCLENBQUM7QUFDM0RtUCwwQkFBS1Msd0JBQXdCRixNQUFNO0FBQ25DUiw0QkFBVTtvQkFBQ2hNO2tCQUFLLENBQUM7Z0JBQ2xCLFNBQVMyTSxRQUFPO0FBQ2ZsSixvQkFBRSxrQkFBa0IsRUFBRXdCLElBQUksY0FBYywyQkFBMkI7QUFDbkV4QixvQkFBRSxrQkFBa0IsRUFBRXZDLEtBQUt5TCxPQUFNak8sT0FBTztnQkFDekM7Y0FDRCxDQUFDLENBQUE7WUFDRjtVQUNEO1FBQ0QsQ0FBQyxDQUFBO0FBQ0Q0TixrQkFBVWxJLEdBQUcsU0FBUyxNQUFNO0FBQzNCLGVBQUtzSSx3QkFBd0JGLE1BQU07UUFDcEMsQ0FBQztNQUNGOzs7Ozs7TUFPQUUsd0JBQXdCRixTQUFTL0ksRUFBRSxNQUFNLEdBQUc7QUFDM0MrSSxlQUFPMUksS0FBSywwQkFBMEIsRUFBRThILFFBQVEsT0FBTztNQUN4RDtNQUVBZ0Isa0JBQWtCO1FBQUNDLFdBQVdBLE1BQU07UUFBQztNQUFDLElBQUksQ0FBQyxHQUFHO0FBQUEsWUFBQUMsVUFBQTtBQUM3QyxjQUFNWixRQUFRekksRUFBRSxZQUFZLEVBQUUyRSxLQUFLLE1BQU0sd0JBQXdCLEVBQUVBLEtBQUssUUFBUSxJQUFJO0FBQ3BGLGNBQU1pRSxXQUFXNUksRUFBRSxPQUFPLEVBQ3hCSSxTQUFTLHVCQUF1QixFQUNoQ3VFLEtBQUssTUFBTSx3QkFBd0IsRUFDbkNsSCxLQUFLckYsYUFBS2lCLFVBQVUsUUFBUSxDQUFDO0FBQy9CLGNBQU13UCxZQUFZN0ksRUFBRSxPQUFPLEVBQ3pCSSxTQUFTLHVCQUF1QixFQUNoQ3VFLEtBQUssTUFBTSx5QkFBeUIsRUFDcENsSCxLQUFLckYsYUFBS2lCLFVBQVUsUUFBUSxDQUFDO0FBQy9CLGNBQU11RSxVQUFVb0MsRUFBRSxPQUFPLEVBQUU3SSxPQUFPc1IsS0FBSyxFQUFFdFIsT0FBTzZJLEVBQUUsTUFBTSxDQUFDLEVBQUU3SSxPQUFPeVIsUUFBUSxFQUFFelIsT0FBTzBSLFNBQVM7QUFFNUYsY0FBTUUsU0FBUyxLQUFLcEcsZ0JBQWdCdkssYUFBS2lCLFVBQVUsd0JBQXdCLEdBQUd1RSxTQUFTLEtBQUssTUFBTTtBQUNqRyxjQUFJaEYsYUFBYTBRLG1CQUFtQjtBQUNuQ3RKLGNBQUUseUJBQXlCLEVBQUVxSCxJQUFJek8sYUFBYTBRLGlCQUFpQjtBQUMvRCxnQkFBSTtBQUNILG9CQUFNQyxXQUFXN1EsS0FBS0MsTUFBTUMsYUFBYTBRLGlCQUFpQjtBQUMxRHRKLGdCQUFFLHlCQUF5QixFQUFFcUgsSUFBSTNPLEtBQUtpQyxVQUFVNE8sVUFBVSxNQUFNLENBQUMsQ0FBQztZQUNuRSxRQUFRO1lBRVI7VUFDRCxPQUFPO0FBQ052SixjQUFFLHlCQUF5QixFQUFFMkUsS0FBSyxlQUFldk0sYUFBS2lCLFVBQVUsK0JBQStCLENBQUM7VUFDakc7UUFDRCxDQUFDO0FBQ0R1UCxpQkFBU2pJLEdBQUcsU0FBQWxLLGtDQUFTLGFBQVk7QUFDaEMsZ0JBQU0rUyxjQUFjeEosRUFBRSxPQUFPLEVBQUVJLFNBQVMsaUJBQWlCLEVBQUUzQyxLQUFLckYsYUFBS2lCLFVBQVUseUJBQXlCLENBQUM7QUFDekcsZ0JBQU1rUSxXQUFXdkosRUFBRSx5QkFBeUIsRUFBRXFILElBQUk7QUFDbEQsY0FBSTtBQUNIK0IscUJBQVM7Y0FBQ0c7WUFBUSxDQUFDO0FBQ25CdkosY0FBRSw0QkFBNEIsRUFBRXVELEtBQUssRUFBRSxFQUFFcE0sT0FBT3FTLFdBQVc7QUFDM0Qsa0JBQU01SCxjQUFNLElBQUk7QUFDaEJ5SCxvQkFBS0ksa0JBQWtCVixNQUFNO1VBQzlCLFFBQVE7QUFDUGpKLGlDQUFhMUUsTUFBTWhELGFBQUtpQixVQUFVLGlDQUFpQyxDQUFDO1VBQ3JFO1FBQ0QsQ0FBQyxDQUFBO0FBQ0R3UCxrQkFBVWxJLEdBQUcsU0FBUyxNQUFNO0FBQzNCLGVBQUs4SSxrQkFBa0JWLE1BQU07UUFDOUIsQ0FBQztNQUNGO01BRUFVLGtCQUFrQlYsU0FBUy9JLEVBQUUsTUFBTSxHQUFHO0FBQ3JDK0ksZUFBTzFJLEtBQUssMEJBQTBCLEVBQUU4SCxRQUFRLE9BQU87TUFDeEQ7TUFFQXVCLGtCQUFrQkMsV0FBVztBQUM1QjNKLFVBQUUsTUFBTSxFQUNOYyxTQUFTLElBQUksRUFDYlQsS0FBSyxHQUFHLEVBQ1JlLEtBQUssU0FBVTFGLEdBQUc7QUFDbEJzRSxZQUFFLElBQUksRUFBRVcsR0FBRyxhQUFhLFdBQVk7QUFDbkNYLGNBQUUsSUFBSSxFQUFFdUUsSUFBSSxXQUFXO0FBQ3ZCb0Ysc0JBQVU7Y0FDVHpFLGVBQWV4SixJQUFJO1lBQ3BCLENBQUM7VUFDRixDQUFDO1FBQ0YsQ0FBQztNQUNIO0lBQ0Q7QUFFTzZHLGlCQUFRLElBQUlELEdBQUc7RUFBQTtBQUFBLENBQUE7O0FDcmxCdEIsSUFFTXNIO0FBRk4sSUFxQ09DO0FBckNQLElBQUFDLGdCQUFBalYsTUFBQTtFQUFBLDJDQUFBO0FBQUE7QUFFTStVLGVBQU4sTUFBZTtNQUNkRyxXQUFXOVMsS0FBSytTLFNBQVMsQ0FBQyxHQUFHO0FBQzVCLGNBQU1DLElBQUlEO0FBQ1YsWUFBSVQ7QUFDSixZQUFJO0FBQ0hBLHFCQUFXN1EsS0FBS0MsTUFBTUMsYUFBYSxtQkFBbUIsQ0FBQztRQUN4RCxRQUFRO0FBQ1A7UUFDRDtBQUNBLFlBQUk7QUFDSCxnQkFBTXNSLHdCQUF3QixJQUFJQyxTQUFBLFVBQUFuVSxPQUFtQnVULFNBQVN0UyxHQUFHLENBQUMsQ0FBRTtBQUNwRSxjQUFJLE9BQU9pVCwwQkFBMEIsWUFBWTtBQUNoRCxnQkFBSTtBQUNILGtCQUFJQSxzQkFBc0IsRUFBRUQsQ0FBQyxNQUFNLE1BQU07Y0FDekMsT0FBTztBQUNOLHVCQUFPQyxzQkFBc0IsRUFBRUQsQ0FBQyxLQUFLVixTQUFTdFMsR0FBRztjQUNsRDtZQUNELFFBQVE7QUFDUCxxQkFBT3NTLFNBQVN0UyxHQUFHO1lBQ3BCO1VBQ0QsT0FBTztBQUNOLG1CQUFPc1MsU0FBU3RTLEdBQUc7VUFDcEI7UUFDRCxRQUFRO0FBQ1AsY0FBSTtBQUNILGdCQUFJc0MsU0FBU2dRLFNBQVN0UyxHQUFHO0FBQ3pCLHFCQUFBbVQsTUFBQSxHQUFBQyxnQkFBa0J2VCxPQUFPQyxLQUFLaVQsTUFBTSxHQUFBSSxNQUFBQyxjQUFBclQsUUFBQW9ULE9BQUc7QUFBdkMsb0JBQVdFLE9BQUFELGNBQUFELEdBQUE7QUFDVjdRLHVCQUFTQSxPQUFPbEUsUUFBQSxLQUFBVyxPQUFjc1UsTUFBRyxHQUFBLEdBQUtOLE9BQU9NLElBQUcsQ0FBQztZQUNsRDtBQUNBLG1CQUFPL1E7VUFDUixRQUFRO1VBQUM7UUFDVjtNQUNEO0lBQ0Q7QUFFT3NRLHVCQUFRLElBQUlELFNBQVM7RUFBQTtBQUFBLENBQUE7O0FDckM1QixJQUFBVyxnQkFBQTFWLE1BQUE7RUFBQSx1Q0FBQTtFQUFBO0FBQUEsQ0FBQTs7QUNBQSxJQUFBMlYsa0JBQUEsQ0FBQTtBQUFBLElBQUFDLGVBQUE1VixNQUFBO0VBQUEsa0NBQUE7QUFBQTtBQU1BeUosY0FBQTtBQUNBa0UsWUFBQTtBQUNBekMsc0JBQUE7QUFDQWhFLGNBQUE7QUFDQStOLGtCQUFBO0FBQ0EvTyxhQUFBO0FBQ0FuRyxtQkFBQTtBQUNBeUQsY0FBQTtBQUNBa1Msa0JBQUE7QUFFQXZLLE1BQUF2SixrQ0FBRSxhQUFZO0FBQ2IsWUFBTWlVLFFBQVEsQ0FBQztBQUNmLFlBQU1DLHFCQUFxQjNLLEVBQUUsZ0JBQWdCLEVBQUVoSixTQUFTLEtBQUtyQyxrQkFBVVcsY0FBYztBQVNyRixZQUFNc1YsVUFBQSwyQkFBQTtBQUFBLFlBQUFDLFFBQUFwVSxrQkFBVSxXQUFPO1VBQUNsQixZQUFBdVY7VUFBWXZPO1FBQUssR0FBTTtBQUM5QyxjQUFJbU8sTUFBTUksV0FBVSxHQUFHO0FBQ3RCLG1CQUFPSixNQUFNSSxXQUFVO1VBQ3hCO0FBQ0EsZ0JBQU1DLFVBQVUsSUFBSTFNLGFBQUs7WUFDeEI5SSxZQUFBdVY7WUFDQXZPO1VBQ0QsQ0FBQztBQUNELGdCQUFNd08sUUFBUXJNLEtBQUs7QUFDbkJnTSxnQkFBTUksV0FBVSxJQUFJQztBQUNwQixpQkFBT0wsTUFBTUksV0FBVTtRQUN4QixDQUFBO0FBQUEsZUFBQSxTQVhNRixTQUFBSSxJQUFBO0FBQUEsaUJBQUFILE1BQUFJLE1BQUEsTUFBQUMsU0FBQTtRQUFBO01BQUEsRUFBQTtBQWFOcFEsa0JBQUlKLEtBQUEsa0NBQUExRSxPQUF1Q3JCLGtCQUFVRyxPQUFPLENBQUU7QUFFOUQsVUFBSSxDQUFDRSxPQUFPQyxJQUFJO0FBQ2Z3RixnQkFBUXNOLElBQUksNkRBQTZEO0FBQ3pFO01BQ0Q7QUFDQSxVQUFJLENBQUNwVCxrQkFBVWtCLFdBQVd3RSxTQUFTLGVBQWUsS0FBSyxDQUFDMUYsa0JBQVVrQixXQUFXd0UsU0FBUyxXQUFXLEdBQUc7QUFDbkd5Riw2QkFBYTFFLE1BQU1oRCxhQUFLaUIsVUFBVSx3QkFBd0IsQ0FBQztBQUMzRHlCLG9CQUFJSixLQUFLdEMsYUFBS2lCLFVBQVUsd0JBQXdCLENBQUM7QUFDakQ7TUFDRDtBQUVBLFVBQUksQ0FBQzFFLGtCQUFVSSxhQUFhSixrQkFBVWdCLFdBQVcsUUFBUTtBQUN4RG1GLG9CQUFJSixLQUFLLDRDQUE0QztBQUNyRDtNQUNEO0FBR0ExRixhQUFPbVcsaUJBQWlCVDtBQUN4QixZQUFNdFYsa0JBQWtCVCxrQkFBVVM7QUFDbEMsWUFBTUcsYUFBYVosa0JBQVVZO0FBQzdCLFlBQU02VixjQUFBLE1BQW9CUixRQUFRO1FBQ2pDclY7UUFDQWdILE9BQU9uSDtNQUNSLENBQUM7QUFFRCxZQUFNaVcsK0JBQUEsMkJBQUE7QUFBQSxZQUFBQyxRQUFBN1Usa0JBQStCLFdBQU87VUFBQ3lPO1VBQWVVO1VBQWFUO1FBQWMsSUFBSSxDQUFDLEdBQU07QUFDakcsZ0JBQU1vRyxjQUFjcEcsbUJBQW1CL1A7QUFDdkMsY0FBSW1XLGVBQWU1VyxrQkFBVWEscUJBQXFCYixrQkFBVVksWUFBWTtBQUV2RXVGLHdCQUFJTSxNQUFNLDBDQUEwQztBQUNwRDtVQUNEO0FBQ0EsZ0JBQU0wUCxjQUFhUyxjQUFBLE1BQW9CelAsYUFBS29DLDJCQUEyQmlILGNBQWMsSUFBSXhRLGtCQUFVWTtBQUVuRyxnQkFBTWlXLE9BQUEsTUFBYVosUUFBUTtZQUFDclYsWUFBQXVWO1lBQVl2TyxPQUFPNEk7VUFBYyxDQUFDO0FBQzlELGdCQUFNc0csZ0JBQWdCNUIsaUJBQVNFLFdBQVcsa0JBQWtCO1lBQzNEbkU7WUFDQVY7WUFDQU0sbUJBQW1CTDtVQUNwQixDQUFDO0FBQ0QsZ0JBQU1rQixVQUNMb0Ysa0JBQ0M3RixjQUFBLE1BQUE1UCxPQUNRNFAsYUFBVyxNQUFBLEVBQUE1UCxPQUFPb0MsYUFBS2lCLFVBQVUsd0JBQXdCLENBQUMsSUFDaEVqQixhQUFLaUIsVUFBVSx3QkFBd0I7QUFDM0MsZ0JBQU1rTyxRQUFRckcsV0FBVyxNQUFNO0FBQzlCcEIsaUNBQWFlLFFBQVF6SSxhQUFLaUIsVUFBVSxTQUFTLENBQUM7VUFDL0MsR0FBRyxHQUFHO0FBQ04sZ0JBQU1xUyxpQkFBQSxNQUF1QkYsS0FBS3BPLFlBQVk7WUFDN0NDLFNBQVM2SDtVQUNWLENBQUM7QUFDRCxnQkFBTXlHLHdCQUF3QixDQUFDSixlQUFlNVcsa0JBQVVhLHFCQUFxQmIsa0JBQVVZO0FBQ3ZGLGdCQUFNcVcsWUFDTC9CLGlCQUFTRSxXQUFXLHVCQUF1QixNQUFNO1VBQ2pERixpQkFBU0UsV0FBVyx1QkFBdUIsTUFBTSxVQUNqREYsaUJBQVNFLFdBQVcsb0JBQW9CLE1BQU0sUUFDOUNGLGlCQUFTRSxXQUFXLG9CQUFvQixNQUFNO0FBQy9DLGdCQUFNOEIsaUJBQWlCaEMsaUJBQVNFLFdBQVcsa0JBQWtCO0FBQzdELGdCQUFNK0Isa0JBQWtCLENBQUE7QUFDeEIsZ0JBQU1DLFdBQVdGLG1CQUFBLFFBQUFBLG1CQUFBLFVBQUFBLGVBQWdCN1UsU0FBUzZVLGlCQUFpQkM7QUFDM0RFLHVCQUFhekUsS0FBSztBQUNsQnpILCtCQUFhcUIsTUFBTTtBQUVuQixjQUFJd0ssdUJBQXVCO0FBQzFCN0wsaUNBQWE3QixRQUFRN0YsYUFBS2lCLFVBQVUsc0JBQXNCLENBQUM7VUFDNUQ7QUFFQSxnQkFBTTRTLDBCQUEwQlYsY0FBYyxDQUFDVCxjQUFhSDtBQUU1RHBJLHFCQUFHNkQsbUJBQW1CO1lBQ3JCN0osT0FBQSxHQUFBdkcsT0FBVW9DLGFBQUtpQixVQUFVLGtCQUFrQixDQUFDLEVBQUFyRCxPQUMzQzJWLHdCQUF3QnZULGFBQUtpQixVQUFVLHNCQUFzQixJQUFJLEVBQ2xFO1lBQ0F1RSxTQUFTcU8sMEJBQTBCN1QsYUFBS2lCLFVBQVUsaUJBQWlCLElBQUlxUztZQUN2RXJGO1lBQ0FDLFFBQVEvRCxXQUFHbUU7WUFDWEgsU0FBVTlHLGNBQWE7QUFDdEIscUJBQU8rTCxLQUFLak8sY0FBY2tDLFFBQVE7WUFDbkM7WUFDQStHLFFBQUEsV0FBQTtBQUFBLGtCQUFBMEYsUUFBQXpWLGtCQUFRLFdBQU87Z0JBQUNtSDtnQkFBU3lJLFNBQUE4RjtnQkFBU2pGO2NBQVcsR0FBTTtBQUNsRCxzQkFBTWtGLGNBQWM7a0JBQ25CeE87a0JBQ0ExSSxRQUFRO29CQUNQbVIsU0FBQThGO29CQUNBLEdBQUlqSCxrQkFBa0IsS0FBSyxDQUFDLElBQUk7c0JBQUM3SCxTQUFTNkg7b0JBQWE7b0JBQ3ZELEdBQUk2RyxTQUFTL1UsU0FBUztzQkFBQ3FWLE1BQU1OLFNBQVNPLEtBQUssR0FBRztvQkFBQyxJQUFJLENBQUM7a0JBQ3JEO2dCQUNEO0FBQ0Esb0JBQUlwRixhQUFhO0FBQ2hCa0YsOEJBQVlsWCxPQUFPcVgsUUFBUTtnQkFDNUIsT0FBTztBQUNOSCw4QkFBWWxYLE9BQU9zWCxXQUFXO2dCQUMvQjtBQUNBLHNCQUFNaEIsS0FBSzdOLEtBQUt5TyxXQUFXO2NBQzVCLENBQUE7QUFBQSxxQkFBQSxTQWZBNUYsT0FBQWlHLEtBQUE7QUFBQSx1QkFBQVAsTUFBQWpCLE1BQUEsTUFBQUMsU0FBQTtjQUFBO1lBQUEsRUFBQTtZQWdCQXpFLFNBQVNtRjtVQUNWLENBQUM7UUFDRixDQUFBO0FBQUEsZUFBQSxTQXhFTVAsZ0NBQUE7QUFBQSxpQkFBQUMsTUFBQUwsTUFBQSxNQUFBQyxTQUFBO1FBQUE7TUFBQSxFQUFBO0FBMEVOLFlBQU13QixvQ0FBQSwyQkFBQTtBQUFBLFlBQUFDLFNBQUFsVyxrQkFBb0MsYUFBWTtBQUNyRDhMLHFCQUFHK0Ysd0JBQXdCO1lBQzFCOUIsUUFBQSxXQUFBO0FBQUEsa0JBQUFvRyxTQUFBblcsa0JBQVEsV0FBTztnQkFBQzhGO2dCQUFPOEo7Z0JBQVMyQyxpQkFBaUI7Y0FBSyxHQUFNO0FBQzNELHNCQUFNd0MsT0FBQSxNQUFhWixRQUFRO2tCQUFDck87Z0JBQUssQ0FBQztBQUNsQyxzQkFBTXNRLG1CQUFrQmxZLGtCQUFVUztBQUNsQyxzQkFBTTJILGVBQWV5TyxLQUFLek87QUFDMUIsb0JBQUlzSixXQUFXLElBQUk7QUFDbEJBLDRCQUFVak8sYUFBS2lCLFVBQVUseUJBQXlCLENBQUNrRCxPQUFPc1EsZ0JBQWUsQ0FBQztnQkFDM0U7QUFDQSxzQkFBTWpQLFdBQVcsTUFBTTtBQUN0QixzQkFBSWtQO0FBQ0osMEJBQVEvUCxjQUFBO29CQUNQLEtBQUs7QUFDSitQLGlDQUFBLGtDQUFBOVcsT0FBNENLLFNBQVNDLFVBQVEsSUFBQSxFQUFBTixPQUM1REssU0FBU0UsSUFDVixFQUFBUCxPQUFHckIsa0JBQVVlLFlBQVUsbUJBQUEsRUFBQU0sT0FBb0JmLEdBQUc4WCxLQUFLQyxjQUNsREgsZ0JBQ0QsR0FBQyxzQ0FBQTtBQUNEO29CQUNELEtBQUs7QUFDSkMsaUNBQUEsOEJBQUE5VyxPQUF3Q0ssU0FBU0MsVUFBUSxJQUFBLEVBQUFOLE9BQ3hESyxTQUFTRSxJQUNWLEVBQUFQLE9BQUdyQixrQkFBVWUsWUFBVSxtQkFBQSxFQUFBTSxPQUFvQmYsR0FBRzhYLEtBQUtDLGNBQ2xESCxnQkFDRCxHQUFDLDhCQUFBO0FBQ0Q7b0JBQ0QsS0FBSztBQUNKQyxpQ0FBQSxvQkFBQTlXLE9BQThCNlcsa0JBQWUsSUFBQTtBQUM3QztvQkFDRCxLQUFLO29CQUNMO0FBQ0NDLGlDQUFBLGVBQUE5VyxPQUF5QjZXLGtCQUFlLElBQUE7QUFDeEM7a0JBQ0Y7QUFDQSx5QkFBT0M7Z0JBQ1IsR0FBRztBQUNILHNCQUFNcFYsVUFBVTtrQkFDZmtHO2tCQUNBMUksUUFBUTtvQkFDUG1SO2tCQUNEO2dCQUNEO0FBQ0Esb0JBQUksQ0FBQzJDLGdCQUFnQjtBQUNwQnRSLDBCQUFReEMsT0FBTzBLLGFBQWE7Z0JBQzdCO0FBQ0Esc0JBQU00TCxLQUFLN04sS0FBS2pHLE9BQU87Y0FDeEIsQ0FBQTtBQUFBLHFCQUFBLFNBNUNBOE8sT0FBQXlHLEtBQUE7QUFBQSx1QkFBQUwsT0FBQTNCLE1BQUEsTUFBQUMsU0FBQTtjQUFBO1lBQUEsRUFBQTtZQTZDQTNDLFdBQVdBLENBQUM7Y0FBQ2hNO1lBQUssTUFBTTtBQUN2QmxHLHVCQUFTNFAsT0FBT3RSLGtCQUFVYyxZQUFZSixRQUFRLFNBQVNrSCxLQUFLO1lBQzdEO1VBQ0QsQ0FBQztRQUNGLENBQUE7QUFBQSxlQUFBLFNBbkRNbVEscUNBQUE7QUFBQSxpQkFBQUMsT0FBQTFCLE1BQUEsTUFBQUMsU0FBQTtRQUFBO01BQUEsRUFBQTtBQXFETixZQUFNZ0MsOEJBQUEsMkJBQUE7QUFBQSxZQUFBQyxTQUFBMVcsa0JBQThCLGFBQVk7QUFDL0M4TCxxQkFBRzRHLGtCQUFrQjtZQUNwQkMsVUFBVUEsQ0FBQztjQUFDRztZQUFRLE1BQU07QUFDekI3USxtQkFBS0MsTUFBTTRRLFFBQVE7QUFDbkIzUSwyQkFBYVEsUUFBUSxxQkFBcUJtUSxRQUFRO1lBQ25EO1VBQ0QsQ0FBQztRQUNGLENBQUE7QUFBQSxlQUFBLFNBUE0yRCwrQkFBQTtBQUFBLGlCQUFBQyxPQUFBbEMsTUFBQSxNQUFBQyxTQUFBO1FBQUE7TUFBQSxFQUFBO0FBU04sWUFBTWtDLGdCQUFBLDJCQUFBO0FBQUEsWUFBQUMsU0FBQTVXLGtCQUFnQixXQUFPO1VBQUN5TztRQUFhLEdBQU07QUFDaEQsZ0JBQU1rRyxZQUFZaE8sWUFBWTtZQUM3QkMsU0FBUzZIO1VBQ1YsQ0FBQztRQUNGLENBQUE7QUFBQSxlQUFBLFNBSk1rSSxlQUFBRSxLQUFBO0FBQUEsaUJBQUFELE9BQUFwQyxNQUFBLE1BQUFDLFNBQUE7UUFBQTtNQUFBLEVBQUE7QUFNTjNJLGlCQUFHd0Msd0JBQXdCc0csNEJBQTRCO0FBQ3ZEOUksaUJBQUc4Qyw4QkFBOEJnRyw0QkFBNEI7QUFDN0Q5SSxpQkFBR3lELHNCQUFzQnFGLDRCQUE0QjtBQUNyRDlJLGlCQUFHcUMsMkJBQTJCOEgsaUNBQWlDO0FBQy9EbkssaUJBQUd1QywwQkFBMEJvSSwyQkFBMkI7QUFDeEQzSyxpQkFBR21ILGtCQUFrQjBELGFBQWE7SUFDbkMsQ0FBQyxDQUFBO0VBQUE7QUFBQSxDQUFBOztBQ3RORCxJQUFBRyxpQkFBQSxDQUFBO0FBQUEsSUFBQUM7QUFBQSxJQUFBQyxjQUFBNVksTUFBQTtFQUFBLDJCQUFBO0FBQUE7QUFBQTJZLHdCQUFzQkUsUUFBQSxpQkFBQTtBQUV0QixVQUFBLEdBQUtGLGtCQUFBRyxTQUFRLEVBQUVDLEtBQU1DLFdBQXlDO0FBQzdEN04sUUFBRWhMLE1BQU0sRUFBRTJMLEdBQUcsVUFBVSxNQUFZO0FBQ2xDLGNBQU1tTixjQUFjOU4sRUFBRWhMLE1BQU0sRUFBRTROLE1BQU07QUFDcEMsY0FBTW1MLG9CQUFvQkYsTUFBTXhOLEtBQUssb0JBQW9CO0FBQ3pELFlBQUkwTixtQkFBbUI7QUFDdEJBLDRCQUFrQnZNLElBQUksYUFBQSxRQUFBeEwsT0FBcUI4WCxhQUFXLFdBQUEsQ0FBVztRQUNsRTtNQUNELENBQUM7SUFDRixDQUFDO0VBQUE7QUFBQSxDQUFBOztDQ1JBLFNBQVNFLFdBQWlCO0FBQzFCLFFBQU07SUFBQ0M7SUFBVUM7RUFBVyxJQUFJalosR0FBR0MsT0FBT0MsSUFBSTtBQUM5QyxNQUFJOFksYUFBYSxVQUFVLENBQUNDLGFBQWE7QUFDeEM7RUFDRDtBQUVBLFFBQU1oUCxTQUFBLDJCQUFBO0FBQUEsUUFBQWlQLFNBQUExWCxrQkFBUyxhQUEyQjtBQUN6QyxZQUFNO1FBQUMsdUJBQXVCMlg7TUFBVSxJQUFJblosR0FBR21LLEtBQUtpUCxRQUFRbFosSUFBSTtBQUdoRSxVQUFJaVosWUFBWTtBQUNmLGNBQU1uWixHQUFHaUssT0FBT0MsTUFBTSx1QkFBdUI7TUFDOUM7QUFFQSxZQUFNSixRQUFBZ0QsUUFBQSxFQUFBNkwsS0FBQSxPQUFBbkQsYUFBQSxHQUFBRCxnQkFBQTtBQUNOLFlBQU16TCxRQUFBZ0QsUUFBQSxFQUFBNkwsS0FBQSxPQUFBSCxZQUFBLEdBQUFGLGVBQUE7SUFDUCxDQUFBO0FBQUEsV0FBQSxTQVZNck8sVUFBQTtBQUFBLGFBQUFpUCxPQUFBbEQsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBWU4sT0FBS2hNLE9BQU87QUFDYixHQUFHOyIsCiAgIm5hbWVzIjogWyJDb25zdGFudHMiLCAiY29uc3RhbnRzX2RlZmF1bHQiLCAiaW5pdF9jb25zdGFudHMiLCAiX19lc20iLCAidmVyc2lvbiIsICJpc0FydGljbGUiLCAid2luZG93IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY3VycmVudFBhZ2VOYW1lIiwgInJlcGxhY2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAibGF0ZXN0UmV2aXNpb25JZCIsICJhcnRpY2xlUGF0aCIsICJzY3JpcHRQYXRoIiwgImFjdGlvbiIsICJza2luIiwgInVzZXJHcm91cHMiLCAid2lraUlkIiwgInVzZXJBZ2VudCIsICJjb25jYXQiLCAiUmVxdWVzdHMiLCAicmVxdWVzdHNfZGVmYXVsdCIsICJpbml0X3JlcXVlc3RzIiwgImJhc2UiLCAibG9jYXRpb24iLCAicHJvdG9jb2wiLCAiaG9zdCIsICJxdWVyeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1cmwiLCAiVVJMIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAia2V5IiwgInNlYXJjaFBhcmFtcyIsICJhcHBlbmQiLCAicmVzcG9uc2UiLCAiZmV0Y2giLCAiY3JlZGVudGlhbHMiLCAiaGVhZGVycyIsICJqc29uIiwgInBvc3QiLCAicGF5bG9hZCIsICJmb3JtIiwgIkZvcm1EYXRhIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJ2YWx1ZSIsICJtZXRob2QiLCAiYm9keSIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiYnJvd3Nlckxhbmd1YWdlIiwgImkxOG5DYWNoZSIsICJnZXRJdGVtIiwgIl9pMyIsICJfT2JqZWN0JGtleXMyIiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgImluY2x1ZGVzIiwgIm5vd1ZlcnNpb24iLCAicHVzaCIsICJfX3ZlcnNpb24iLCAiY29uc29sZSIsICJpbmZvIiwgInN0cmluZ2lmeSIsICJXaWtpcGx1c0Vycm9yIiwgIkxvZyIsICJsb2dfZGVmYXVsdCIsICJpbml0X2xvZyIsICJFcnJvciIsICJtZXNzYWdlIiwgImNvZGUiLCAiZGVidWciLCAiZXJyb3IiLCAiZXJyb3JDb2RlIiwgInBheWxvYWRzIiwgInRlbXBsYXRlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImkiLCAidiIsICJSZWdFeHAiLCAiV2lraSIsICJ3aWtpX2RlZmF1bHQiLCAiaW5pdF93aWtpIiwgInBhZ2VJbmZvQ2FjaGUiLCAiZ2V0RWRpdFRva2VuIiwgIm1ldGEiLCAiZm9ybWF0IiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiZ2V0UGFnZUluZm8iLCAidGl0bGUiLCAiX3RoaXMyIiwgInBhcmFtcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXZpZHMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImNvbnRlbnRtb2RlbCIsICJ0aXRsZXMiLCAicGFnZXMiLCAicGFnZUluZm8iLCAicmV2aXNpb25zIiwgImdldFdpa2lUZXh0IiwgInNlY3Rpb24iLCAicnZzZWN0aW9uIiwgInBhcnNlV2lraVRleHQiLCAid2lraXRleHQiLCAidGV4dCIsICJwc3QiLCAiZWRpdCIsICJjb250ZW50IiwgImVkaXRUb2tlbiIsICJhZGRpdGlvbmFsQ29uZmlnIiwgInRva2VuIiwgImJhc2V0aW1lc3RhbXAiLCAid2FybmluZyIsICJnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSIsICJfdGhpczMiLCAiUGFnZSIsICJwYWdlX2RlZmF1bHQiLCAiaW5pdF9wYWdlIiwgImluaXRlZCIsICJpc05ld1BhZ2UiLCAic2VjdGlvbkNhY2hlIiwgImluaXQiLCAiX3RoaXM0IiwgInByb21pc2VBcnIiLCAiZ2V0VGltZXN0YW1wIiwgImdldENvbnRlbnRNb2RlbCIsICJQcm9taXNlIiwgImFsbCIsICJfdGhpczUiLCAibG9hZGVyIiwgInVzaW5nIiwgInVzZXIiLCAiX3RoaXM2IiwgIl90aGlzNyIsICJfdGhpczgiLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOSIsICJfdGhpczEwIiwgImNyZWF0ZW9ubHkiLCAiTm90aWZpY2F0aW9uIiwgIm5vdGlmaWNhdGlvbl9kZWZhdWx0IiwgImluaXRfbm90aWZpY2F0aW9uIiwgIiQiLCAiZGlzcGxheSIsICJ0eXBlIiwgImNhbGxiYWNrIiwgImFkZENsYXNzIiwgImZpbmQiLCAibGFzdCIsICJmYWRlSW4iLCAiYmluZCIsICJjbGVhciIsICJzZWxmIiwgIm9uIiwgInNsaWRlTGVmdCIsICJzdWNjZXNzIiwgImNoaWxkcmVuIiwgImZpcnN0IiwgImZhZGVPdXQiLCAicmVtb3ZlIiwgInNldFRpbWVvdXQiLCAiZW1wdHkiLCAiZWFjaCIsICJlbGUiLCAiZGVsYXkiLCAic3BlZWQiLCAiY3NzIiwgImFuaW1hdGUiLCAibGVmdCIsICJzbGVlcCIsICJzbGVlcF9kZWZhdWx0IiwgImluaXRfc2xlZXAiLCAidGltZSIsICJyZXNvbHZlIiwgInBhcnNlUXVlcnkiLCAicmVnIiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImluaXRfaGVscGVycyIsICJVSSIsICJ1aV9kZWZhdWx0IiwgImluaXRfdWkiLCAicXVpY2tFZGl0UGFuZWxWaXNpYmxlIiwgInNjcm9sbFRvcCIsICJjcmVhdGVEaWFsb2dCb3giLCAid2lkdGgiLCAiY2xpZW50V2lkdGgiLCAiaW5uZXJXaWR0aCIsICJjbGllbnRIZWlnaHQiLCAiaW5uZXJIZWlnaHQiLCAiZGlhbG9nV2lkdGgiLCAiTWF0aCIsICJtaW4iLCAiZGlhbG9nQm94IiwgInRvcCIsICJkb2N1bWVudCIsICJodG1sIiwgInBhcmVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uYmVmb3JldW5sb2FkIiwgImJpbmREcmFnZ2luZyIsICJlbGVtZW50IiwgIm1vdXNlZG93biIsICJiYXNlWCIsICJjbGllbnRYIiwgImJhc2VZIiwgImNsaWVudFkiLCAiYmFzZU9mZnNldFgiLCAib2Zmc2V0IiwgImJhc2VPZmZzZXRZIiwgImUyIiwgInVuYmluZCIsICJvZmYiLCAiYWRkRnVuY3Rpb25CdXR0b24iLCAiaWQiLCAiYnV0dG9uIiwgImF0dHIiLCAiaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24iLCAib25DbGljayIsICJpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uIiwgImluc2VydFRvcFF1aWNrRWRpdEVudHJ5IiwgInRvcEJ0biIsICJ0b3BCdG5MaW5rIiwgInNlY3Rpb25OdW1iZXIiLCAidGFyZ2V0UGFnZU5hbWUiLCAiYWZ0ZXIiLCAiaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMiLCAic2VjdGlvbkJ0biIsICJlZGl0VVJMIiwgInNlY3Rpb25UYXJnZXROYW1lIiwgImNsb25lTm9kZSIsICJwcmV2IiwgImNsb25lIiwgInNlY3Rpb25OYW1lIiwgInRyaW0iLCAiX3NlY3Rpb25CdG4iLCAiYmVmb3JlIiwgImluc2VydExpbmtFZGl0RW50cmllcyIsICJocmVmIiwgImNsYXNzIiwgIl9wYXJhbXMkc2VjdGlvbiIsICJzaG93UXVpY2tFZGl0UGFuZWwiLCAic3VtbWFyeSIsICJvbkJhY2siLCAib25QYXJzZSIsICJvbkVkaXQiLCAiZXNjRXhpdCIsICJoaWRlUXVpY2tFZGl0UGFuZWwiLCAiYmFja0J0biIsICJqdW1wQnRuIiwgImlucHV0Qm94IiwgInByZXZpZXdCb3giLCAic3VtbWFyeUJveCIsICJlZGl0U3VibWl0QnRuIiwgInByZXZpZXdTdWJtaXRCdG4iLCAiaXNNaW5vckVkaXQiLCAibWFyZ2luIiwgImVkaXRCb2R5IiwgInZhbCIsICJwcmVsb2FkQmFubmVyIiwgInRpbWVyIiwgIkRhdGUiLCAibm93IiwgImVkaXRCYW5uZXIiLCAiaXMiLCAidXNlVGltZSIsICJ0b1N0cmluZyIsICJyZWxvYWQiLCAibG9nIiwgImN0cmxLZXkiLCAid2hpY2giLCAic2hpZnRLZXkiLCAidHJpZ2dlciIsICJwcmV2ZW50RGVmYXVsdCIsICJzdG9wUHJvcGFnYXRpb24iLCAic2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwiLCAib25TdWNjZXNzIiwgIl90aGlzMTEiLCAiaW5wdXQiLCAic3VtbWFyeUlucHV0VGl0bGUiLCAic3VtbWFyeUlucHV0IiwgImFwcGx5QnRuIiwgImNhbmNlbEJ0biIsICJjb250aW51ZUJ0biIsICJkaWFsb2ciLCAiZm9yY2VPdmVyd3JpdGUiLCAiaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwiLCAiZXJyb3IyIiwgInNob3dTZXR0aW5nc1BhbmVsIiwgIm9uU3VibWl0IiwgIl90aGlzMTIiLCAiV2lraXBsdXNfU2V0dGluZ3MiLCAic2V0dGluZ3MiLCAic2F2ZWRCYW5uZXIiLCAiaGlkZVNldHRpbmdzUGFuZWwiLCAiYmluZFByZWxvYWRFdmVudHMiLCAib25QcmVsb2FkIiwgIlNldHRpbmdzIiwgInNldHRpbmdzX2RlZmF1bHQiLCAiaW5pdF9zZXR0aW5ncyIsICJnZXRTZXR0aW5nIiwgIm9iamVjdCIsICJ3IiwgImN1c3RvbVNldHRpbmdGdW5jdGlvbiIsICJGdW5jdGlvbiIsICJfaTQiLCAiX09iamVjdCRrZXlzMyIsICJrZXkyIiwgImluaXRfd2lraXBsdXMiLCAibW9kdWxlc19leHBvcnRzIiwgImluaXRfbW9kdWxlcyIsICJQYWdlcyIsICJpc0N1cnJlbnRQYWdlRW1wdHkiLCAiZ2V0UGFnZSIsICJfcmVmNyIsICJyZXZpc2lvbklkMiIsICJuZXdQYWdlIiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfV2lraXBsdXNQYWdlcyIsICJjdXJyZW50UGFnZSIsICJoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkIiwgIl9yZWY4IiwgImlzT3RoZXJQYWdlIiwgInBhZ2UiLCAiY3VzdG9tU3VtbWFyeSIsICJzZWN0aW9uQ29udGVudCIsICJpc0VkaXRIaXN0b3J5UmV2aXNpb24iLCAiZXNjVG9FeGl0IiwgImN1c3RvbUVkaXRUYWdzIiwgImRlZmF1bHRFZGl0VGFncyIsICJlZGl0VGFncyIsICJjbGVhclRpbWVvdXQiLCAic2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAiLCAiX3JlZjkiLCAic3VtbWFyeTIiLCAiZWRpdFBheWxvYWQiLCAidGFncyIsICJqb2luIiwgIm1pbm9yIiwgIm5vdG1pbm9yIiwgIl94MiIsICJoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjEwIiwgIl9yZWYxMSIsICJjdXJyZW50UGFnZU5hbWUyIiwgImNvbnRlbnQyIiwgInV0aWwiLCAid2lraVVybGVuY29kZSIsICJfeDMiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMiIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMyIsICJfeDQiLCAicmVzaXplX2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdF9yZXNpemUiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAiV2lraXBsdXMiLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiX3JlZjE0IiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyJdCn0K
