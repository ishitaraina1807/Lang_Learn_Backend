const mongoose = require('mongoose');

const mongoURI  = "mongodb+srv://ishitaraina18:nFWwSF5NWN1Md40Q@cluster0.jcrigph.mongodb.net/";   

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
