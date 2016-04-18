var express = require('express');
var router = express.Router();
var Post = require('../models/posts');

// GET ALL students
router.get('/', function(req, res, next) {
  Post.find({}, function(err, posts) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: posts
    });
  });
});

// GET single students
router.get('/:id', function(req, res, next) {
  var postID = req.params.id;
  Post.findById(postID, function(err, post) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: post
    });
  });
});

// add student
router.post('/', function(req, res, next) {
  var post = new Post(req.body);
  post.save()
  .then(function (post) {
    res.status(200).json({
      status: 'success',
      data: post
    });
  })
  .catch(function (err) {
    return next(err);
  });
});

// update student
router.put('/:id', function(req, res, next) {
  var postID = req.params.id;
  Post.findByIdAndUpdate(studentID, req.body, {new: true},
    function(err, post) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: post
    });
  });
});

// remove student
router.delete('/:id', function(req, res, next) {
  var postID = req.params.id;
  Post.findByIdAndRemove(postID, function(err, post) {
    if(err) {
      return next(err);
    }
    res.status(200).json({
      status: 'success',
      data: post
    });
  });
});


module.exports = router;
