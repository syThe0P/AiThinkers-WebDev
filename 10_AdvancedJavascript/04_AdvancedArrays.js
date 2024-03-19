//Advanced Arrays 
const array = [1,2,10,16];
const double =[];

const newArray = array.forEach((num)=>{
    double.push(num * 2);
})

//To avoid this we use map method




  //Map method -- basically this return the array after some changes in the orignal array for example ->

  const array1 = [1,2,3,4,5,6,7,8,9,10];

  let newArray1 = array.map((val) => val*10).map((val) => val + 10);
  console.log(newArray1);



  //Filter method -- this basically return the subarray from the given array according to the conditions for example below->

const number = myNum.filter((num) => {
    return num > 2;
});
console.log(number);


//Reduce -- it s a higher-order array function that is used to reduce an array to a single value. It iterates over each element of the array, applying a callback function to combine the current element with the previous result.
//Accumulator -- accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

