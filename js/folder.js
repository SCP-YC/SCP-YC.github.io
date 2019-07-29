function initFolder() {
    let folders = document.getElementsByClassName('folder');
    for (let i = 0; i < folders.length; i ++) {
        let fold_info = folders[i].getAttribute('fold');
        let unfold_info = folders[i].getAttribute('unfold');
        folders[i].innerHTML = '' +
        '<input class="check" id="check-' + (i+1).toString() + '" type="checkbox">' +
        '<label class="fold-info" for="check-' + (i+1).toString() + '">' + fold_info + '</label>' +
        '<label class="unfold-info" for="check-' + (i+1).toString() + '">' + unfold_info + '</label>' +
        '<div class="fold-element">' +
        folders[i].innerHTML +
        '</div>';
    }
}