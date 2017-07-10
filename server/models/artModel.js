var mongoose = require('mongoose');

// Item in Art Portfolio Schema
var ArtItemSchema = mongoose.Schema({
  title : String,
  image_url : String,
  images : [],
  description : String,
  long_description : []
});

module.exports = mongoose.model('artItem', ArtSchema, 'artItems');
