//sum of array
const a = [10,20,30]
const result = a.reduce((sum,a)=> sum+a,0);
console.log(result)

//given string is palindrome
const user = "civic"

let reverse = ""
for(let i = user.length-1;i>=0;i--){
    reverse = reverse+user[i];
}

console.log(reverse)

if(user ===  reverse){

    console.log("string is palidrome")
}else{
    console.log("string is not palidnrome")
}

//const reverse = user.split('').reverse().join('')
//console.log(reverse)

//console.log("5" - 3); 

//print all prime numbers
//Only divisible by 1 and the number itself, with no remainder.

const n = 30;

for(let num = 2;num<=n;num++){
    let count = 0;
    for(let i = 1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log(num)
    }
}

//check if given number is prime
const n1 = 11
let count=0;
for(let num = 1;num<=n1;num++){
    
    if(n1%num==0){
        count++;
    }
}
if(count==2){
        console.log("given num is prime")
    }else{
        console.log("given number is not prime")
    }
 
    //factorial n

    let fact = 5;
    let factnew = 1;

    for(let i = 1;i<=fact;i++){

        factnew = factnew * i
    }

    console.log(factnew)

    //fibonacci series

    let n2 = 10;

    let a1 = 0,b =1,c;

    for(let i = 0;i<n2;i++){
        console.log(a1);
        c = a1+b;
        a1=b;
        b=c;

    }

    //How do you find the unique elements in an array with duplicate elements?

    const array =  [1, 2, 3, 2, 4, 1, 5, 3];
    const newarray = [];
    for(let i = 0;i<array.length;i++){

        if(!newarray.includes(array[i])){
            newarray.push(array[i])
        }

    }

    console.log(newarray)

    //print duplicate numbers in an array

    for(let i = 0;i<array.length;i++){
        for(let j = i+1;j<array.length;j++){
            if(array[i]==array[j]){
                console.log(array[i])
            }
        }
    }


//anagram means two strings contain the same characters with the same frequency, but possibly in a different order.

//"listen" → "silent" = anagram, "hello"  → "world" = not an anagram, "aab" -> "abb" = not a anagram

let str1 = "silent"
let str2 = "listen"
let arr = str2.split("");
let anagram = true;

if(str1.length==str2.length){

    for(let i=0;i<str1.length;i++){

        let flag = false;
        for(let j = 0;j<arr.length;j++){
            if(str1[i]==arr[j]){
                arr.splice(j,1);
                flag = true;
                break;
            }
        }
        if (!flag) {
            anagram = false;
            break;
        }
    }

} else{
    anagram = false
}

if(anagram){
    console.log("two strings are anagram")
}else{
    console.log("two strings are not anagram")
}
 
//How do you stringify a JavaScript object into a JSON string?
const obj = { name: "Alice", age: 30 };

const jsonstring = JSON.stringify(obj) //convert to Json string

console.log(jsonstring)

console.log(JSON.parse(jsonstring)) //To convert it back into an object, use JSON.parse():

//find number of times a character is present in a string

const str3 = "javascriapta";
const value = "a"
let countr = 0;
for(let i = 0;i<str3.length;i++){
    if(str3[i]===value){
        countr++;
    }
}
console.log(countr)

//print non duplicate words
const str = "roshan is automation tester and roshan is UI tester"

const strsplit = str.split(" ");

for (let i = 0; i < strsplit.length; i++) {
    let counter = 0;
    let alreadyChecked = false;
    for (let j = 0; j < strsplit.length; j++) {
        if (strsplit[i] === strsplit[j]) {
            counter++;
        }
    }
    // Check whether we already printed this word
    for (let k = 0; k < i; k++) {
        if (strsplit[i] === strsplit[k]) {
            alreadyChecked = true;
            break;
        }
    }
    // if (counter==1) {
    //     console.log(strsplit[i])   // print non duplicate words
    // }

    if (counter > 1 && !alreadyChecked) { //print duplicate words but once
        console.log(strsplit[i])
    }
}

//print last non repetative character in a string
const strr = "swiss"

for(let i = strr.length-1;i>=0;i--){

    let counter = 0;

    for(let j = 0;j<strr.length;j++){

        if(strr[i]===strr[j]){
            counter++
        }
    }
    if(counter==1){
        console.log(strr[i])
        break;
    }
}

//find largest and second largest

let d = [24,56,67,97,44,77]

let largest = -Infinity; ////Any normal number is greater than -Infinity. -Infinity is smaller than every finite number
let secondlargest = -Infinity;

for(let i = 0;i<d.length;i++){

    if(d[i]>largest){
        secondlargest = largest
        largest = d[i]
    }
    else if(d[i]>secondlargest && d[i]!==largest){
        secondlargest = d[i]
    }
}

console.log(largest)
console.log(secondlargest)

//find smallest and second smallest

let e = [24,56,67,97,44,77]

let smallest = Infinity;  //Infinity is larger than every finite number
let secondsmallest = Infinity;

for(let i = 0;i<e.length;i++){

    if(e[i]<smallest){
        secondsmallest = smallest
        smallest = e[i]
    }
    else if(e[i]<secondsmallest && e[i]!==smallest){
        smallest = e[i]
    }
}

console.log(smallest)
console.log(secondsmallest)

//Remove Duplicate Characters from a String
let strrr = "banana"

let resultt = "";

for(let i = 0;i<strrr.length;i++){
    let counter = 0
    for(let j = 0;j<resultt.length;j++){
        
        if(strrr[i]===resultt[j]){
            counter++
            break
        }
        
    }
    if(counter==0)
        resultt = resultt +str[i];
   
}

console.log(resultt) //ban

//Find the Missing Numbers in a Consecutive Sequence
let aa = [1,4,5,7,9]

for(let i = 1;i<aa.length;i++){

    for(let x = aa[i - 1] + 1; x < aa[i]; x++){

        console.log(x) //2368
    }
}

//2nd menthoid
for(let i = 0;i<aa.length;i++){

    let current = aa[i];
    let next = aa[i+1];

    if(next-current>1){

        for(let j = current+1;j<next;j++){
            console.log(j) //2368
        }
    }
}

//Extract all Integers from a String
const string1 = "he33llo 42"
let res = "";
const resulttt = [];

for(let i = 0;i<=string1.length;i++){

    if(string1[i]>="0" && string1[i]<="9"){  //Is the current character between "0" and "9"

        res = res + string1[i]
       
    }else{
        if(res!=""){
            resulttt.push(Number(res));
            res = ""
        }
    }  
}
if (res !== "") {
    resulttt.push(Number(string));
}

console.log(resulttt) // [33, 42]

//Find all Repeated Characters in a String with its Count
const strrrr = "assessment"

for(let i = 0;i<strrrr.length;i++){
 let count = 0;
let alreadyChecked = false;
    for(let j = 0;j<strrrr.length;j++){

        if(strrrr[i]===strrrr[j]){

            count++
        }
    }

     for (let k = 0; k < i; k++) {
        if (strrrr[i] === strrrr[k]) {
            alreadyChecked = true;
            break;
        }
    }

    if (count > 1 && !alreadyChecked) { //print only the repretated character with theior counrt - s4,e2
        console.log(strrrr[i] + " → " + count);
    }

    //  if ( !alreadyChecked) { // print all characters with their count - a1,s4,e2,m1,n1,t1
    //     console.log(strrrr[i] + " → " + count);
    // }
   
}

//Reverse Each Word in a String
let str21 = "Hello World"
let combine = "";
let final = str21.split(" ");
let result21 = ""

for(let i = 0;i<final.length;i++){
    let x = final[i]
    for(let j= x.length-1;j>=0;j--){

        combine = combine + x[j];
    }
    result21 = result21 +" "+combine
    combine = "";
}

console.log(result21) //olleH dlroW

