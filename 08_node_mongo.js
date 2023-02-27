//const mongodb = require('mongodb')
//ObjectID = mongodb.ObjectId
//const MC = mongodb.MongoClient

//instead of above 3 lines, we can destructure the mongodb as below:

//instead of hardcoding as below, we can have a config file with name value params and use that. to use, we need 'env-cmd ./config/dev.env'
//we can also add such a thing in scripts like 
//dev env-cmd ./config/dev.env nodemon src/index.js 
//this way when we do npm dev, it will load the dev environment automatically.

const {MongoClient, ObjectId} = require('mongodb')  //require returns mongodb object and then we destructure that object to get the fields we need

const connURL = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.suyhx.mongodb.net/'
const dbName =  'sample_weatherdata'

MongoClient.connect(connURL, {useNewURLParser: true}, (error, client) => {
    if(error) {
        console.log('couldnt connect to DB')
    } else {
        console.log('connected to DB')
        const db = client.db(dbName)
        console.log('using DB', dbName)

        db.collection('user').insertOne({
            name:'Karthik2', age:37 //, _id: new ObjectId('61f22e1e6caf02dedada97ad')  //we can also create our own ObjectId using this
        }, (error, result) => {
            if(error) {
                console.error('couldnt insert!', error) 
            } else {
                console.log('inserted; result', result)
            }
        })
        console.log('inserted user')

        db.collection('user').findOne({ _id: new ObjectId("5c1113239cbfe605241f9071") }, (error, user) => {
            if (error) {
                return console.log('Unable to fetch')
            }

            console.log(user)
        })

        db.collection('user').find({ age: 37 }).toArray((error, users) => {
            console.log(users)
        })

        db.collection('user').findOne({ _id: new ObjectId("61f22e1e6caf02dedada97ac") }, (error, task) => {
            console.log(task)
        })


        //MongoDB has nice support for promises

        db.collection('users').insertOne({
            name:'Karthik2', age:37 
        }, (error, result) => {
            if(error) {
                console.error('couldnt insert!', error) 
            } else {
                console.log('inserted; result', result)
            }
        })        

    
        db.collection('users').updateOne({
            _id: new ObjectId("5c0fe6634362c1fb75b9d6b5")
        }, {
            $inc: {
                age: 1
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })


        
        db.collection('users').updateMany({
            complex: 'haha'
        }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })        

        db.collection('users222').updateMany({ //we dont have such collection
            complex: 'haha'
        }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })        

    }

})


/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js.
Using mongoose , a user can define the schema for the documents in a particular collection. It provides a lot of convenience in the creation and management of data in MongoDB. On the downside, learning mongoose can take some time, and has some limitations in handling schemas that are quite complex.


If your coming from SQL, it's similar to an ORM for a relational database.

Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Express web application framework.

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

There are few reasons not to use Mongoose with MongoDB (especially if you are just getting started). For more advanced queries, it can be argued that Mongoose makes things more difficult and can slow performance. Advocates of the native MongoDB driver also argue that bringing ODM to a denormalized design entirely defeats the purpose of a NoSQL database.


*/

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.suyhx.mongodb.net/'+dbName);

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('kitty saved; meow'));