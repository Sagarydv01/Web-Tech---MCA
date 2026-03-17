/* // enter details of 5 stduents
const  student = {
    name : "hhj",
    age: 10,
    course: "MCA",
    rollNo: 221,
    enrollNo: 320,
    college: "LIET",
    registration : (fee) => {
        console.log(`Fee of Student ${name} is ${fee}`);
        
    }
}

for (let i in student) {
    i = prompt("ENter");
}

for (let i of student) {
    console.log(i);
    
} */

let students = {};

for (let i = 1; i <= 5; i++) {

    students["student" + i] = {
        name: prompt("Enter Name"),
        age: prompt("Enter Age"),
        course: prompt("Enter Course"),
        rollNo: prompt("Enter Roll No"),
        enrollNo: prompt("Enter Enroll No"),
        college: prompt("Enter College"),
        registration: function (fee) {
            console.log(`Fee of Student ${this.name} is ${fee}`);
        }
    };
}

// Printing students
for (let key in students) {
    console.log(students[key]);
}