const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information} = require('./models/server_db');

app.use(bodyParser.json());

app.get('/',(req,res) => {
	res.send("Hello to Web 2.0");
});

app.post('/',async (req,res) => {
	let email = req.body.email;
	let amount = req.body.amount;

	if(amount <= 1) {
		return_info = {};
		return_info.error = true;
		return_info.message = "Amount should be greater than $1";
		return res.send(return_info);
	}
	var result = await save_user_information({"amount": amount, "email": email});
	res.send(result);
});

app.get('/get_total_amount', async (req,res) => {
	var result = await get_total_amount();
	res.send(result);
})

app.listen(4000,() => {
	console.log("App is running on Port 4000");
});
