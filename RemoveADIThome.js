// ==UserScript==
// @name         Remove Parent Nodes of Elements with class="ad"
// @namespace    https://ithome.com/
// @version      1.0
// @description  删除所有 class="ad" 元素的父节点（例如 <li>）
// @author       ChatGPT
// @match        *://www.ithome.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    function keepOnlyNews() {
        const news = document.getElementById('news');
        if (!news || !news.parentElement) {
            console.log('[Userscript] 未找到 #news 节点，跳过处理');
            return;
        }

        const parent = news.parentElement;
        const siblings = Array.from(parent.children);

        let removedCount = 0;
        siblings.forEach(node => {
            if (node !== news) {
                node.remove();
                removedCount++;
            }
        });

        console.log(`[Userscript] 已删除 ${removedCount} 个 #news 同级节点`);
    }
    
    function removeFlDivs() {
        const flDivs = document.querySelectorAll('div.fl');
        let count = 0;
        flDivs.forEach(div => {
            div.remove();
            count++;
        });
        if (count > 0) {
            console.log(`[Userscript] 已删除 ${count} 个 <div class="fl"> 节点`);
        }
    };

    // 延迟 2 秒执行，确保页面结构加载完成
    setTimeout(() => {
        keepOnlyNews();
        removeFlDivs();
        console.log('[Userscript] 已执行保留 #news 操作');
    }, 1000);
})();

(function() {
    'use strict';

    function removeAdParents() {
        const ads = document.querySelectorAll('.ad');
        let count = 0;

        ads.forEach(ad => {
            if (ad.parentElement) {
                ad.parentElement.remove();
                count++;
            }
        });

        if (count > 0) {
            console.log(`[Userscript] 已删除 ${count} 个带有 class="ad" 的父节点`);
        }
    }

    // 延迟 2 秒执行，避免广告节点还未加载
    setTimeout(() => {
        removeAdParents();

        // 持续监听动态加载（很多新闻站点懒加载广告）
        const observer = new MutationObserver(() => removeAdParents());
        observer.observe(document.body, { childList: true, subtree: true });

        console.log('[Userscript] 已启动广告父节点清理功能');
    }, 1000);
})();
