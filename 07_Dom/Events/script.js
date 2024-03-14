// var btn = document.getElementsByTagName('button')[0];

// btn.addEventListener("click", ()=>{
//     console.log("Click hogya hai!!");
// })

const btn = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");

//Mouse event example
btn.addEventListener("click", () => {
  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Write something!!");
  }
});

//keyboard event example

input.addEventListener("keypress", (event) => {
  if (input.value.length > 0 && event.key === "Enter") {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  } else {
    alert("Write something!!");
  }
});
