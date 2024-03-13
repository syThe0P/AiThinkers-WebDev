//For loop

//For loop


//This will print number from 1 to 10
for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log(element);
    
}


//Print multiplication table of 9

for (let i = 1; i <= 10; i++){
    // console.log(`9 * ${i} = ${9*i}`);
}


//Loop through arrays
const array = ["Super man", "Bat man", "Spider Man", "Flash"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}

//Break and continue statements

//break
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is detected");          //this will break out of this loop the moment it hit 5
        break;
    }
    console.log(i);
    
}   


//continue
for (let i = 0; i <= 10; i++) {
    if(i == 5){
        console.log("5 is detected");          //this will continue the statement and give one more channce even if it hit 5
        continue
    }
    console.log(i);
    
}   



//While loop

let i = 0;
while (i<=10) {
    // console.log(`The value is ${i}`);
    i++;
}


//While loops in array
const myArray = ["Superman","Batman", "flash"];
let index = 0;
while (index < myArray.length) {
    // console.log(`Value is ${myArray[index]}`)
    index++;
}


//do while loop
let score = 1;
do {
    console.log(`The score is ${score}`);
    score++;
} while (score <=10);

//But what if the score is 11 from starting
let score1 = 11;
do {
    console.log(`The score is ${score1}`);           //The code will still execute, so difference between while loop and do while loop is in do-while loop even if the condition in not satisfied even from the start the code will still execute once
    score++;
} while (score1 <=10);



//******************************************* For of loop ********************************************


//array
// const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

// //string
// const greeting = "Hello world!!";
// for (const greet of greeting) {
//     console.log(greet);
// }

// //map

// const map = new Map();
// map.set('IN' ,"India")
// map.set('USA' ,"United States of america")
// map.set('FR' ,"France")
// map.set('UK' ,"United Kingdom")


// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }
// //object  -> for off loop can be applied in objects

// const obj = {
//     IN : "India",
//     UK : "Unoted Kingdom"
// }

// for (const [key, value] of obj) {
//     console.log(`${key} :- ${value}`);
// }


//******************************************* For in loop ********************************************

// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }




//******************************************* For each loop ********************************************


const arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
    console.log(val);
})


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )




const myNum = [1,2,3,4,5,6];


// const number = myNum.forEach( (item) =>{
//     console.log(item);
// } )

// console.log(number); //This will give a result output of undefined because forEach loop doesnot return any thing

//for that we use filter or map methods


//Filter method -- this basically return the subarray from the given array according to the conditions for example below->

const number = myNum.filter((num) => {
    return num > 2;
});
console.log(number);


//Another example
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //If we want to access all the books with genre history

  let myBooks = books.filter ((bk) =>{
    return bk.genre === "History";
  })

  console.log(myBooks);


  //Map method -- basically this return the array after some changes in the orignal array for example ->

  const array1 = [1,2,3,4,5,6,7,8,9,10];

  let newArray = array.map((val) => val*10).map((val) => val + 10);
  console.log(newArray);