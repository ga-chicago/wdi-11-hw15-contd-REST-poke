const express = require('express');
const router = express.Router();

//Our data, the model
//Model should always be upper case
const Pokemon = require('../models/pokemon');

class PokemonC {
	constructor(props) {
		this.id = props.id;
		this.name = props.name;
		this.img = props.img;
		this.type = [];
		for (let i = 0; i < 2; i++) {
			this.type.push(props["type"+i]);
		}
		this.misc = {
			height: props.height,
			weight: props.weight,
			classification: props.classification
		}
		this.stats = {
      		hp: props.hp,
      		attack: props.attack,
      		defense: props.defense,
  		}	
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
	Pokemon.push(new PokemonC(req.body));
	
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
	let pokemon = new PokemonC(req.body);
	console.log(req.body);
	Pokemon[req.params.id] = pokemon;
	console.log(Pokemon[req.params.id])
	res.redirect('/pokemon');
})

module.exports = router;