const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',(req,res) => {
	res.send("Hello to Web 2.0");
});

app.post('/',(req,res) => {
	let email = req.body.email;
	let amount = req.body.amount;

	res.send({"amount" : amount, "email" : email});
});

app.listen(4000,() => {
	console.log("App is running on Port 4000")
});
