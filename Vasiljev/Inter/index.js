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

    console.log(avg)

    console.log(students[i])

    document.getElementById('grades').innerHTML = `This is the average of the class ${avg}`
}

