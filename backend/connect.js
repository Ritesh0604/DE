const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Ritesh0631:Ritesh@cluster0.ql9jx1h.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})
const conn = mongoose.connection

conn.on('connected', function () {
    console.log('Database connected')
})
conn.on('disconnected', function () {
    console.log('MongoDB disconnected')
})
conn.on('error', console.error.bind(console))
module.exports = conn
