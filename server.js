const express = require('express');
const app = express();

app.get('/',(req,res) => {
	res.send("Hello to Web 2.0");
});

app.listen(4000,() => {
	console.log("App is running on Port 2000")
});
