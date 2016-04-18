process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../src/server/app');
var should = chai.should();
var testUtilities = require('../utilities');
var testSeed = require('../../src/server/models/seeds/test-seed');
var Post = require('../../src/server/models/posts');

chai.use(chaiHttp);


describe('post routes', function() {


  beforeEach(function(done) {
    // drop db
    testUtilities.dropDatabase();
    testSeed.runSeed(done);
  });

  afterEach(function(done) {
    // drop db
    testUtilities.dropDatabase(done);
  });

  describe('/GET students', function() {
    xit('should return all students', function(done) {
      chai.request(server)
      .get('/students')
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('array');
        res.body.data.length.should.equal(1);
        res.body.data[0].firstName.should.equal('Kevin');
        res.body.data[0].lastName.should.equal('Schwartz');
        res.body.data[0].year.should.equal(2001);
        done();
      });
    });
  });

  describe('/GET students/:id', function() {
    xit('should return a single student', function(done) {
      Student.findOne(function(err, student) {
        var studentID = student._id;
        chai.request(server)
        .get('/students/'+studentID)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('object');
          res.body.data.firstName.should.equal('Kevin');
          res.body.data.lastName.should.equal('Schwartz');
          res.body.data.year.should.equal(2001);
          done();
        });
      });
    });
  });

  describe('/POST students', function() {
    it('should create a new student', function(done) {
      chai.request(server)
      .post('/posts')
      .send({
      image: 'http://placehold.it/350x150',
      name: 'Random',
      vote: 4,
      description: 'test',
      author: "Cart Man",
      comments: [],
      timeStamp : new Date
    })
      .end(function(err, res) {
        res.status.should.equal(200);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        res.body.status.should.equal('success');
        res.body.data.should.be.a('object');
        res.body.data.image.should.equal('http://placehold.it/350x150');
        res.body.data.name.should.equal('Random');
        res.body.data.description.should.equal('test');
        done();
      });
    });
  });

  describe('/PUT students/:id', function() {
    xit('should return a single student', function(done) {
      Student.findOne(function(err, student) {
        var studentID = student._id;
        chai.request(server)
        .put('/students/'+studentID)
        .send({firstName: 'Tyler'})
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('object');
          res.body.data.firstName.should.equal('Tyler');
          res.body.data.lastName.should.equal('Schwartz');
          res.body.data.year.should.equal(2001);
          done();
        });
      });
    });
  });

  describe('/DELETE students/:id', function() {
    xit('should delete a student', function(done) {
      Student.findOne(function(err, student) {
        var studentID = student._id;
        chai.request(server)
        .delete('/students/'+studentID)
        .end(function(err, res) {
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.should.be.a('object');
          res.body.should.have.property('status');
          res.body.should.have.property('data');
          res.body.status.should.equal('success');
          res.body.data.should.be.a('object');
          res.body.data.firstName.should.equal('Kevin');
          res.body.data.lastName.should.equal('Schwartz');
          res.body.data.year.should.equal(2001);
          done();
        });
      });
    });
    xit('should not delete a student when there is an error', function(done) {
      chai.request(server)
      .delete('/students/1')
      .end(function(err, res) {
        res.status.should.equal(500);
        res.type.should.equal('application/json');
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.should.have.property('error');
        res.body.message.should.equal('Cast to ObjectId failed for value "1" at path "_id"');
        done();
      });
    });
  });

});