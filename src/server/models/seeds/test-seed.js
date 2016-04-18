var Post = require('../posts');

var data = [
    { image: 'images/Mordor.png',
      name: 'Mordor',
      vote: 5,
      description: "blah blah blah blah",
      author: "CoolMon",
      comments:[
      {author:"cool",
       description:"looksgreat"
      }],
      timeStamp : new Date
    },
    { image: 'https://i.ytimg.com/vi/exfgVvJcjtc/maxresdefault.jpg',
      name: 'River Styx',
      vote: 2,
      description: "No one escapes the cold grip of death!",
      author: "GrimReap",
      comments: [],
      timeStamp : new Date
    },
    { image: 'http://images4.fanpop.com/image/photos/16500000/Butters-in-Imaginationland-butters-16557076-1032-768.jpg',
      name: 'Imagination Land',
      vote: 4,
      description: 'Never underestimate the awesomeness of the mind!',
      author: "Cart Man",
      comments: [],
      timeStamp : new Date
    }
  ];  

function runSeed(done) {
  var post = new Post(data[0]);
  post.save(function() {
    done();
  });
}


module.exports = {
  runSeed: runSeed
};