const express = require('express');

const app = express();

const favouriteBooks = [
	'Golden Son',
	'The Hero of Ages',
	'The Hitchhiker\'s Guide to the Galaxy'
];

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/multiply/:x/:y', (req, res) => {
	res.send(`${req.params.x * req.params.y}`);
});

app.get('/books', (req, res) => {
	favouriteBooks.forEach(book => {
		if (book === favouriteBooks[req.query.index]) res.send(book);
	});

	// the below didn't work
	// if (favouriteBooks[req.query.index] === true) {
	// 	res.send(favouriteBooks[req.query.index]);
	// } else {
	// 	res.send(favouriteBooks);
	// }
});



app.listen(3000, () => {
	console.log('app listening on port 3000');
});