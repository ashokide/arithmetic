const { add, sub, mul, div } = require('./arithmetic.js');
const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())
app.use(cors())

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = add(a, b);
    res.json({ result });
})
app.post('/sub', (req, res) => {
    const { a, b } = req.body;
    const result = sub(a, b);
    res.json({ result });
})
app.post('/mul', (req, res) => {
    const { a, b } = req.body;
    const result = mul(a, b);
    res.json({ result });
})
app.post('/div', (req, res) => {
    const { a, b } = req.body;
    const result = div(a, b);
    res.json({ result });
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("Server Started On PORT : " + PORT);
})
