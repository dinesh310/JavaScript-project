let string = "Tuesday";

console.log(string.slice(4)) //sbstring
console.log(string.length); //length
console.log(string[1]) //extract only character "u"

console.log(string.split("s")); //split

let string1 = "3"
let string2 = "2"

console.log(string1+string2); //concatenate
console.log(parseInt(string1)+parseInt(string2)); //convert from string to number

let a = 3
let b = 4

console.log(a.toString()+b.toString()) // convert from number to string

let value = string + " is a funday";
console.log(value)

console.log(value.indexOf("day")); // prints the index of day

// write a program to count the number of occurances of "a"

let count = 0;
let variable = value.indexOf("a"); 
console.log(variable)
while(variable!=-1){

    variable = value.indexOf("a",variable+1);
    count++;
}
console.log(count)