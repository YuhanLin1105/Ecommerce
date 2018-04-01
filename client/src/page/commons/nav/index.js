/*
 * @Author: Yuhan 
 * @Date: 2018-03-31 20:03:55 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 11:23:08
 */
"use strict";
const utils = require("utils/utils.js");
const $ = require("jquery");
const _user = require("services/user-service.js");
const _cart = require("services/cart-service.js");
require("./nav.css");

const nav = {
  init: function() {
    this.bindEvent();
    this.loadCartCount();
    this.loadUserInfo();
    return this;
  },
  bindEvent: function() {
    $(".js-login").click(function() {
      utils.doLogin();
    });
    $(".js-register").click(function() {
      window.location.href = "./register.html";
    });
    $(".js-logout").click(function() {
      _user.logout(
        function(res) {
          window.location.reload();
        },
        function(errMsg) {
          utils.errTips(errMsg);
        }
      );
    });
  },
  loadUserInfo: function() {
    _user.checkLogin(
      function(res) {
        $(".user.not-login")
          .hide()
          .siblings(".user.login")
          .show()
          .find(".username")
          .text(res.username);
      },
      function(errMsg) {}
    );
  },
  loadCartCount: function() {
    _cart.getCartCount(
      function(res) {
        $(".nav .cart-count").text(res || 0);
      },
      function(errMsg) {
        $(".nav .cart-count").text(0);
      }
    );
  }
};

module.exports = nav.init();
