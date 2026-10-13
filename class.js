class person {

age = 25;

get location(){
    return "canada"
}

constructor(firstname,lastname){

    this.first = firstname;
    this.last = lastname;
}


}

let person1 = new person();
console.log(person1.age)
console.log(person1.location)

let person2 = new person("tim","david");

console.log(person2.first);