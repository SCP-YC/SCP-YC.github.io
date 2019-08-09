function randomSCP() {
    window.location.href = '../scp-yc/scp-yc-' + addZero(Math.ceil(Math.random() * page_num)).toString() + '.html';
}

var tales = [
    'foundation-criminal-case-logs'
];

function randomTale() {
    window.location.href = '../tales/' + tales[Math.floor(Math.random() * tales.length)] + '.html';
}