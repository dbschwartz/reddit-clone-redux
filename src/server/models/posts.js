var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  vote: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  comments: {
    type: Array
  },
  timeStamp: {
    type: Date,
    required: true
  },
  showComments: {
    type: Boolean,
    default: false
  },
  newComment: {
    type: Boolean,
    default: false
  }
});

var Post = mongoose.model('post', PostSchema);


module.exports = Post;