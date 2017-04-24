// ==UserScript==
// @name         Tooltip Fix
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Who doesn't like a better feeling GUI?
// @author       X-Chan
// @match        http://www.midenquest.com/Game.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.infoplus').parent().css('overflow','visible');
    $('#ContentLoad').css('overflow','visible');
})();
