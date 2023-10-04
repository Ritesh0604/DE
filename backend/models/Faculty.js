const mongoose = require('mongoose')

const facultySchema = mongoose.Schema({
    email: {
        type: "String",
        require: true,
        unique: true
    },
    fullName: {
        type: "String",
        required: true
    },
    blockName: {
        type: "String",
        require:true,
    },
    time: {
        type: "String",
        require: true
    },
    notes: {
        type: "String",
        required: true
    }
})

const facultyModel = mongoose.model("faculty", facultySchema)

module.exports = facultyModel
