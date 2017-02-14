const controllers = {}
const models = require('./model')

controllers.home = function (req, res) {
	console.log("get");
	res.sendFile('./scrum_board.html', { root: __dirname });
};
controllers.save = function (req, res) {
	var query = {'sicil': req.body.sicil};
	
	models.Vote.findOneAndUpdate(query, req.body, {upsert:true}, function(err, doc){
		if (err) return res.send(500, { error: err });
		return res.send("succesfully saved");
	});		

};

controllers.scoreboard = function (req, res) { 
	res.sendFile('./scoreboard.html', { root: __dirname });
}

controllers.scoretable = function (req, res) { 
	var votes = models.Vote.find();	
	var result = {
		winner: "",
		votes: []}
	result.votes[0].font = "bungee_inline";
	result.votes[1].font = "fontdiner_swanky";
	result.votes[2].font = "press_start_2p";
	result.votes[3].font = "special_elite";
	result.votes[4].font = "cabin_condensed";
	result.votes[5].font = "comfortaa";
	result.votes[6].font = "exo";
	result.votes[7].font = "orbitron";
	result.votes[8].font = "arvo";
	result.votes[9].font = "sansita";		      	
	result.votes[10].font = "amarante";		      	
	for(i=0; i<votes.length; i++)
	{
		result.votes[0].score += votes[i].bungee_inline;
		score.votes[1].score += votes[i].fontdiner_swanky;
		result.votes[2].score += votes[i].press_start_2p;
		result.votes[3].score += votes[i].special_elite;
		result.votes[4].score += votes[i].cabin_condensed;
		result.votes[5].score += votes[i].comfortaa;
		result.votes[6].score += votes[i].exo;
		result.votes[7].score += votes[i].orbitron;
		result.votes[8].score += votes[i].arvo;
		result.votes[9].score += votes[i].sansita;
		result.votess[10].score += votes[i].amarante;						
	}
	winner = result.votes[0].font;
	for(i=1; i<result.votes.length; i++)
	{
		if(result.votes[i].score > result.votes[i-1].score)						
		{
			winner = score.votes[i].font;
		}
	}
	res.send(score);
}
module.exports = controllers;