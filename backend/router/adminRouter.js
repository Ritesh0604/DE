// const mongoose = require('mongoose')
const express = require('express')
const adminModel = require('../models/Admin')

const router = express.Router()

router.post('/login', async (req, res) => {
    const data = req.body
    console.log(data);
    await adminModel.findOne(data)
        .then(response => {
            if (response != null)
                res.status(200).json("Valid admin credential")
            else
                throw new Error("Invalid crendential")
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router
