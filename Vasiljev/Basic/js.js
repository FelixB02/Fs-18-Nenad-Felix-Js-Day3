let array = [1, 7, -3, 9, 12]
let max = array[0]

for (let i = 0; i < array.length; i++) {
    // if (array[i] > max) {
    //     array[i] = max;
    // }
    // console.log(array[i])

    if (array[i] > max) {
        max = array[i]
    }

}

console.log(max)