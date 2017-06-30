'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');

const {app, runServer, closeServer} = require('../server');

const should = chai.should();

chai.use(chaiHttp);

//Begin Test Area

describe('Blog Post', function() {

  before(function() {
    return runServer();
  });

  after(function(){
    return closeServer();
  });

  //Elements of a blog post: 
      
  // const post = {
  // id: uuid.v4(),
  // title: title,
  // content: content,
  // author: author,
  // publishDate: publishDate || Date.now()

  //GET Test
  //it
  it('Should post a blog article on GET', function() {
    return chai.request(app)
      .get('/blog-posts')
      .then(function(res){
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');

        //Maybe add id to expectedKeys
        const expectedKeys = ['title', 'content', 'author', 'publishDate'];
        res.body.forEach(function(item){
          item.should.be.a('object');
          item.should.include.keys(expectedKeys);
        });
      });
  });

  //Post Test
  //it
  it('should add a new blog post on POST', function() {
    const newBlogPost = {title: 'Juicy Post', content: 'Some content', author: 'Super Author', publishDate: '1922 January 1'};
    
  });

  //Put Test 
  //it

  //Delete Test
  //it

});