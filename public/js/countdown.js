CountDownTimer('08/05/2022 11:11:30 PST', 'countDown');
// CountDownTimer('02/20/2012 10:1 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'Mint is live!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = 'Public mint in ' + days + ' days ';
        document.getElementById(id).innerHTML += hours + ' hrs ';
        document.getElementById(id).innerHTML += minutes + ' mins ';
        document.getElementById(id).innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);
}
