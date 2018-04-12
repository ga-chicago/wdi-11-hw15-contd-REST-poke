const express = require('express');
const router = express.Router();

const Pokemon = require("../models/pokemon");

// *** index route ***

router.get('/', (req, res) => {
	res.render('index.ejs', {
		thePokemon: Pokemon
	})
})



// *** edit route ***

// *** new route ***

// *** show route ***

module.exports = router;