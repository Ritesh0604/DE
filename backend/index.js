const express = require("express")
const connect = require('./connect.js')
const adminRouter = require('./router/adminRouter.js')
const facultyRouter = require('./router/facultyRouter.js')

const cors = require('cors')
const app = express()

// app.use(cors())
app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json())

app.use('/admin', adminRouter)
app.use('/faculty', facultyRouter)

app.listen(5000)
