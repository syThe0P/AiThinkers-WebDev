//call stack -> which hold all the functions or methods that are going to be executed
console.log(1);
console.log(2);
console.log(3);

//So these are syncronous task it will go one by one executed
//No if suppose second statement takes more time then statement one has to wait in the queue
//So to avoid these waiting time we use asyncronous functions for example ->

console.log(1);
setTimeout(()=>{
    console.log(2);
}, 2000);
console.log(3);

//Now 1 will execute then 3 will execute and 2 will execute after 2 seconds


//Javascript run time environment consists of

//Web apis, callback queue, event loop