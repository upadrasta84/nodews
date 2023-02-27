const express = require('express')
const User2 = require('./10_mongoose_model')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User2(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User2.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    console.log('get users by id')
    try {
        const user = await User2.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
})

module.exports = router