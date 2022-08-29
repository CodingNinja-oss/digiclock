setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM"
    if (hrs > 12) {
        hrs -= 12;
        am_pm = "PM";
    }
    if (hrs == 0) {
        hr = 12;
        am_pm = "AM";
    }
    hrs = hrs < 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hrs + ":" + min + ":" + sec +" "+ am_pm;
    document.getElementById("clock").innerHTML = currentTime;
}
showTime();