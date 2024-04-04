//Onject spread Operator

const animal = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const {tiger, ...rest} = animals;

tiger //this will give me 23
rest // this will give me {lion: 5, monkey: 2};

//We can also do spread operator in arrays 

const array = [1,2,3,4,5];

function sum (a,b,c,d,e){
    return a+b+c+d+e;
}

sum(...array); //This will return the sum of array