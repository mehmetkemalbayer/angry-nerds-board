const controllers = {}
const models = require('./model')

controllers.home = function (req, res) {
	res.sendFile('./scrum_board.html', { root: __dirname });
};