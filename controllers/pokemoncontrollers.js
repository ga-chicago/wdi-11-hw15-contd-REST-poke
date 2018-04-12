const express = require('express');
const router = express.Router();
//model should always be upper case
const Pokemon = require('../models/pokemon');






//render converts ejs to html
router.get('/', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

//this route will show template 

router.get('/new', (req, res) => {

	res.render('new.ejs')
})
router.get('/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.index],
		index: req.params.index

	})
})
router.get('/:id', (req, res) => {
	// you render templetas
	//you can pss in the data to display
	//your data will always be a n object
	//advice use singular 
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
})




///SHOW route- Show all info about one fruit


router.post('/', (req, res) => {
	console.log(req.body)
///add a new fruit
	const newPokemon = {
		name: req.body.name,
		type: req.body.type,
		img: req.body.img
	
	}
	// if(req.body.readyToEat == "on"){
	// 	newFruit.readyToEat === true;

	// }else newFruit.readyToEat = false;
	Pokemon.push(newPokemon)
	//redirect
	res.redirect('/pokemon')



	// res.send(req.body)
})
// console.log
router.delete('/:id', (req, res) => {
	console.log('delete')
	Pokemon.splice(req.params.id, 1);
	
	res.redirect('/pokemon')

})

router.put('/:id', (req,res) => {
	console.log(req.body)
	const thePokemon = {};
		thePokemon.name = req.body.name;
		thePokemon.type = req.body.type;
		
	
	Pokemon[req.params.id] = thePokemon;
	// res.send('I got it')
	res.redirect('/pokemon')
})

































module.exports = router;