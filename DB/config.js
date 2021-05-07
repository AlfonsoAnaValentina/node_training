const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Online Data Base Up & Running');
  } catch (error) {
    throw new Error('Error intiating Data Base',);
  }
};

module.exports = {
  dbConnection,
};