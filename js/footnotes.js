function initFootNotes() {
    let sups = document.getElementsByTagName('sup');
    if (sups.length == 0) return;
    let lis = document.getElementById('footer-notes').getElementsByTagName('li');
    for (let i = 0; i < sups.length; i ++) {
        sups[i].outerHTML = '' +
        '<div class="sup-tip">' +
        sups[i].outerHTML +
        '<span class="tip"><b style="font-size: 140%">Footnote ' + (i+1).toString() + '.</b><br>' + lis[i].innerHTML + '</span>' +
        '</div>';
    }
}