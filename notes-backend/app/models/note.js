var mongoose = require('mongoose');

// define the schema for our note model
var noteSchema = mongoose.Schema({
  description: String,
  createdDate: String,
  author: { type: String, trim: true },
});

// create the model and expose it to our app
module.exports = mongoose.model('Note', noteSchema);
