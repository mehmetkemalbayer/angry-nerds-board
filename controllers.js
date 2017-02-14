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
	console.log("scoretable");
	var result = {
		winner: "",
		votes: [],
		voteDetails: []}
	result.votes[0] = { font: "bungee_inline", score: 0 };
	result.votes[1] = { font: "fontdiner_swanky", score: 0 };
	result.votes[2] = { font: "press_start_2p", score: 0 };
	result.votes[3] = { font: "special_elite", score: 0 };
	result.votes[4] = { font: "cabin_condensed", score: 0 };
	result.votes[5] = { font: "comfortaa", score: 0 };
	result.votes[6] = { font: "exo", score: 0 };
	result.votes[7] = { font: "orbitron", score: 0 };
	result.votes[8] = { font: "arvo", score: 0 };
	result.votes[9] = { font: "sansita", score: 0 };		     	
	result.votes[10] = { font: "amarante", score: 0 };		

	models.Vote.find({}, function(err, votes) {    

    votes.forEach(function(votesDB) {
      	result.votes[0].score += votesDB.bungee_inline;
		result.votes[1].score += votesDB.fontdiner_swanky;
		result.votes[2].score += votesDB.press_start_2p;
		result.votes[3].score += votesDB.special_elite;
		result.votes[4].score += votesDB.cabin_condensed;
		result.votes[5].score += votesDB.comfortaa;
		result.votes[6].score += votesDB.exo;
		result.votes[7].score += votesDB.orbitron;
		result.votes[8].score += votesDB.arvo;
		result.votes[9].score += votesDB.sansita;
		result.votes[10].score += votesDB.amarante;	
		result.voteDetails.push(votesDB);		
    });
	result.winner = result.votes[0].font;
	var maxVote = result.votes[0].score;
	for(i=1; i<result.votes.length; i++)
	{
		if(result.votes[i].score > maxVote)						
		{
			result.winner = result.votes[i].font;
			maxVote = result.votes[i].score;
		}
	}
	res.send(result);     		
	});	      	
	
}
module.exports = controllers;