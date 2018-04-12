const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// our data
// note the syntax for requiring file -- must start w/ "./"

const pokemonController = require('./controllers/PokemonController');

// MIDDLEWARE -- put this above routes/controllers
// you app.use middleware
// include some code to do a thing
// next will continue on to the route

// app.use((req, res, next) => {
// 	console.log("I am middleware and will be run for all routes. Thanks for stopping by!")	
// 	next();
// })

// we are USING the body-parser middleware
// it is a module that will let us see the form data in our POST requests
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
// this will let us include static assets (images/css/less/etc)
app.use(express.static('public'))

// when a request comes that starts with /fruits including anything after that
// use the FruitController
app.use('/pokemon', pokemonController);

app.listen(3000, () => {
	console.log("Server listening on port 3000");
})


