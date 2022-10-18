const express = require('express');
const app = express();
const path=require("path");
const cors = require('cors');

app.use(cors());

app.get('/api2', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'post.html'));
})

const PORT = process.env.PORT || 4001;
app.listen(PORT); 