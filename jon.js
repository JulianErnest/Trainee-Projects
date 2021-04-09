// Objects
// let taw = "Rhys";
// let kamotNiRhys = 2;
// let gikapoy = true;

// let roshmel = new Object();
// roshmel.kamot = 2;
// roshmel.gikapoy = true;

// New Format
// let/const keyword + variable name + = + {}
// example:
// let roshmel = {
//     kamot: 2,
//     occupation: "HR",
//     buhok: 12,
//     grade: null,
// }

// kamot, occupation, buhok, grade = property
// roshmel = object

// console.log(roshmel.kamot);
// console.log(roshmel.occupation);
// console.log(roshmel.buhok);
// console.log(roshmel.grade);

// user object
// let user = {
//     firstName: 'Jomar',
//     lastName: 'Leano',
//     age: 18,
//     isAuthenticated: true,
// }

// user.firstName = "Jomar";

// // accessed through dot notation
// console.log(user.firstName);
// // accessed through brackets
// console.log(user['isAuthenticated']);

// console.log(user.age.toString());

// function sayHelloOtherSyntax() {

// }

// const inputFieldsValue = {
//     firstNameValue = document.getElementById("input-first-name").value,
//     lastNameValue = document.getElementById("input-last-name").value,
//     birthdayValue = document.getElementById("input-number").value,
//     ageValue = document.getElementById("input-age").value,
// }


const submitValues = () => {
    let firstNameVal = document.getElementById("firstNameVal").value;
    let lastNameVal = document.getElementById("lastNameVal").value;
    let dateVal = document.getElementById("dateVal").value;
    let ageVal = document.getElementById("ageVal").value;
    console.log(firstNameVal, lastNameVal, dateVal, ageVal);
}