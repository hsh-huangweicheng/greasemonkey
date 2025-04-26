// ==UserScript==
// @name         style.user.js
// @namespace    http://tampermonkey.net/
// @version      2025.04.26
// @description  try to take over the world!
// @author       You
// @match        https://learn.lianglianglee.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const styleElement = document.createElement("style");

  const cssRules = `
    .off-canvas-content .book-content,.off-canvas-content {
        margin: 0rem !important;
        padding:0rem !important;
    }
`;

  styleElement.textContent = cssRules;

  document.head.appendChild(styleElement);
})();
