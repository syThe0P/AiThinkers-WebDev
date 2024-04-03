// What is a promise ?

// A promise is an object that may produce a single value some time in the future
// either a resolved value, or a reason that it's not resolved

// earlier we use call back functions for example ->


// call back pyramid of doom

movePlayer(100, 'left' , function(){
    movePlayer(150, 'left', function(){
        movePlayer(10, 'right', function(){
            movePlayer(330, 'left', function(){

            })
        })
    })
})


//To avoid this pyramid of doom we use promises

movePlayer(100, 'left')
    .then(()=> movePlayer(400, 'left'))
    .then(()=> movePlayer(100, 'right'))
    .then(()=> movePlayer(250, 'right'))
    .then(()=> movePlayer(1909, 'left'))
    


const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})


promise.then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        throw Error;
        console.log(result3);
    })


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
}))