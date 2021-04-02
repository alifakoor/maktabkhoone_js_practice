var fifo = function(command, array, element = null) {
    if (command === 'Push') {
        array[array.length] = element
        for (var i = array.length - 1 ; i > 0; i-- ) {
            var temp = array[i-1]
            array[i-1] = array[i]
            array[i] = temp
        }
        console.log(array)
    } else if (command === 'Pull') {
        console.log(array[array.length - 1])
        var new_array = []
        for (var i = 0; i < array.length - 1; i++ ) {
            new_array[i]  = array[i]
        }
        array = new_array
    } else {
        console.log('You should give me a command.')
    }
}