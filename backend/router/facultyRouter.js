// const mongoose = require('mongoose')
const express = require('express')
const facultyModel = require('../models/faculty')

const router = express.Router()





router.post('/register', async (req, res) => {
    const data = req.body;
    await facultyModel.findOne({"email":data.email})
    .then(response => {
        if (response == null) {
                let facultyData = new facultyModel(data);
            facultyData.save();
                res.status(200).json(response)
            }
            else
                throw new Error("Faculty Already Registered!!!")
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

// router.post('/register', async (req, res) => {
//     const data = req.body

//     const facultyData = new facultyModel(data)
//     facultyData.save()
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(err => {
//             res.status(400).json(err)
//         })
// })

router.post('/get_faculty_details', async (req, res) => {
    const { id } = req.body
    await facultyModel.find({ "blockName": id })
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.post('/delete', async (req, res) => {
    const data = req.body
    console.log(data);
    try {
        await facultyModel.delete({"email": data})
            .then(response => {
                res.status(200).json(response)
            })
    }
    catch (err) {
        res.status(400).json(err)
    }
})

// router.get('/get_all', async (req, res) => {
//     await facultyModel.find({})
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(err => {
//             res.status(400).json(err)
//         })
// })

module.exports = router
