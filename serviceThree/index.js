const express = require('express');
const app = express();
const path=require("path");
const cors = require('cors');
const axios = require('axios');
app.get('/api3', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'post.html'));
})


const PORT = process.env.PORT || 4002;
app.listen(PORT); 
