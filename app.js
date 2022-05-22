require('dotenv').config()
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();


app.get('/',(req, res)=>{
    res.status(200)
    .send("<h1>Mini app</h1>")
})

app.listen(PORT,()=>{
    console.log(PORT);
})