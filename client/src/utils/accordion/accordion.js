
titleClass   = 'js-Accordion-title',
contentClass = 'js-Accordion-content';

function onClick(e) {
    if (e.target.className.indexOf(titleClass) === -1) {
        return;
    }

    if (oneOpen) {
        closeAll();
    }

    toggle(e.target.nextElementSibling);
}

function closeAll() {
    [].forEach.call(element.querySelectorAll('.' + contentClass), function (item) {
        item.style.height = 0;
    });
}

function toggle(el) {
    // getting the height every time in case
    // the content was updated dynamically
    var height = el.scrollHeight;

    if (el.style.height === '0px' || el.style.height === '') {
        el.style.height = height + 'px';
    } else {
        el.style.height = 0;
    }
}


function getTarget(n) {
    return element.querySelectorAll('.' + contentClass)[n - 1];
}

function open(n) {
    var target = getTarget(n);

    if (target) {
        if (oneOpen) closeAll();
        target.style.height = target.scrollHeight + 'px';
    }
}

function close(n) {
    var target = getTarget(n);

    if (target) {
        target.style.height = 0;
    }
}

function destroy() {
    element.removeEventListener('click', onClick);
}

