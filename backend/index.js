const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('htt');
//     console.log('db connected')
// }

const server = express();

server.use(cors());
server.use(bodyParser.json());


server.get('/', async (req, res) => {
    res.send("hello");
})

server.listen(8080, () => {
    console.log('server started')
})
