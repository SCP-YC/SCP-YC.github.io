function initSidebar() {
    let sidebar = document.createElement('div');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(sidebar, mainContent);
    sidebar.outerHTML = '' +
    '    <div id="sidebar">' +
    '        <aside id="begin-news" class="side-block">' +
    '            <div class="side-head">新人资讯</div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">新手指南</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">网站站规</a></div>' +
    '            <div class="side-item"><img src="../icons/main.png"><a href="#">加入网站</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">如何撰写一篇SCP文档</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">SCP-YC沙盒站</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">常见问题解答</a></div>' +
    '        </aside>' +
    '        <aside id="index" class="side-block">' +
    '            <div class="side-item"><img src="../icons/home.png"><a href="index.html">主页</a></div>' +
    '' +
    '            <div class="side-head">SCP资料库</div>' +
    '            <div class="side-item"><img src="../icons/series.png"><a href="series-1.html">SCP-YC系列 Ⅰ</a><span class="subtext">(001 - 999)</span></div>' +
    '' +
    '            <div class="side-head">网站</div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">最近新增的页面</a></div>' +
    '            <div class="side-item"><img src="../icons/main.png"><a href="javascript: randomSCP();">随机SCP</a> | <a href="#">故事</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">最近的更新</a> | <a href="#">修改的页面</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">最高评分的页面</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">最低评分的页面</a></div>' +
    '' +
    '            <div class="side-head">社交</div>' +
    '            <div class="side-item"><img src="../icons/forum.png"><a href="#">讨论区</a> | <a href="#">最近发帖</a></div>' +
    '            <div class="side-item"><img src="../icons/help.png"><a href="#">批评守则</a></div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">成员页</a> | <a href="#">YC分部成员页</a></div>' +
    '' +
    '            <div class="side-head">相关网站</div>' +
    '            <div class="side-item"><img src="../icons/default.png"><a href="#">SCP基金会YC讨论论坛</a></div>' +
    '        </aside>' +
    '        <a id="close-menu" href="#"></a>' +
    '    </div>';
}