let students = ['John', 'Jane']
let mathGrades = [100, 85]

let fname = prompt()

let student = document.getElementById('student')


if(students.includes(fname)) {
    let index = students.indexOf(fname)
    let grade = mathGrades[index]

    student.innerHTML = `${students[index]}: ${grade}`

    if (grade <= 60) {
        student.style.color = 'red'
    } else if (grade <= 70 && grade >= 60) {
        student.style.color = 'yellow'
    } else if (grade > 70 && grade < 100) {
        student.style.color = 'green'
    } else if (grade == 100) {
        student.style.color = 'blue'
    }

} else {
    student.innerHTML = 'Not existing'
}