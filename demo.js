
const students = [
    {test1:50,
        test2:20,
        test3:80,
        test4:60
    },
    {test5:50,
        test6:20,
        test7:80,
        test8:60
    }
]


//console.log(Object.values(students[0]))

// Object.keys(students[0]).forEach(value=>console.log(value))

// console.log(Object.keys(students[0]).filter(key=>key!=="test3"))

// Object.keys(students[0]).filter(key=>key!=="test3").forEach(value=>console.log(value))


//students.forEach(value=>console.log(Object.keys(value).filter(a=>a!=="test3" && a!=="test8")))

for(let i = 0;i<students.length;i++){

    console.log(Object.keys(students[i]))

    for(let j = 0;j<students[i].length;j++){
        console.log(Object.keys(students[i]))
    }
}