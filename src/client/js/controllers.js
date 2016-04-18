app.controller('allPostController', ['$scope', 'postService',
  function($scope, postService) {

  postService.getAllPosts()
    .then(function(posts) {
      $scope.allPosts = posts.data.data;
  });

}]);


app.controller('addPostController', ['$scope', '$window', 'postService',
  function($scope, $window, postService) {

  $scope.post = {};

  $scope.addPost = function() {
    postService.addPost($scope.post);
    $scope.post = {};
    $window.location.reload(); // refactor!
  };

}]);

app.controller('removePostController', ['$scope', '$window', 'postService',
  function($scope, $window, postService) {

  $scope.removePost = function(post) {
    postService.removePost(post._id);
    $window.location.reload(); // refactor!
  };

}]);

app.controller('editPostController', ['$scope', '$window', 'postService',
  function($scope, $window, postService) {

  $scope.show = false;

  $scope.makeEditable = function () {
    this.show = true;
  };

  $scope.editPost = function(post) {
    postService.editPost(post);
    this.show = false;
    $window.location.reload(); // refactor!
  };

}]);


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
app.controller('registerController', ['$scope', '$location', 'authService',
 function($scope, $location, authService) {
  $scope.user = {};
  $scope.register = function() {
    authService.register($scope.user)
      .then(function(user) {
        authService.setUserInfo(user);
        $location.path('/');
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
  };
}]);

app.controller('loginController', ['$rootScope', '$scope', '$location', 'authService',
  function($rootScope, $scope, $location, authService) {
  $scope.user = {};
  $scope.login = function() {
    authService.login($scope.user)
      .then(function(user) {
        authService.setUserInfo(user);
        $location.path('/');
        $rootScope.currentUser = authService.getUserInfo();
      })
      .catch(function(err) {
        // check status code, send appropriate message
        console.log(err);
      });
  };
}]);

app.controller('navController', ['$rootScope', '$scope', 'authService',
  function($rootScope, $scope, authService){
    $rootScope.currentUser = authService.getUserInfo();
}]);
