//Require Express lib to use server
const express = require('express');
//instantiate app object
const app = express();
//port we will be using
const port = 3000;
//require the pokemon Controller with all the routes for /pokemon
const pokemonController = require('./controllers/pokemonController');
//Middleware we will need
app.use((req,res,next)=>{
	console.log('Middleware is working...');
	next();
})
//We need middleware to parse data from POST request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
//We need middleware to allow static pages to function (CSS, Images, JS, etc...)
app.use(express.static('public'));
//We need middleware for PUT and DELETE methods
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
































//Any request made to this route will use pokemonController
app.use('/pokemon', pokemonController);


//List for requests on port 3000
app.listen(port, ()=>{
	console.log(`Server is listening on port ${port} ...`);
})