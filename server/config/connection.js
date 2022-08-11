// imports the mongoose module to connect with mongoDB
const mongoose = require('mongoose');

// establishes a connecction with mongoDB
mongoose.connect(
    // mongodb://localhost/{unique name}
  process.env.MONGODB_URI || 'mongodb://localhost/example',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;