/* Require external APIs and start our application instance */
var express = require('express');
var app = express();
var request = require('request');
var unirest = require("unirest");

/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');

/* The handler for the DEFAULT route */
app.get('/', function(req, res){
    res.render('home');
});

app.get("/impact", function(req, res){
  res.render('impact');
});

app.get("/spec", function(req, res){
  res.render('spec');
});

app.get("/reference", function(req, res){
res.render('reference');
});

app.get("/search", function(req, res){
res.render('search');
});

app.get('/results', function(req, res){
	
 //"edcb34ef5bmshba55af09343c5abp14a8f6jsn9755bce1a9f4"
//a3332e26ab961dcd71f9a96fb27cf7a1
//https://api-v3.igdb.com

/*
var query = req.query.search;
var options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games/' + query,
  headers: {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'edcb34ef5bmshba55af09343c5abp14a8f6jsn9755bce1a9f4'
  }
};

request(options, function(error, response, dataStream){
		if (!error && response.statusCode == 200){
			var data = JSON.parse(dataStream);
			//console.log('data=',data);
			res.render('results', {data:data});
		}
	
	    console.log(dataStream);
	    
	});

*/

var query = req.query.search;
	var url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + query;
	request(url, function(error, response, dataStream){
		if (!error && response.statusCode == 200){
			var data = JSON.parse(dataStream);
			//console.log('data=',data);
			res.render('results', {data: data});
		}
	});

	
});


/* The handler for undefined routes */
app.get('*', function(req, res){
   res.render('error'); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})