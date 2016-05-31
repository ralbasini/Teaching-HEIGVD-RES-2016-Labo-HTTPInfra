var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

var port = 3000;

app.get('/test', function (req, res){
	res.send("TEST command received");
});

app.get('/', function (req, res){
	res.send(generateLogs() );
});

app.listen(port, function () {
	console.log('Accepting HTTP requests on port ' + port + '...');
});

function generateLogs(){
	var numberOfLogs = chance.integer({min: 1, max:10});
	console.log(numberOfLogs);
	var logs = [];
	
	for(var i = 0; i < numberOfLogs; i++){
		var ipv4 = chance.ip();
		var ipv6 = chance.ipv6();
		var address = chance.url();
		var randomyear = chance.integer({min:2007, max: 2016});
		var date = chance.date({
			string: true, 
			year: randomyear})
		
		logs.push({
			ipv4: ipv4,
			ipv6: ipv6,
			address: address,
			date: date
		});
	};
	
	console.log(logs);
	return logs;
}