const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000;

const pokeController = require('./controllers/PokemonController');

app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use(express.static('public'));

app.use('/pokemon', pokeController);
















// LISTENER
app.listen(PORT, function() {
  console.log('PokeExpress running on port: ' + PORT);
})
