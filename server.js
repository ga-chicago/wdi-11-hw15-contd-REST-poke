const express = require('express'); // note syntax for module
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// app.get('/greeting/', (req, res) => {
// 	res.send('Hello')
// });
//our data
//syntax for requirering file must start with ./


const pokemonController = require('./controllers/pokemoncontrollers');

///MIDDLEWARE
///you app.use middleware
//next will continue
app.use((req, res, next) => {
	// console.log("I am middleware and will run for the routes")
	next();
})

//we are usin body-parser
//it will let us see the form 
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))


///this will let us include static assets (imgs, css/ less)
app.use(express.static('public'))
//When a request comes that starts with / fruits including anithing after
app.use('/pokemon', pokemonController);











app.listen(3000,() => {
	console.log("Server is listening on Port 3000");
})
