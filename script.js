let hours = 0;
let minute = 0;
let second = 0;
let milli = 0;

let timer = false;



function start() {
    timer = true;
    myFun();
}
function stop() {
    timer = false;
    myFun();
}
function reset() {
    location.reload();
}


// hours = hours < 10 ? '0' + hours : hours ;
// minute = minute < 10 ? '0' + minute : minute ;
// second = second < 10 ? '0' + second : second ;
// milli = milli < 10 ? '0' + milli : milli ;

function myFun() {
    if (timer == true) {
        milli = milli + 1;
        if (milli == 100) {
            second = second + 1;
            milli = 0;
        }
        if (second == 60) {
            minute = minute + 1;
            second = 0;
        }
        if (minute == 60) {
            hours = hours + 1;
            minute = 0;
        }
    }

    let hh = hours;
    let mm = minute;
    let ss = second;
    let mili = milli;


    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;
    mili = mili < 10 ? '0' + mili : mili;

    document.querySelector('#hours').innerHTML = hh;
    document.querySelector('#minutes').innerHTML = mm;
    document.querySelector('#second').innerHTML = ss;
    document.querySelector('#milli').innerHTML = mili;

    setTimeout("myFun()", 10);
}

