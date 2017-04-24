// ==UserScript==
// @name MQO Tooltip Fix
// @namespace https://github.com/xiaden/MQO
// @description Fixes tooltips so they overlap correctly.
// @homepage https://github.com/xiaden/MQO
// @version 2
// @downloadURL  https://xiaden.github.io/MQO/TooltipFix.user.js
// @updateURL    https://xiaden.github.io/MQO/TooltipFix.user.js
// @include http://midenquest.com/Game.aspx
// @include http://www.midenquest.com/Game.aspx
// @include https://www.midenquest.com/Game.aspx
// @grant GM_log
// ==/UserScript==

(function() {
    'use strict';
    $('.infoplus').parent().css('overflow','visible');
    $('.infoplus').parent().parent().parent().css('z-index','1');
    $('#ZoneChat').css('position','relative');
    $('#ContentLoad').css('overflow','visible');
})();
