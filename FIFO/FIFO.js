var push = function(array, element) 
{
    array[array.length] = element
    for (var i = array.length - 1; i > 0; i--) {
        var temp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = temp
    }
    return array
}

var pull = function(array)
{
    var new_array = []
    for (var j = 0; j < array.length - 1; j++) {
        new_array[j] = array[j]
    }
    return array[array.length - 1]
}

var fifo =  { push, pull }

/* 
Usage:
    use fifo.push(array, element) for 'First in' element
    use fifo.pull(array) for 'First out' last element
*/
var test_array = [1, 2, 5]
console.log(fifo.push(test_array, 3))
console.log(fifo.pull(test_array))