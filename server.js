const express = require('express');
const app = express();
const port = 3000;
const pokemonController = require('./controllers/pokemonController');







































app.listen(port, ()=>{
	console.log(`Server is listening on port ${port} ...`);
})