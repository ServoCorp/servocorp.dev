//print the current users time in 12 hour format
function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = h >= 12 ? 'pm' : 'am';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    document.getElementById("time").innerHTML = time;
    setTimeout(printTime, 1000);
    }