require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "blazox",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/blazox",
  "html_url": "https://github.com/blazox",
  "followers_url": "https://api.github.com/users/blazox/followers",
  "following_url": "https://api.github.com/users/blazox/following{/other_user}",
  "gists_url": "https://api.github.com/users/blazox/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/blazox/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/blazox/subscriptions",
  "organizations_url": "https://api.github.com/users/blazox/orgs",
  "repos_url": "https://api.github.com/users/blazox/repos",
  "events_url": "https://api.github.com/users/blazox/events{/privacy}",
  "received_events_url": "https://api.github.com/users/blazox/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "blazox",
  "company": null,
  "blog": "https://balzox.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I am blazox. Check that out",
  "twitter_username": "blazoxdotcom",
  "public_repos": 116,
  "public_gists": 5,
  "followers": 52899,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-12-10T16:57:39Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/status', (req, res)=>{
    res.send({status: "running", uptime: process.uptime()})
})

app.get('/blazox', (req, res) => {
    res.send('<h1>blazox</h1><p>Welcome, the blazox is live!</p>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
