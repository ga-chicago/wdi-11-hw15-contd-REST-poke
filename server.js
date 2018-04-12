const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 3000;

const pokemonController = require('./controllers/PokemonController');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

//use pokemon controller
app.use('/pokemon',pokemonController);

app.get('/',(req,res) => {
	res.send('Welcome to the Pokedex.');
})

//listen to port 3000
app.listen(PORT,() => {
	console.log("Server is listening on port "+PORT);
})