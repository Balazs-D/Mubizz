// My mongoDB connection file
const mongoose = require('mongoose');
const config = require('config');
//get value from mongoURi
const db = config.get('mongoURI');

const mongoDb = process.env.MONGO_URI || db;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      createIndexes: true,
      useFindAndModify: false,
    });

    console.log('MongoDB Connected ...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
