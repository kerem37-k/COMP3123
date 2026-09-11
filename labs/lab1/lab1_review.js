/***
 pupose: review js concepts prototypes vs vlasses
 regulat functionsm anonymous functions, arrow functions
 callbask functions
 MERN: N stands for Node.js
 */

 // var is global vs. let is local

 var globalVariable = 100
 let locallVariable = 200
function functionName(){
    let varInFunc = "local"
}



// Prototype - one time use object from a prototype
const oneTimeUseObj = {
    prop1:"Kerem",
    prop2: "comp3123",
    method1: function (param1){
        console.log(param1)
    }
}
console.log(oneTimeUseObj)
console.log(oneTimeUseObj.prop1)
console.log(oneTimeUseObj.prop2)
oneTimeUseObj.method1("pizza")

// Prototype using a consturctor

function Student (student_name_p, course_p, lunch_p){
    this.student_name = student_name_p
    this.course = course_p
    this.lunch = lunch_p
    this.method1 = function (param1){
        return param1
    }
}

const morning_student = new Student("Kerem", "comp3123", "noodles")
console.log(morning_student)
console.log(morning_student.student_name)
console.log(morning_student.course)
morning_student.method1(morning_student.lunch)

// classes - always have constructors 
class Prof{
    constructor(prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(lunch){
        console.log(lunch)
    }
}

const morning_prof = new Prof ("Laily")
console.log(morning_prof.prof_name)
morning_prof.method1("burger")

