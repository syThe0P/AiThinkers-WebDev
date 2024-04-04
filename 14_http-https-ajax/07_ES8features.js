//1. finally


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',

]

//Promise take input off array and do some operation into it

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json()).then(result => {
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
    }).catch(() => console.log('error'));
})).finally(()=> console.log('extra', data));

//This finally method runs after all promises are done executing wheather the run succesfully or have some rejected values but it will still run

//2. for await of - It will helps us to loop through multiple await promises

const urls2 = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
  ];
  

const getData2 = async function(){
    const arrayPromises = urls2.map(url => fetch(url));
    for await (let request of arrayPromises) {
        const data = await request.json();
        console.log(data);
    }
}


//3. We use Promise.all() so that multiple promises can run independently but in this all the promises should execute if one fails it will not execute
// so in place of Promise.all() we now use Promise.allSettled() here it will run no matter the errrors and resolve it will give a object telling about each promise whether it reolves or rejectd


