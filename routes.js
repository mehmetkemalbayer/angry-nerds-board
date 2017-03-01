const controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.home)
  app.get('/vote', controllers.vote)
  app.post('/save', controllers.save)
  app.get('/penalty', controllers.penalty)
  app.get('/scoreboard', controllers.scoreboard)
  app.get('/scoretable', controllers.scoretable)
}
