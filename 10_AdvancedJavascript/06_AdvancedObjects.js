//Reference Type
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10}

// Now object 1 and object 2 are same because the have access to the same address/reference
//but object 3 have the same value as object 1 but they have different location of address theese are called pass by reference value 
//Object and arrays are non primitive datatypes and other are primitive dataypes

//context

const object4 = {
    a: function(){
        console.log(this);
    }
}

//So 'this' keyword refers to the current execution context

//For example ->
//1. Global context -> when use in global scope or outside any funcion 'this' refers to the global object. Which is window
console.log(this); // Logs the global object (e.g., window in a browser)


//2.Function Context -> Inside a function it may vary according to the function need




//Instantiation -> It is a process of creating a new instance of an object using a constructor so we dont have to make each and every object again and again


class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi i am ${this.name}, i;m a ${this.type}`);
    }
}

class Wizzard extends Player{
    constructor(name, type){
        super(name,type);
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);
    }

}

const wizard1 = new Wizard('Pranav', 'Fragger');
const wizard2 = new Wizard('Param', 'Healer');