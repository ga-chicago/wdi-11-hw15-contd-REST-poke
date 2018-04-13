//We need Express lib to use router
const express = require('express');
//instantiate router from Router Method in express lib
const router = express.Router();

//require the pokemon.js in models that represents our database
const pokemon = require('../models/pokemon');



//Index Route with A list of Pokemon
router.get('/', (req, res)=>{
	res.render('index.ejs', {
		heading: 'Welcome To The Pokemon Index!',
		thePokemon: pokemon 
	})
});







































//Export routers to any files that are requiring this file
module.exports = router;