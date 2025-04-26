// ==UserScript==
// @name         New Userscript
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-end
// @match        https://learn.lianglianglee.com/*
// @grant        none
// ==/UserScript==
(function () {
  "use strict";

  document.querySelector(".off-canvas-content .book-content").style.padding =
    "0rem !important";
  document.querySelector(".off-canvas-content").style.padding =
    "0rem !important";
})();
