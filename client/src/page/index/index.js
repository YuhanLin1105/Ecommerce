/*
 * @Author: Yuhan 
 * @Date: 2018-03-29 22:35:43 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-03-31 09:47:38
 */
"use strict";

const $ = require("jquery");
const utils = require("utils/utils.js");
require("./index.css");

console.log("index");
$("body").html("<h1>Hello</h1>");

utils.request({
  url: "/product/list.do?keyword=1",
  success: function(res) {
    console.log(res);
  },
  error: function(errMsg) {
    console.log(errMsg);
  }
});

console.log("param:" + utils.getUrlParam("test"));
