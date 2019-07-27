function initHeader() {
    let header = document.createElement('header');
    let mainContent = document.getElementById('main-content');
    document.body.insertBefore(header, mainContent);
    header.outerHTML = '' +
    '    <header>' +
    '        <h1>' +
    '            <a href="../index.html">' +
    '                <span id="title">SCP基金会 YC分部</span>' +
    '            </a>' +
    '        </h1>' +
    '        <h2>控制，收容，保护</h2>' +
    '        <nav id="popup-menu">' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">背景资料</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">故事</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">图书馆</span>' +
    '            </div>' +
    '            <div class="popup-group">' +
    '                <span class="popup-button">SCP-YC系列</span>' +
    '                <div class="popup-item">' +
    '                    <a href="series-1.html">YC系列 Ⅰ (YC-001 - YC-999)</a>' +
    '                    <a href="#">» YC系列 Ⅰ 故事</a>' +
    '                    <a href="#">搞笑SCP-YC</a>' +
    '                </div>' +
    '            </div>' +
    '        </nav>' +
    '        <div id="open-menu">' +
    '            <a href="#sidebar">≡</a>' +
    '        </div>' +
    '    </header>';
}