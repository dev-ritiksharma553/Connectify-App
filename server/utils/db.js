const mongoose = require('mongoose');

const mongoDb = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://ritik9896714965:k1U8YZ0rcdtcwZSV@cluster0.0ig178f.mongodb.net/');
        console.log('Db is Connected');
    } catch (error) {
        console.log(`error: ${error}`);
    }
}
module.exports = mongoDb;
