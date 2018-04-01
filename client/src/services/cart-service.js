/*
 * @Author: Yuhan 
 * @Date: 2018-04-01 11:23:23 
 * @Last Modified by: Yuhan
 * @Last Modified time: 2018-04-01 11:25:48
 */
"use strict";
const utils = require("utils/utils.js");

const _cart = {
  getCartCount: function(resolve, reject) {
    utils.request({
      url: utils.getServerUrl("/cart/get_cart_product_count.do"),
      method: "GET",
      success: resolve,
      error: reject
    });
  }
};

module.exports = _cart;
