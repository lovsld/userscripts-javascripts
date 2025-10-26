// ==UserScript==
// @name         保留特定div，删除其他兄弟节点
// @namespace    ahhhhfs
// @version      1.0
// @description  只保留id为ri_home_lastpost_widget-2和ri_home_search_widget-2的div，删除其他兄弟节点
// @author       YourName
// @match        *://www.ahhhhfs.com/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 需要保留的div的id
    const keepIds = ["ri_home_lastpost_widget-2", "ri_home_search_widget-2"];

    keepIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.parentNode) {
            const parent = el.parentNode;
            // 遍历父元素的所有子节点
            Array.from(parent.children).forEach(child => {
                if (!keepIds.includes(child.id)) {
                    parent.removeChild(child);
                }
            });
        }
    });
})();
