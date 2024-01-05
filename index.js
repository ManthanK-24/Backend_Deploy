require('dotenv').config()
const express = require('express')
const app = express()


// const port = 4000

const jsonData = {
    "Name":"Manthan",
    "Profession":"Rockstar Engineer"
}

app.get('/', (req, resp) => {
  resp.send('Hello World!') // Callback
})

app.get('/twitter',(req,resp)=>{
     resp.send('manthan@twitter');
})
app.get('/json',(req,resp)=>{
    resp.json(jsonData)
})
app.get('/about',(req,resp)=>{
    resp.send('<h2>Rockstar Engineer - Manthan </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})