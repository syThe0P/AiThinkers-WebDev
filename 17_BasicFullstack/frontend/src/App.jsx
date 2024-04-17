import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios"

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    } )
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1>Chai aur full stack</h1>
      <h2>Jokes : {jokes.length}</h2>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h1>{joke.title}</h1>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
