/*
 * @Author: Yuhan 
 * @Date: 2018-03-31 20:03:55 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 22:08:05
 */
"use strict";
const utils = require("utils/utils.js");
const $ = require("jquery");

require("./index.css");

const navSide = {
  option: {
    nam: "",
    navList: [
      { name: "user-center", desc: "Me", href: "./user-center.html" },
      { name: "order-list", desc: "My Order", href: "./order-list.html" },
      {
        name: "pass-update",
        desc: "Change Password",
        href: "./pass-update.html"
      },
      { name: "about", desc: "About MMall", href: "./about.html" }
    ]
  },
  init: function() {
    $.extend(this.option, option);

    this.renderNav();
    return this;
  },
  renderNav: function() {
    for (var i = 0, len = this.option.navList.length; i < len; i++) {
      if (this.option.navList[i].name === this.option.nam) {
        this.option.navList[i].isActive = true;
      }
    }
  }
};

module.exports = navSide.init();
