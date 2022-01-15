//print the current users time in 12 hour format
function printTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    var time = h + ':' + m + ':' + s + ' ' + ampm;
    console.log(time);
    document.getElementById('time').innerHTML = time;
    setTimeout(printTime, 1000);
    }

function getDate() {
    //get the current date and print it in the format of mm/dd/yyyy
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    var date = month + '/' + day + '/' + year;
    console.log(date);
    document.getElementById('date').innerHTML = date;
    }


    // call the functions
    printTime();
    getDate();