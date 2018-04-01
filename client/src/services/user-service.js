/*
 * @Author: Yuhan 
 * @Date: 2018-04-01 10:48:36 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 11:43:22
 */
"use strict";
const utils = require("utils/utils.js");

const _user = {
  checkLogin: function(resolve, reject) {
    utils.request({
      url: utils.getServerUrl("/user/get_user_info.do"),
      method: "POST",
      success: resolve,
      error: reject
    });
  },

  logout: function(resolve, reject) {
    utils.request({
      url: utils.getServerUrl("/user/logout.do"),
      method: "POST",
      success: resolve,
      error: reject
    });
  }
};

module.exports = _user;
