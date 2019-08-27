var mysql = require("mysql");
var db_config = {
	host : '127.0.0.1',
	user : 'root',
	password : 'Sniper*047',
	database : 'Dapp'
}

var connection;

function handleConnection() {
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
		if(err) {
			console.log('Error when connection to DB :',err);
			setTimeout(handleConnection,2000);
		}
	});
	connection.on('error',function(err) {
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleConnection();
		}else {
			throw err;
		}
	});
}

handleConnection();

module.exports = connection;
