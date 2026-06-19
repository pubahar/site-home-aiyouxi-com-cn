// public/site-helper.js
(function() {
    'use strict';

    const CONFIG = {
        siteUrl: 'https://site-home-aiyouxi.com.cn',
        keyword: '爱游戏',
        badgeClass: 'keyword-badge',
        cardClass: 'tip-card',
        infoClass: 'access-info'
    };

    const sampleKeywords = [
        '爱游戏', '游戏推荐', '热门手游', '休闲竞技', '爱游戏社区'
    ];

    const tipMessages = [
        '欢迎来到爱游戏乐园，发现更多精彩内容！',
        '爱游戏，让每一刻都充满乐趣。',
        '加入爱游戏，与好友一起畅玩。',
        '爱游戏平台，为您精选优质游戏。'
    ];

    function createBadge(text) {
        const badge = document.createElement('span');
        badge.className = CONFIG.badgeClass;
        badge.textContent = text;
        badge.style.display = 'inline-block';
        badge.style.padding = '4px 10px';
        badge.style.margin = '4px';
        badge.style.backgroundColor = '#f0f8ff';
        badge.style.border = '1px solid #b0d4f1';
        badge.style.borderRadius = '12px';
        badge.style.fontSize = '13px';
        badge.style.color = '#2a6496';
        badge.style.cursor = 'default';
        return badge;
    }

    function createTipCard(message) {
        const card = document.createElement('div');
        card.className = CONFIG.cardClass;
        card.style.border = '1px solid #ddd';
        card.style.borderRadius = '8px';
        card.style.padding = '16px';
        card.style.margin = '12px 0';
        card.style.backgroundColor = '#fffbe6';
        card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
        card.innerHTML = `<p style="margin:0;font-size:15px;line-height:1.5;">${message}</p>`;
        return card;
    }

    function buildAccessInfo() {
        const infoBlock = document.createElement('div');
        infoBlock.className = CONFIG.infoClass;
        infoBlock.style.padding = '10px 14px';
        infoBlock.style.borderLeft = '4px solid #4a90d9';
        infoBlock.style.backgroundColor = '#f9f9f9';
        infoBlock.style.margin = '16px 0';
        infoBlock.style.fontSize = '14px';
        infoBlock.innerHTML = `
            <strong>访问说明：</strong>
            本页面由 <a href="${CONFIG.siteUrl}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">${CONFIG.siteUrl}</a> 提供支持。
            核心关键词：<em>${CONFIG.keyword}</em> — 探索更多游戏乐趣。
        `;
        return infoBlock;
    }

    function renderBadges(container) {
        const fragment = document.createDocumentFragment();
        sampleKeywords.forEach(kw => {
            fragment.appendChild(createBadge(kw));
        });
        container.appendChild(fragment);
    }

    function renderTipCards(container) {
        const fragment = document.createDocumentFragment();
        tipMessages.forEach(msg => {
            fragment.appendChild(createTipCard(msg));
        });
        container.appendChild(fragment);
    }

    function init() {
        const root = document.getElementById('site-helper-root');
        if (!root) {
            console.warn('[site-helper] 未找到 #site-helper-root 容器，跳过渲染。');
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.style.maxWidth = '720px';
        wrapper.style.margin = '0 auto';
        wrapper.style.fontFamily = 'system-ui, -apple-system, sans-serif';

        const title = document.createElement('h3');
        title.textContent = `🔖 ${CONFIG.keyword} 关键词`;
        title.style.marginBottom = '8px';
        wrapper.appendChild(title);

        const badgeContainer = document.createElement('div');
        badgeContainer.style.marginBottom = '20px';
        renderBadges(badgeContainer);
        wrapper.appendChild(badgeContainer);

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = `💡 ${CONFIG.keyword} 提示卡片`;
        cardTitle.style.marginBottom = '8px';
        wrapper.appendChild(cardTitle);

        const cardContainer = document.createElement('div');
        renderTipCards(cardContainer);
        wrapper.appendChild(cardContainer);

        wrapper.appendChild(buildAccessInfo());

        root.appendChild(wrapper);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();