// ==UserScript==
// @name         Tooltip Fix
// @namespace    https://github.com/xiaden/MQO
// @updateURL    https://raw.githubusercontent.com/xiaden/MQO/master/TooltipFix.JS
// @version      0.0.0.2
// @description  Who doesn't like a better feeling GUI?
// @author       X-Chan
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// @include      http://www.midenquest.com/Game.aspx
// @include      http://midenquest.com/Game.aspx
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    $('.infoplus').parent().css('overflow','visible');
    $('#ContentLoad').css('overflow','visible');
})();
