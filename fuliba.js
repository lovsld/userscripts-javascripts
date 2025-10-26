// ==UserScript==
// @name         fuliba
// @namespace    fuliba
// @version      1.0
// @description  只保留id为ri_home_lastpost_widget-2和ri_home_search_widget-2的div，删除其他兄弟节点
// @author       YourName
// @match        *://fuliba2025.net/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 删除匹配到的广告节点
    function removeAd() {
        const ads = document.querySelectorAll('.sidebar');
        if (ads.length > 0) {
            ads.forEach(ad => ad.remove());
            console.log(`[Userscript] 已删除 ${ads.length} 个广告节点`);
        }
    }
    setTimeout(() => {
        removeAd();
        console.log('[Userscript] 已启动广告检测与删除');
    }, 20); // 延迟 2000 毫秒（即 2 秒）


})();

