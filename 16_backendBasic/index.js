const express = require('express');
const app = express();
require('dotenv').config()


const githubData = {
  "login": "syThe0P",
  "id": 77223852,
  "node_id": "MDQ6VXNlcjc3MjIzODUy",
  "avatar_url": "https://avatars.githubusercontent.com/u/77223852?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/syThe0P",
  "html_url": "https://github.com/syThe0P",
  "followers_url": "https://api.github.com/users/syThe0P/followers",
  "following_url": "https://api.github.com/users/syThe0P/following{/other_user}",
  "gists_url": "https://api.github.com/users/syThe0P/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/syThe0P/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/syThe0P/subscriptions",
  "organizations_url": "https://api.github.com/users/syThe0P/orgs",
  "repos_url": "https://api.github.com/users/syThe0P/repos",
  "events_url": "https://api.github.com/users/syThe0P/events{/privacy}",
  "received_events_url": "https://api.github.com/users/syThe0P/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Pranav Kumar",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2021-01-10T07:08:57Z",
  "updated_at": "2024-03-05T07:30:21Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Use app.use() to set up middleware or default configurations
app.get('/twitter', (req, res) => {
  res.send('My twitter');
});

app.get('/github', (req, res) =>{
  res.json(githubData);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port`);
});
