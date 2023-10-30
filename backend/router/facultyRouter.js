// const mongoose = require('mongoose')
const express = require('express')
const facultyModel = require('../models/faculty')

const router = express.Router()





router.post('/register', async (req, res) => {
    const data = req.body;
    await facultyModel.findOne({ "email": data.email })
        .then(response => {
            if (response == null) {
                // alert(response);
                let facultyData = new facultyModel(data);
                facultyData.save();
                res.status(200).json(response)
            } else {
                throw new Error("Faculty Already Registered!!!")
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })

})

router.patch('/editdetail', async (req, res) => {
    const data = req.body;
    let response=null;
    const facultyData = await facultyModel.findOne({ "email": data.email });
    if (facultyData != null) {
        if (data.fullName !== undefined)
            facultyData.fullName = data.fullName;
        if (data.blockName !== undefined)
            facultyData.blockName = data.blockName;
        if (data.time !== undefined)
            facultyData.time = data.time;
        if (data.notes !== undefined)
            facultyData.notes = data.notes;
        response = await facultyData.save();
        res.json({ data: response, msg: "updated successfully", rcode: 200 });
    } else {
        res.status(400).json("cant change email")
    }

    // console.log(response);
    // if (response.ok) {
    //     res.json({ data: response, msg: "updated successfully", rcode: 200 });
    // } else {
    //     res.json({ msg: 'Error in updating', rcode: 400 });
    // }
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
    const data = req.body.email
    console.log(data);
    try {
        await facultyModel.deleteOne({ "email": data })
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
