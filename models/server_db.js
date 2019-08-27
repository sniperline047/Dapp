var db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject) => {
	db.query('INSERT INTO lottery_information SET ?', data, function(err, results, fields) {
		if(err) {
			reject('could save information');
		}
		resolve('Succesful');
	});
})

module.exports = {
	save_user_information
}