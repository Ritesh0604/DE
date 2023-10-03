const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://0.0.0.0:27017/schooldb');
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    email: String,
    fullName: String,
    blockName: String,
    time: String,
    notes: String,
});

const schooldb = mongoose.model('schooldb', userSchema);
const server = express();

server.use(cors());
server.use(bodyParser.json());

server.post('/demo', async (req, res) => {
    let user = new schooldb();
    user.email = req.body.email;
    user.fullName = req.body.fullName;
    user.blockName = req.body.blockName;
    user.time = req.body.time;
    user.notes = req.body.notes;
    let doc = null;
    const doesEmailExist = await user.findOne(req.body.email);
    if (doesEmailExist) {
        alert("duplicate user");
    } else {
        doc = await user.save();
    }

    console.log(doc);
    res.json(doc);
})
// server.response('/demo', async (req, res) => {
//     let user = new schooldb();
//     const doesEmailExist = await user.findOne(req.body.email);
//     if (doesEmailExist) {
//         alert("duplicate email found");
//     }
// })


// server.post('/demo', async (req, res) => {
//     console.log(req.body);
// })


server.listen(8080, () => {
    console.log('server started')
})
