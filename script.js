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

} else {
    ampm.innerText = 'AM';
    clockHour.innerText = hour;
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
        } else if (number == 'x') {
            const display = document.getElementById('display');
            display.innerText += '*';
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
    displayPre = displayPre.substring(0,displayPre.length - 1);
    displayNumber.innerText = displayPre;
})