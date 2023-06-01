let countDownDate = new Date('Aug 25, 2023 15:37:25').getTime();

let x = setInterval(function () {

    let now = new Date().getTime();
    let timeOut = countDownDate - now;

    let days = Math.floor(timeOut / (1000 * 60 * 60 * 24));//Math.floor 내림함수
    let hours = Math.floor((timeOut % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeOut % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeOut % (1000 * 60)) / 1000);

    document.getElementById('count_time').innerHTML = days + '일 ' + hours + ' : ' + minutes + ' : ' +
        seconds + ' ';


    if (timeOut < 0) {
        clearInterval(x);
        document.getElementById('count_time').innerHTML = '종료된 이벤트 입니다.';
    }
}, 1000); //countdown function