//GET and POST go to blog-posts
//DELETE and PUT go to blog-posts id
const express = require('express');

const morgan = require('morgan');

const bodyParser = require('body-parser');





const {BlogPosts} = require('./model');



const jsonParser = bodyParser.json();
const app = express();

app.use(morgan('common'));


console.log('server is working');


//(title, content, author, publishDate)
BlogPosts.create('test title', 'some title', 'some author', 'some date');




//GET

app.get('/blog-posts', (req, res) => {
  res.json(BlogPosts.get());
});







//POST

app.post('/blog-posts', jsonParser, (req, res) => {
	const requiredFields = ['title', 'content', 'author', 'publishDate'];
	for (let i = 0; i <requiredFields.length; i++) {
		const field = requiredFields[i];
		if (!(field in req.body)) {
			const message = `You are missing \`${field}\` in request body`
			console.error(message);
			return res.status(400).send(message);
		}
	}
	const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
	res.status(201).json(item);
});







//DELETE






//PUT






//listen
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});