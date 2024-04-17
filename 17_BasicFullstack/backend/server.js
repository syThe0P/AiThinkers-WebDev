import express from 'express';

const port = 3000;

const app = express();

app.get('/',(req,res) =>{
    res.send('helo')
})

app.get('/api/jokes',(req,res) =>{
    const jokes = [
        {
            id: 1,
            title: 'First Joke',
            content: "It is a joke"
        },
        {
            id: 2,
            title: 'second Joke',
            content: "It is a second joke"
        },
        {
            id: 3,
            title: 'third Joke',
            content: "It is a third joke"
        },
        {
            id: 4,
            title: 'Fourt Joke',
            content: "It is a  fourth joke"
        },
        {
            id: 5,
            title: 'Fifth Joke',
            content: "It is a fifth joke"
        }
    ]

    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Example app listening on port`);
  });
  
