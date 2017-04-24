// ==UserScript==
// @name MQO Tooltip Fix
// @namespace https://github.com/xiaden/MQO
// @description Fixes tooltips so they overlap correctly.
// @homepage https://github.com/xiaden/MQO
// @version 1
// @downloadURL  https://raw.githubusercontent.com/xiaden/MQO/master/TooltipFix.js
// @updateURL    https://raw.githubusercontent.com/xiaden/MQO/master/TooltipFix.js
// @include http://midenquest.com/Game.aspx
// @include http://www.midenquest.com/Game.aspx
// @include https://www.midenquest.com/Game.aspx
// @grant GM_log
// ==/UserScript==

(function() {
    'use strict';
    $('.infoplus').parent().css('overflow','visible');
    $('#ContentLoad').css('overflow','visible');
})();
