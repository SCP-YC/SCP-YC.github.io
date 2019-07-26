var page_num = 2;

function addZero(num) {
    if (num < 1 || num > page_num) {
        return '无';
    }
    let str = num.toString();
    while (str.length < 3) {
        str = '0' + str;
    }
    return str;
}

function initWikiWalk() {
    let title = document.head.getElementsByTagName('title')[0];
    let page = parseInt(title.innerHTML.slice(7, 10));
    let mainContent = document.getElementById('main-content');
    let walk = document.createElement('div');
    mainContent.appendChild(walk);
    walk.outerHTML = '' +
    '<div class="wiki-walk">' +
    '   « <a href="scp-yc-' + addZero(page-1) + '.html">SCP-' + addZero(page-1) + '</a> | SCP-' + addZero(page) + ' | <a href="scp-yc-' + addZero(page+1) + '.html">SCP-' + addZero(page+1) + '</a> »' +
    '</div>';
}
