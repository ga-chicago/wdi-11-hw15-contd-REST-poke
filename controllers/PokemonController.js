const express = require('express');
const router = express.Router();

const Pokemon = require("../models/pokemon");

// *** index route ***

router.get('/', (req, res) => {
	res.render('index.ejs', {
		thePokemon: Pokemon
	})
})

// *** show route ***

router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
})

// *** edit route ***

router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		index: req.params.id
	})
})

// *** new route ***

router.get('/new', (req, res) => {
	res.render('new.ejs') // rendering a template
})

// *** post route ***

// *** delete route ***

// *** put route ***

module.exports = router;