function randomSCP() {
    window.location.href = 'scp-yc-' + addZero(Math.ceil(Math.random() * page_num)).toString() + '.html';
}