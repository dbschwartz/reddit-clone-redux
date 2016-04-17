// sample angular code

var app = angular.module('redditclone', ['angularMoment']);

app.controller('redditcontroller', function($scope){
  $scope.newPost = false;
  $scope.showComments = false;
  $scope.newComment = false;


  $scope.toggleNewPost = function(){
       $scope.newPost = $scope.newPost === false ? true: false;
  };

  $scope.addPost = function(post) {
    post.timeStamp = new Date();
    $scope.postList.push(post);
    $scope.post = {}; // initialize the form to empty object 
    $scope.newPost = false;

  };

  $scope.toggleComments = function(){
       $scope.showComments = $scope.showComments === false ? true: false;
  };

  $scope.toggleNewComment = function(){
       $scope.newComment = $scope.showComments === false ? true: false;
  };

  $scope.addComments = function(){
       $scope.showComments = $scope.showComments === false ? true: false;
  };

  $scope.addComment = function(post, comment) {
    comment.timeStamp = new Date();
    post.comments.push(comment);
    post.comment = {}; // initialize the form to empty object 
    post.newComment = false;


  };

   $scope.voteUp = function(){
      $scope.vote +=1;
    };


  $scope.voteDown = function(){
       this.vote -=1;
  };
/*
app.controller("CommentsController", function(){
    this.comment={};
    this.addComment = function(post){
      post.comment.push(this.comment);
        this.comment={};
    };
  });
*/

  $scope.defaultImage = "http://placehold.it/350x150";
  $scope.postList = [
    { image: 'images/Mordor.png',
      name: 'Mordor',
      vote: 5,
      description: "blah blah blah blah",
      author: "CoolMon",
      comments:[
      {author:"cool",
       description:"looksgreat"
      }],
      timeStamp : new Date(),
      showComments: false,
      newComment: false
    },
    { image: 'https://i.ytimg.com/vi/exfgVvJcjtc/maxresdefault.jpg',
      name: 'River Styx',
      vote: 2,
      description: "No one escapes the cold grip of death!",
      author: "GrimReap",
      comments: [],
      timeStamp : new Date(),
      showComments: false,
      newComment: false
    },
    { image: 'http://images4.fanpop.com/image/photos/16500000/Butters-in-Imaginationland-butters-16557076-1032-768.jpg',
      name: 'Imagination Land',
      vote: 4,
      description: 'Never underestimate the awesomeness of the mind!',
      author: "Cart Man",
      comments: [],
      timeStamp : new Date(),
      showComments: false,
      newComment: false
    }
  ];  
  
});
