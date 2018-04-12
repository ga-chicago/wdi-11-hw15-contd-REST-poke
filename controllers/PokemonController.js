const express = require('express');
const router = express.Router();

//Our data, the model
//Model should always be upper case
const Pokemon = require('../models/pokemon');

class PokemonC {
	constructor(name,color,readyToEat) {
		this.name = name;
		this.color = color;
		this.readyToEat = readyToEat;
	}
}

//Index route - this will list all the pokemon
router.get('/',(req,res) => {
	res.render('index.ejs',{
		pokemon: Pokemon
	})
})

router.get('/new',(req,res) => {
	res.render('new.ejs');
})

router.post('/',(req,res) => {
	let readyToEat = false;
	if (req.body.readyToEat === "on") {
		readyToEat = true;
	}

	Pokemon.push(new PokemonC(req.body.name,req.body.color,readyToEat));
	
	//You can redirect the user
	res.redirect("/pokemon");
	
})

//Edit route
router.get('/:id/edit',(req,res) => {
	res.render('edit.ejs',{
		pokemon: Pokemon[req.params.id],
		index: req.params.id
	})
})

//Show route - show all info about one particular pokemon
router.get('/:id',(req,res) => {

	//You "render" templates where you previously just sent data
	//the data you want to display in your template is the second parameter
	//your data will always be an object
	res.render('show.ejs',{
			pokemon: Pokemon[req.params.id]
		}
	);
})

router.delete('/:id',(req,res) => {
	Pokemon.splice(parseInt(req.params.id),1);
	res.redirect('/pokemon');
})

router.put('/:id',(req,res) => {
	let pokemon = req.body;
	if (pokemon.readyToEat === "on") {
		pokemon.readyToEat = true;
	}
	else {
		pokemon.readyToEat = false;
	}
	Pokemon[req.params.id] = pokemon;
	res.redirect('/pokemon');
})

module.exports = router;