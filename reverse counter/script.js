var minute = 2
var second = 0
var counter
var start = function() {
    counter = setInterval(function(){
        document.getElementById('message').innerHTML = 'Timer is started'
        document.getElementById('minute').innerHTML = '0' + minute
        if (second > 10) {
            document.getElementById('second').innerHTML = second
        } else if (second < 10) {
            document.getElementById('second').innerHTML = '0' + second
        }
        if (second === 0 && minute > 0) {
            second = 60
            minute -= 1
        } else if (second === 0 && minute === 0) {
            document.getElementById('message').innerHTML = 'Timer is ended'
            clearInterval(counter)
        }
        second -= 1
    }, 1000)
}

var reset = function() {
    minute = 2
    second = 0
    clearInterval(counter)
    start()
}