const express = require('express');
const app = express();
const path=require("path");
const cors = require('cors');

app.use(cors());
app.get('/api1', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'post.html'));
})


app.get('/serviceone', async (req, res) => {
    const res1 = await fetch('https://wikipedia.org');
    const json1 = await res1;
    console.log(json);
    res.status(200).json1;

})

console.log('hey there from serviceOne')
const PORT = process.env.PORT || 4000;
app.listen(PORT); 