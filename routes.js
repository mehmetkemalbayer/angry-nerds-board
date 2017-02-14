const controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.home)
  app.post('/save', controllers.save)
  app.get('/scoreboard', controllers.scoreboard)
  app.get('/scoretable', controllers.scoretable)
}
