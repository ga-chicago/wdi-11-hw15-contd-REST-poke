const express = require('express');
const router = express.Router();

//we need to specify what data to require
//model should always be uppercase
const Pokemon = require('../models/pokemon')

//HOME route
router.get('/', (req, res) => {
  res.render('pokemon/home.ejs', {
    pokemon: Pokemon
  })
});

//INDEX route
router.get('/index', (req, res) => {
  res.render('pokemon/index.ejs', {
    pokemon: Pokemon //<--the data
  })
});


//NEW route ---
router.get('/new', (req, res) => {
  res.render('pokemon/new.ejs', {
    pokemon: Pokemon[req.params.id]
  })
});


//EDIT-GET route// to put edit page up
router.get('/:index/edit', (req, res) => {
  res.render('pokemon/edit.ejs', {
    pokemon: Pokemon[req.params.index],
    index: req.params.index
  })
})

//SHOW route
router.get('/:id', (req, res) => {
  res.render('pokemon/show.ejs', {
    pokemon: Pokemon[req.params.id]
  })
});


//POST route
//no id needed, because this is a new pokemon
router.post('/', (req, res) => {
  console.log(req.body);
//add a new object to our fruits array
//if req.body.readyToEat is on
  const newPokemon = {
      name: req.body.name,
      type: req.body.type,
      img: req.body.img
  }

  Pokemon.push(newPokemon);
  res.redirect('/pokemon/index')

});


//DELETE route
//delete using the index of data in model
router.delete('/:id', (req, res) => {
  Pokemon.splice(req.params.id, 1);
  res.redirect('/pokemon/index')
})


//UPDATE-PUT route
router.put('/:id', (req, res) => {
  console.log(req.body);
  const thePokemon = {};
    thePokemon.name = req.body.name,
    thePokemon.id = req.body.id,
    thePokemon.type = req.body.type,
    thePokemon.stats.hp = req.body.stats.hp;
    thePokemon.img = req.body.img;

  Pokemon[req.params.id] = thePokemon;

  res.redirect('/pokemon/index');
})



module.exports = router;
