
const validator = require('validator')
const mongoose = require('mongoose')
const { ModuleResolutionKind } = require('typescript')

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.suyhx.mongodb.net/sample_weatherdata', {
    useNewUrlParser: true//,useCreateIndex: true
})
const User2 = mongoose.model('User2', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    }
})

module.exports = User2