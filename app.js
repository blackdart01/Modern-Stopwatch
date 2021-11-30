let ms = 0;
let watch = document.getElementById('timer');
let check = document.getElementById('start');
let timer;
let intt = 10;
let y = 0;
function timeStart() {
    clearInterval(timer);
    watch.style.color = "dodgerblue";
    check.style.color = "dodgerblue";
    check.style.borderColor = "dodgerblue";
    timer = setInterval(() => {
        ms += 10;
        let dateTimer = new Date(ms);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, intt);
}
function timePaused() {
    if (watch.innerHTML != "00:00:00:00") {
        watch.style.color = "red";
        check.style.color = "#ff0000a1";
        check.style.borderColor = "red";
        clearInterval(timer);
    }
}

function timeReset() {
    if (watch.innerHTML != "00:00:00:00") {
        ms = 0;
        setInterval(timer);
        clearInterval(timer);
        watch.innerHTML = "00:00:00:00";
        watch.style.color = "#ffffffa1";
        check.style.color = "#1e90ffa1";
        check.style.borderColor = "dodgerblue";
    }
}
document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.id === 'start') timeStart();
    if (el.id === 'pause') timePaused();
    if (el.id === 'reset') timeReset();
})