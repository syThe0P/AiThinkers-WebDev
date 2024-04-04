//Using async awaait offers several advantages, particularly in improving code readability, simplification of asynchronous programing,
// and making error handling more intutive.

//this is promise
movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(100, "right"))
  .then(() => movePlayer(250, "right"))
  .then(() => movePlayer(1909, "left"));

//Async await

async function playerStart() {
  const firstMove = await movePlayer(100, "left");
  const secondMove = await movePlayer(100, "left");
  const thirdMove = await movePlayer(100, "left");
  const fourthMove = await movePlayer(100, "left");
}

//Promise

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);

//Async
async function fetchUser() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

//promise

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

//Promise take input off array and do some operation into it

Promise.all(
  urls.map((url) => {
    return fetch(url)
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result[0]);
        console.log(result[1]);
        console.log(result[2]);
      })
      .catch(() => console.log("error"));
  })
);

//Async
const urls1 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops!", err);
  }
};
