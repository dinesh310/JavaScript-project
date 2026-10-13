
let numbers = [20,35,47,80,95]

//array length
console.log(numbers.length)

//push
numbers.push(99);
console.log(numbers)

//pop
numbers.pop()
console.log(numbers)

//shift
numbers.shift()
console.log(numbers)

//unshift
numbers.unshift(20)
console.log(numbers)

//includes
console.log(numbers.includes(81))

//indexof
console.log(numbers.indexOf(80))

//slice
console.log(numbers.slice(1,4)) //slice(1, 4) takes indexes 1, 2, 3, but not 4.
console.log(numbers.slice(2)) //If you don't provide the end, it takes everything until the end.

//splice
numbers.splice(2,2); //remove //Start at index 2 and remove 2 elements.
console.log(numbers)
numbers.splice(2,0,66); //add
console.log(numbers)
numbers.splice(1,1,45); //replace
console.log(numbers)

//reduce
let num = [20,35,47,80,95]
let sum = 0
for(let i = 0;i<num.length;i++){

    sum = sum + num[i];
}
console.log(sum);

const total = num.reduce((sum,num)=>sum+num,0); //sum = accumulator(stores the result, num = current array element, 0 = initial value of sum)
console.log(total)
let max = num.reduce((largest,num)=>num>largest ? num : largest,num[0]); //find the largest and ?: are terinany operations represent ifelse
console.log(max)

//filters
let names = ["Rahul", "John", "Raj", "Priya"];

let filtervalue = names.filter((namesss)=>namesss.length>4); //names is current array value
console.log(filtervalue)
let numberss = [1, 2, 3, 4, 5, 6];
console.log(numberss.filter((num)=>num%2==0));

//map
 let students = [{name: "Rahul", age: 20},{name: "Priya", age: 22 },{name: "John", age: 21}];

 let nam = students.map((stud)=>stud.name);
console.log(students);
console.log(nam)