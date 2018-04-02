/*
 * @Author: Yuhan 
 * @Date: 2018-03-31 20:03:55 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 18:11:12
 */
"use strict";
const utils = require("utils/utils.js");
const $ = require("jquery");

require("./header.css");

const header = {
  init: function() {
    this.bindEvent();

    return this;
  },
  onLoad: function() {
    const keyword = utils.getUrlParam("keyword");
    if (keyword) {
      $("#search-input").val(keyword);
    }
  },

  bindEvent: function() {
    const _this = this;
    $("#search-btn").click(function() {
      _this.searchSubmit();
    });
    $("#search-input").keyup(function(e) {
      if (e.keyCode === 13) {
        _this.searchSubmit();
      }
    });
  },

  searchSubmit: function() {
    const keyword = $.trim($("#search-input").val());
    if (keyword) {
      window.location.href = "./list.html?keyword=" + keyword;
    } else {
      utils.goHome();
    }
  }
};

header.init();
