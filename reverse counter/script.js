var minute = 2
var second = 0
var counter
var start = function() {
    insertInDOM('Timer is started!', '0' + minute, '0' + second)
    counter = setInterval(function(){
        if (second > 10) {
            insertInDOM(null, '0' + minute, second)
        } else if (second < 10) {
            insertInDOM(null, '0' + minute, '0' + second)
        }
        if (second === 0 && minute > 0) {
            second = 60
            minute -= 1
        } else if (second === 0 && minute === 0) {
            insertInDOM('Timer is ended!', '0' + minute, second)
            clearInterval(counter)
        }
        second -= 1
    }, 1000)
}

var insertInDOM = function(message, minute, second)
{
    if (message !== null)
    {
        document.getElementById('message').innerHTML = message
    }
    document.getElementById('minute').innerHTML = minute
    document.getElementById('second').innerHTML = second
}

var reset = function() {
    minute = 2
    second = 0
    clearInterval(counter)
    start()
}