/*
 * @Author: Yuhan 
 * @Date: 2018-03-29 21:36:39 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-03-31 09:51:46
 */
"use strict";
const $ = require("jquery");
const config = {
  serverHost: ""
};

const _utils = {
  request: function(param) {
    const _this = this;
    $.ajax({
      type: param.method || "get",
      url: param.url || "",
      dataType: param.type || "json",
      data: param.data || "",
      success: function(res) {
        if (res.status === 0) {
          typeof param.success === "function" &&
            param.success(res.data, res.msg);
        } else if (res.status === 10) {
          _this.doLogin();
        } else if (res.status === 1) {
          typeof param.error === "function" && param.error(res.msg);
        }
      },
      error: function(err) {
        typeof param.error === "function" && param.error(err.statusText);
      }
    });
  },
  getServerUrl: function(path) {
    return config.serverHost + path;
  },
  getUrlParam: function(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let result = window.location.search.substr(1).match(reg);
    console.log(result);
    return result ? decodeURIComponent(result[2]) : null;
  },
  doLogin: function() {
    window.location.href =
      "./login.html?redirect=" + encodeURIComponent(window.location.href);
  }
};

module.exports = _utils;
