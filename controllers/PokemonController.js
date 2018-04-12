const express = require('express');
const router = express.Router();

const Pokemon = require("../models/pokemon");

// *** index route ***

router.get('/', (req, res) => {
	res.render('index.ejs', {
		thePokemon: Pokemon
	})
})

// *** new route ***

router.get('/new', (req, res) => {
	res.render('new.ejs') // rendering a template
})

// *** show route ***

router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		index: req.params.id
	})
})

// *** edit route ***

router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		index: req.params.id
	})
})


// *** post route ***

router.post('/', (req, res) => {

	// now that we have body-parser the data is available to us in req.body
	console.log(req.body);
		const newPokemon = {
			name: req.body.name,
			type: [req.body.type1, req.body.type2],
			hp: req.body.hp,
			attack: req.body.attack,
			defense: req.body.defense
		}
		console.log(newPokemon);
	Pokemon.push(newPokemon)
	// you can redirect the user in lieu of res.render or res.send
	res.redirect('/pokemon')
})

// *** delete route ***

router.delete('/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon');
})

// *** put route ***

router.put('/:id', (req, res) => {

	// if (req.body.type2) {
	// 	const editedPokemon = {
	// 		name: req.body.name,
	// 		type: [req.body.type1, req.body.type2],
	// 		hp: req.body.hp,
	// 		attack: req.body.attack,
	// 		defense: req.body.defense
	// 	}
	// } else {
		const editedPokemon = {
			name: req.body.name,
			type: [req.body.type1, req.body.type2],
			stats: { 
				hp: req.body.hp,
				attack: req.body.attack,
				defense: req.body.defense
			},
			img: Pokemon[req.params.id].img
		}
	// }

	Pokemon[req.params.id] = editedPokemon;
	// redirect to all the pokemon
	res.redirect('/pokemon')
})

// EXPORT
module.exports = router;