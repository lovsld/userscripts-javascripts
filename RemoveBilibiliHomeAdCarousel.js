// ==UserScript==
// @name         Remove Bilibili Home Ad Carousel
// @namespace    https://bilibili.com/
// @version      1.0
// @description  删除Bilibili首页顶部推荐广告滚动栏，清爽视觉体验
// @author       ChatGPT
// @match        *://www.bilibili.com/*
// @run-at       document-end
// ==/UserScript==

// ==UserScript==
// @name         Remove Bilibili Homepage Ad Carousel
// @namespace    https://bilibili.com/
// @version      1.0
// @description  自动移除Bilibili首页顶部广告滚动栏，优化视觉体验
// @author       ChatGPT
// @match        *://www.bilibili.com/
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // 尝试删除节点的函数
    function removeAdCarousel() {
        const adNode = document.querySelector('#i_cecream > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)');
        if (adNode) {
            adNode.remove();
            console.log('[Userscript] 已移除 Bilibili 首页广告滚动栏');
            return true;
        }
        return false;
    }

    // 页面初始加载时尝试删除
    const checkInterval = setInterval(() => {
        if (removeAdCarousel()) {
            clearInterval(checkInterval);
        }
    }, 300);

    // 使用 MutationObserver 监听动态加载
    const observer = new MutationObserver(() => {
        if (removeAdCarousel()) {
            observer.disconnect();
        }
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
})();


(function() {
    'use strict';

    // 尝试删除广告节点的函数
    function removeAd() {
        const adNode = document.querySelector('#i_cecream > div.bili-feed4 > main > div.feed2 > div > div.container.is-version8 > div.recommended-swipe');
        if (adNode) {
            adNode.remove();
            console.log('[Userscript] 已移除首页广告滚动栏');
            observer.disconnect(); // 找到后停止监听
        }
    }

    // 首次尝试
    removeAd();

    // 观察整个页面的DOM变化，因为B站首页是异步加载的
    const observer = new MutationObserver(removeAd);
    observer.observe(document.body, { childList: true, subtree: true });
})();
