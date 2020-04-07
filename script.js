const letterKey = {
    ru: [
        ['ё', 'Ё'],
        ['1', '!'],
        ['2', '"'],
        ['3', '№'],
        ['4', ';'],
        ['5', '%'],
        ['6', ':'],
        ['7', '?'],
        ['8', '*'],
        ['9', '('],
        ['0', ')'],
        ['-', '_'],
        ['=', '+'], '←', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х',
        'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ['\\', '|'], 'Enter', 'Shift', 'я', 'ч',
        'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'
    ],

    en: [
        ['`', '~'],
        ['1', '!'],
        ['2', '@'],
        ['3', '#'],
        ['4', '$'],
        ['5', '%'],
        ['6', '^'],
        ['7', '&'],
        ['8', '*'],
        ['9', '('],
        ['0', ')'],
        ['-', '_'],
        ['=', '+'], '←', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'],
        [']', '}'],
        'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", ['\\', '|'], 'Enter', 'Shift', 'z', 'x', 'c', 'v',
        'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'
    ],
};
let language = "";
if (localStorage.language === undefined) {
    language = 'ru';
    localStorage.language = language;
} else {
    language = localStorage.language;
}
let capslockOn = false;

function createKey() {
    let element = document.createElement('div');
    element.innerHTML = `
        <textarea class="output_text" cols="150" rows="15"></textarea>
        <div class="keyboard">
            <div class="rows"></div>
            <div class="rows"></div>
            <div class="rows"></div>
            <div class="rows"></div>
            <div class="rows"></div>
        </div>
        <h3>Переключение раскладки - "CTRL + ALT"</h3>
    `;
    document.body.append(element);

    let x = 0;
    const key = document.querySelectorAll('.rows');

    function generateKeyboard(n) {
        let result = [];
        for (let i = 0; i <= n; i++) {
            const div = document.createElement('div');
            div.classList.add('key');
            const span = document.createElement('span');
            div.append(span);
            if (language === 'ru') {
                if (Array.isArray(letterKey.ru[x])) {
                    span.append(letterKey.ru[x][0]);
                } else { span.append(letterKey.ru[x]) }
                if (letterKey.ru[x] === ' ') {
                    div.classList.add('space-key');
                }
                if (letterKey.ru[x] === 'Ctrl') {
                    if (x === 55) {
                        div.classList.add('lCtrl');
                    } else if (x === 60) div.classList.add('rCtrl');
                }
                if (letterKey.ru[x] === 'Shift') {
                    if (x === 42) {
                        div.classList.add('lShift');
                    } else if (x === 53) div.classList.add('rShift');
                }
                if (letterKey.ru[x] === 'Alt') {
                    if (x === 57) {
                        div.classList.add('lAlt');
                    } else if (x === 59) div.classList.add('rAlt');
                }
                if (letterKey.ru[x] === 'Win') {
                    div.classList.add('win');
                }
                if (letterKey.ru[x] === 'CapsLock') {
                    div.classList.add('capslock');
                }
                if (letterKey.ru[x] === ' ') {
                    div.classList.add('space-key');
                }
                if (letterKey.ru[x] === '←') {
                    div.classList.add('backspace');
                }
                if (letterKey.ru[x] === 'Left' || letterKey.ru[x] === 'Right' ||
                    letterKey.ru[x] === 'Up' || letterKey.ru[x] === 'Down') {
                    div.classList.add('arrow');
                }
                x++;
                result.push(div);
            } else if (language === 'en') {
                if (Array.isArray(letterKey.en[x])) {
                    span.append(letterKey.en[x][0]);
                } else { span.append(letterKey.en[x]) }
                if (letterKey.en[x] === ' ') {
                    div.classList.add('space-key');
                }
                if (letterKey.en[x] === 'Ctrl') {
                    if (x === 55) {
                        div.classList.add('lCtrl');
                    } else if (x === 60) div.classList.add('rCtrl');
                }
                if (letterKey.en[x] === 'Shift') {
                    if (x === 42) {
                        div.classList.add('lShift');
                    } else if (x === 53) div.classList.add('rShift');
                }
                if (letterKey.en[x] === 'Alt') {
                    if (x === 57) {
                        div.classList.add('lAlt');
                    } else if (x === 59) div.classList.add('rAlt');
                }
                if (letterKey.en[x] === 'Win') {
                    div.classList.add('win');
                }
                if (letterKey.en[x] === 'CapsLock') {
                    div.classList.add('capslock');
                }
                if (letterKey.en[x] === ' ') {
                    div.classList.add('space-key');
                }
                if (letterKey.en[x] === '←') {
                    div.classList.add('backspace');
                }
                if (letterKey.en[x] === 'Left' || letterKey.en[x] === 'Right' ||
                    letterKey.en[x] === 'Up' || letterKey.en[x] === 'Down') {
                    div.classList.add('arrow');
                }
                x++;
                result.push(div);
            }
        }
        return result;
    }
    key[0].append(...generateKeyboard(13));
    key[1].append(...generateKeyboard(13));
    key[2].append(...generateKeyboard(13));
    key[3].append(...generateKeyboard(12));
    key[4].append(...generateKeyboard(8));
}

createKey();

const BODY = document.querySelector('body');
const OUTPUT = document.querySelector('textarea');
const KEYBOARD = document.querySelector('.keyboard');

BODY.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        OUTPUT.value += '\t';
    }
    for (let i = 0; i < 64; i++) {
        if (event.code === 'ShiftLeft' && i === 42) {
            document.querySelector('.lShift').classList.add('active');
        } else if (event.code === 'AltLeft' && i === 59) {
            document.querySelector('.lAlt').classList.add('active');
        } else if (event.code === 'AltRight' && i === 57) {
            document.querySelector('.rAlt').classList.add('active');
        } else if (event.code === 'ShiftRight' && i === 53) {
            document.querySelector('.rShift').classList.add('active');
        } else if (event.code === 'ControlLeft' && i === 55) {
            document.querySelector('.lCtrl').classList.add('active');
        } else if (event.code === 'ControlRight' && i === 60) {
            document.querySelector('.rCtrl').classList.add('active');
        } else if (event.code === 'Backspace' && i === 13) {
            document.querySelector('.backspace').classList.add('active');
        } else if (event.key === 'ArrowLeft' && document.querySelectorAll('span')[i].textContent === 'Left') {
            document.querySelectorAll('span')[i].parentElement.classList.add('active');
        } else if (event.key === 'ArrowUp' && document.querySelectorAll('span')[i].textContent === 'Up') {
            document.querySelectorAll('span')[i].parentElement.classList.add('active');
        } else if (event.key === 'ArrowRight' && document.querySelectorAll('span')[i].textContent === 'Right') {
            document.querySelectorAll('span')[i].parentElement.classList.add('active');
        } else if (event.key === 'ArrowDown' && document.querySelectorAll('span')[i].textContent === 'Down') {
            document.querySelectorAll('span')[i].parentElement.classList.add('active');
        } else if (event.code === 'MetaLeft' && i === 56) {
            document.querySelector('.win').classList.add('active');
        } else if (event.key !== 'Shift' && event.key === document.querySelectorAll('span')[i].textContent) {
            document.querySelectorAll('span')[i].parentElement.classList.add('active');
        }
    }
    OUTPUT.focus();
});

BODY.addEventListener('keyup', (event) => {
    for (let i = 0; i < 64; i += 1) {
        if (event.code === 'ControlLeft' || event.code === 'MetaLeft' || event.code === 'ControlRight' ||
            event.code === 'Backspace' || event.code === 'Win' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' ||
            event.key === 'ArrowUp' || event.key === 'ArrowRight' || event.key === 'AltRight') {
            document.querySelector('.rShift').classList.remove('active');
            document.querySelector('.backspace').classList.remove('active');
            document.querySelector('.rCtrl').classList.remove('active');
            document.querySelector('.lCtrl').classList.remove('active');
            document.querySelector('.win').classList.remove('active');
            for (let j = 0; j < document.querySelectorAll('.arrow').length; j++) {
                document.querySelectorAll('.arrow')[j].classList.remove('active');
            }
        }
        if (event.key === document.querySelectorAll('span')[i].textContent) {
            document.querySelectorAll('span')[i].parentElement.classList.remove('active');
        }
    }
    OUTPUT.focus();
});

let activeElement = '';

KEYBOARD.addEventListener('mousedown', (event) => {
    OUTPUT.focus();
    let elementToDelete = '';
    if (event.target.classList[0] === 'key') {
        activeElement = event.target;
    } else { activeElement = event.target.parentElement; }
    if (event.target.parentElement.classList[0] === 'key') {
        event.target.parentElement.classList.add('active');
    } else {
        event.target.classList.add('active');
    }
    if (event.target.textContent === 'Enter') {
        OUTPUT.value += '\n';
    }
    if (event.target.textContent === 'Tab') {
        OUTPUT.value += '\t';
    }
    if (event.target.textContent === 'Up') {
        OUTPUT.value += '↑';
    }
    if (event.target.textContent === 'Down') {
        OUTPUT.value += '↓';
    }
    if (event.target.textContent === 'Right') {
        OUTPUT.value += '→';
    }
    if (event.target.textContent === 'Left') {
        OUTPUT.value += '←';
    }
    if (event.target.textContent === '←') {
        for (let k = 0; k < OUTPUT.value.length - 1; k++) {
            elementToDelete += OUTPUT.value[k];
        }
        OUTPUT.value = elementToDelete;
    }
    if (event.target.classList[0] !== 'rows' && event.target.classList[0] !== 'keyboard' &&
        event.target.textContent !== 'Shift' && event.target.textContent !== '←' &&
        event.target.textContent !== 'Delete' && event.target.textContent !== 'Enter' &&
        event.target.textContent !== 'Ctrl' && event.target.textContent !== 'Alt' &&
        event.target.textContent !== 'Win' && event.target.textContent !== 'CapsLock' &&
        event.target.textContent !== 'Tab' && event.target.textContent !== 'Up' &&
        event.target.textContent !== 'Left' && event.target.textContent !== 'Down' &&
        event.target.textContent !== 'Right') {
        OUTPUT.value += event.target.textContent;
    }
});

document.addEventListener('mouseup', (event) => {
    if (event.target.tagName === 'HTML' || event.target.tagName === 'DIV' || event.target.tagName === 'SPAN') activeElement.classList.remove('active');
    OUTPUT.focus();
});

OUTPUT.addEventListener('keydown', (event) => {
    if (event.key === 'Shift') {
        const span = document.querySelectorAll('span');
        let a = 0;
        for (let i = 0; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toUpperCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toUpperCase());
                }
                a++;
            }
        }
    }
    if (event.key === 'CapsLock' && !capslockOn) {
        capslockOn = !capslockOn;
        const span = document.querySelectorAll('span');
        let a = 14;
        for (let i = 14; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toUpperCase());
                }
                a++;
            } else if (language === 'ru') {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toUpperCase());
                }
                a++;
            }
        }
    } else if (event.key === 'CapsLock' && capslockOn) {
        capslockOn = !capslockOn;
        const span = document.querySelectorAll('span');
        let a = 14;
        for (let i = 14; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toLowerCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toLowerCase());
                }
                a++;
            }
        }
    }
});

OUTPUT.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        const span = document.querySelectorAll('span');
        let a = 0;
        for (let i = 0; i < span.length; i += 1) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][0]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toLowerCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][0]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toLowerCase());
                }
                a++;
            }
        }
    }
});

KEYBOARD.addEventListener('mousedown', (event) => {
    if (event.target.textContent === 'Shift') {
        const span = document.querySelectorAll('span');
        let a = 0;
        for (let i = 0; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toUpperCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toUpperCase());
                }
                a++;
            }
        }
    }
    if (event.target.textContent === 'CapsLock' && !capslockOn) {
        capslockOn = !capslockOn;
        const span = document.querySelectorAll('span');
        let a = 14;
        for (let i = 14; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toUpperCase());
                }
                a++;
            } else if (language === 'ru') {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toUpperCase());
                }
                a++;
            }
        }
    } else if (event.target.textContent === 'CapsLock' && capslockOn) {
        capslockOn = !capslockOn;
        const span = document.querySelectorAll('span');
        let a = 14;
        for (let i = 14; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toLowerCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][1]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toLowerCase());
                }
                a++;
            }
        }
    }
});

KEYBOARD.addEventListener('mouseup', (event) => {
    if (event.target.textContent === 'Shift') {
        const span = document.querySelectorAll('span');
        let a = 0;
        for (let i = 0; i < span.length; i++) {
            if (language === 'en') {
                if (Array.isArray(letterKey.en[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a][0]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.en[a].toLowerCase());
                }
                a++;
            } else {
                if (Array.isArray(letterKey.ru[a])) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a][0]);
                } else if (span[i].textContent.length === 1) {
                    span[i].innerText = '';
                    span[i].append(letterKey.ru[a].toLowerCase());
                }
                a++;
            }
        }
    }
});

function switchLanguage() {
    if (language === 'ru') {
        for (let i = 0; i < 64; i += 1) {
            const switcher = document.querySelectorAll('span');
            if (Array.isArray(letterKey.ru[i])) {
                switcher[i].textContent = [letterKey.ru[i][0]];
            } else { switcher[i].textContent = letterKey.ru[i]; }
        }
    } else {
        for (let i = 0; i < 64; i += 1) {
            const switcher = document.querySelectorAll('span');
            if (Array.isArray(letterKey.en[i])) {
                switcher[i].textContent = [letterKey.en[i][0]];
            } else { switcher[i].textContent = letterKey.en[i]; }
        }
    }
}
document.addEventListener('keydown', (event) => {
    if (event.shiftKey && event.altKey && language === 'en') {
        language = 'ru';
        localStorage.language = 'ru';
        switchLanguage();
    } else if (event.shiftKey && event.altKey && language === 'ru') {
        language = 'en';
        localStorage.language = 'en';
        switchLanguage();
    }
});