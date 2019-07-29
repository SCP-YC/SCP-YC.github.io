var page_num = 5;

function addZero(num, addStr = '', appendStr = '') {
    if (num < 1 || num > page_num) {
        if (addStr === 'scp-yc-') return '#';
        return '无';
    }
    let str = num.toString();
    while (str.length < 3) {
        str = '0' + str;
    }
    return addStr + str + appendStr;
}

function initWikiWalk() {
    let title = document.head.getElementsByTagName('title')[0];
    let page = parseInt(title.innerHTML.slice(7, 10));
    if (isNaN(page)) return;
    let mainContent = document.getElementById('main-content');
    let walk = document.createElement('div');
    mainContent.appendChild(walk);
    walk.outerHTML = '' +
    '<div class="wiki-walk">' +
    '   « <a href="' + addZero(page-1, 'scp-yc-', '.html') + '">' + addZero(page-1, 'SCP-YC-') + '</a> | SCP-YC-' + addZero(page) + ' | <a href="' + addZero(page+1, 'scp-yc-', '.html') + '">' + addZero(page+1, 'SCP-YC-') + '</a> »' +
    '</div>';
}
