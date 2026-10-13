// can a java script object hold a function as property ? explain with example

const person = {
    firstname :"dinesh",
    lastname :"dino",
    fullname : function(){

        console.log(this.firstname+" "+this.lastname);
    }
}
//person.fullname();
//console.log(person.firstname)

//what is ananymous function is JS ? define their syntax and implementation
//ananymous functions are those which doesnt have function name
//Why use anonymous functions?
//They're commonly used when you need a function temporarily, especially as a callback:

//normal function
function add (){
    //console.log("noramal function")
}

add();

//ananymous function
const test = function (){
    return person.firstname;
}

//console.log(test())

const test1 = function (){
    //console.log("ananymous function")
}

//console.log(test1())

const test2 = ()=> "test2";
//console.log(test2())

//------------------------
let x = 5;
x = 6;

//console.log(x)
//-------------------------
//asynronus example

//console.log("am 1st");
//console.log("am 2nd");
//console.log("am 3rd");
//setTimeout( ()=> console.log("am 4th"),2000);
//console.log("am 5th");

//------------------------
//call back

function greet() {
    console.log("Hello");
}

function doSomething(callback) {
    console.log("Doing something...");
    setTimeout(() => {
       console.log("test") 
       callback()
    }, 2000);
   
}

function greet1() {
    console.log("bye");
    
}

//greet();
//greet1(doSomething);
;

//-------------------------
//promise example

// console.log("am 1st")
// console.log("am 2nd")
// console.log("am 3rd")
// const promise = new Promise(function(resolve,reject){setTimeout(()=>{console.log("am 4th"),reject()},2000)})
// promise.then(()=>{
//     console.log("am 5th") 
// })

// const promise2 = new Promise(function(resolve,reject){
//     setTimeout( ()=> {console.log("am 4th"),resolve(true)},2000);
//     })

// async function add (){
//     console.log("am 1st");
//     console.log("am 2nd");
//     console.log("am 3rd");
//     await promise2;
//     console.log("am 5th");

// }

// add();

//--------------------------

const students = [
    {test1:50,
        test2:20,
        test3:80,
        test4:60
    }
]

//console.log(students.filter((student)=>student.test1>36));

//console.log(Object.keys(students[0]))

//Object.keys(students[0]).forEach(key=>console.log(key))

//Object.keys(students[0]).filter(key=>key != "test4").forEach(keys=>console.log(keys));

//----------------------

const student = [
    {name:"tim", score:50},
        {name:"david", score:20},
        {name:"warner", score:80},
        {name:"kohli", score:60}
]

//console.log(student)

const filter = student.filter(student=>student.score>36);
console.log(filter)
const update = filter.map(student=>student.name.toUpperCase());
console.log(update)
const total = filter.reduce((sum,student)=>student.score + sum,0)
console.log(total)
