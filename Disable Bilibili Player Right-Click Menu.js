// ==UserScript==
// @name         Disable Bilibili Player Right-Click Menu
// @namespace    https://bilibili.com/
// @version      1.0
// @description  禁用 Bilibili 视频播放器自定义右键菜单，恢复 Safari 原生右键菜单
// @author       ChatGPT
// @match        *://www.bilibili.com/video/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 观察器，用来处理动态加载的视频元素
    const observer = new MutationObserver(() => {
        const video = document.querySelector('video');
        if (video) {
            // 移除原有的右键事件监听器
            video.oncontextmenu = null;

            // 禁止阻止右键菜单的脚本继续生效
            video.addEventListener('contextmenu', (e) => {
                e.stopImmediatePropagation();
                // 不调用 e.preventDefault()，让 Safari 自己显示右键菜单
            }, true);

            console.log('[Userscript] 已解除 Bilibili 播放器右键菜单限制');
            observer.disconnect(); // 停止继续监听
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

(function() {
    'use strict';

    // 删除匹配到的广告节点
    function removeAd() {
        const ads = document.querySelectorAll('.video-card-ad-small');
        if (ads.length > 0) {
            ads.forEach(ad => ad.remove());
            console.log(`[Userscript] 已删除 ${ads.length} 个广告节点`);
        }
    }
    setTimeout(() => {
        removeAd();
        console.log('[Userscript] 已启动广告检测与删除');
    }, 2000); // 延迟 2000 毫秒（即 2 秒）


})();
