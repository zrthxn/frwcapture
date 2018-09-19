const express = require('express');
const hbs = require('express-handlebars');
const PORT = 3000 || process.env.PORT;

const capture = express();
capture.listen(PORT);

capture.get('/', (req,res)=>{
    res.send("HELLO");
});