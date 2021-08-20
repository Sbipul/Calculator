const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const clockHour = document.getElementById('clockHour');
const clockMinute = document.getElementById('clockMinute');
const ampm = document.getElementById('ampm');


if (minute < 10) {
    clockMinute.innerText = '0' + minute;
} else {
    clockMinute.innerText = minute;
}
if (hour >= 12 && hour <= 23) {
    ampm.innerText = 'PM';
    clockHour.innerText = hour - 12;
    const day = document.getElementById('day');
    day.innerText = 'Good after Noon';

} else {
    ampm.innerText = 'AM';
    clockHour.innerText = hour;
    const day = document.getElementById('day');
    day.innerText = 'Good Morning';
}
document.getElementById('all').addEventListener('click', function (e) {
    var number = e.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            const display = document.getElementById('display');
            const result = document.getElementById('result');
            display.innerText = '';
            result.innerText = '';
        } else if (number == '.') {
            const display = document.getElementById('display');
            display.innerText += '.';
        } else if (number == '+') {
            const display = document.getElementById('display');
            display.innerText += '+';
        } else if (number == '-') {
            const display = document.getElementById('display');
            display.innerText += '-';
        } else if (number == '00') {
            const display = document.getElementById('display');
            display.innerText += '00';
        } else if (number == 'x') {
            const display = document.getElementById('display');
            display.innerText += '*';
        } else if (number == '(') {
            const display = document.getElementById('display');
            display.innerText += '(';
        } else if (number == ')') {
            const display = document.getElementById('display');
            display.innerText += ')';
        } else if (number == '/') {
            const display = document.getElementById('display');
            display.innerText += '/';
        } else if (number == '=') {
            const display = document.getElementById('display');
            const result = document.getElementById('result');
            result.innerText = eval(display.innerText);
        }
    } else {
        const display = document.getElementById('display');
        display.innerText += number;
    }
})
document.getElementById('delete').addEventListener('click', function () {
    const displayNumber = document.getElementById('display');
    let displayPre = displayNumber.innerText;
    displayPre = displayPre.substring(0, displayPre.length - 1);
    displayNumber.innerText = displayPre;
})



function back() {
    const first = document.getElementsByClassName('color-yellow');
    const bg = document.getElementById('bg-dark');
    const day = document.getElementById('day');
    const colorPink = document.getElementsByClassName('color-pink');
    const textDark = document.getElementById('textDark');
    const bgbtn = document.getElementsByClassName('bg');
    textDark.style.color = 'black';
    day.style.color = 'black';
    bg.style.background = 'rgb(180, 180, 180)';
    for (const bgs of bgbtn) {
        bgs.style.background = 'rgb(204, 204, 204)';
        bgs.style.color = 'rgb(0, 0, 0)';
        bgs.style.borderRadius = '.6rem';
        bgs.style.color = 'rgb(0, 0, 0)';
    }
    for (const two of colorPink) {
        two.style.background = 'rgb(99, 98, 108)';
        two.style.color = 'white';
    }
    for (const one of first) {
        one.style.background = 'rgb(102, 39, 39)';
        one.style.color = 'white';
    }

}