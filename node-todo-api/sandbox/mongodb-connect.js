// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {   
        return console.log('Unable to connect to mongoDB server...');
    }
    console.log('Connected to MongoDb server!');

    // insert document into Users collection (name, age, location)
    // Use insertOne, print new document to console

    // db.collection('Users').insertOne({
    //     name: 'Dayna Blackwell',
    //     age: 35,
    //     location: 'Mesa, Az'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user..', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }), (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo..', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // }
    


    db.close();
});