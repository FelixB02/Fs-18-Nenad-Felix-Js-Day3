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


// ex 2 

let temperature = Math.floor(Math.random() * 30 - 5);

console.log(temperature)

if (temperature <= 10) {
    document.getElementById('text').innerHTML = "<img src='/Vasiljev/Basic/cold.jpg'>"        
}
 else {
    console.log("The weather is moderate");
    document.getElementById('text').innerHTML = "<img src='/Vasiljev/Basic/hot.jpg'"
}






