const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.suyhx.mongodb.net/sample_weatherdata', {
    useNewUrlParser: true//,useCreateIndex: true
})

const User = mongoose.model('Usersnew', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({
    name: 'Andrew',
     age: 37 //age: 'Mike' will fail validation if we dont give number
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

//----------------//----------------//----------------//----------------//----------------//----------------

const validator = require('validator')

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

const me2 = new User2({
    name: '   Andrew  ',
    email: 'MYEMAIL@MEAD.IO   '
})

me2.save().then(() => {
    console.log(me2)
}).catch((error) => {
    console.log('Error!', error)
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})
//----------------//----------------//----------------//----------------//----------------//----------------


//----------------//----------------//----------------//----------------//----------------//----------------


//----------------//----------------//----------------//----------------//----------------//----------------


//----------------//----------------//----------------//----------------//----------------//----------------


//----------------//----------------//----------------//----------------//----------------//----------------


//----------------//----------------//----------------//----------------//----------------//----------------

