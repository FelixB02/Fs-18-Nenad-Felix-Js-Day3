let students = ['Martin', 'Thomas', 'Klaus', 'Maria', 'David']
let grades = [76, 85, 65, 93, 81]

for (let i = 0; i < students.length; i++) {
    if (grades[i] < 60) {
        document.getElementById('text').innerHTML += `${students[i]} has grades ${grades[i]} <br>`
    } else if (grades[i] < 70) {
        document.getElementById('text').innerHTML += `${students[i]} has grades ${grades[i]} <br>`
    } else if (grades[i] < 80) {
        document.getElementById('text').innerHTML += `${students[i]} has grades ${grades[i]} <br>`
    } else if (grades[i] < 90) {
        document.getElementById('text').innerHTML += `${students[i]} has grades ${grades[i]} <br>`
    } else if (grades[i] < 100) {
        document.getElementById('text').innerHTML += `${students[i]} has grades ${grades[i]} <br>`
    }

    let avg = 0;

    for(let i = 0; i < grades.length; i++) {
        avg +=grades[i] / 3
    }

    document.getElementById('grades').innerHTML = `This is the average of the class ${avg}`
}


// ex2

for(let i = 0; i < 100; i++) {
    if(i % 3 === 0) {
        document.getElementById('fizz').innerHTML = 'fizz'
    } else if (i % 5 === 0) {
        document.getElementById('fizz').innerHTML = 'buzz'
    } else if (i % 5 === 0 && i % 3 === 0) {
        document.getElementById('fizz').innerHTML = 'fizzBuzz'
    } else {
        document.getElementById('fizz').innerHTML = i
    }
}

// for(let i = 1; i < 100; i++) {
//     if(i % 3 === 0 && i % 5 == 0) {
//         console.log('fizz buzz')
//     } else if (i % 5 === 0) {
//         console.log('buzz')
//     } else if (i % 3 == 0) {
//         console.log('fizz ')
//     } else {
//         console.log(i)
//     }
// }

//ex 3 

let star = ''


for (let i = 0; i < 8; i++) {
    star += '*'
    document.getElementById('stars').innerHTML += `${star} <br>`
}

