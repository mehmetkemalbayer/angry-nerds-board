const controllers = require('./controllers')

module.exports = function (app) {
  app.get('/', controllers.home)
  app.get('/giris', controllers.login)
  app.post('/giris', controllers.loginPost)
  app.get('/hakkimizda', controllers.about)


  app.get('/cikis', controllers.logout)

  app.get('/kayit', controllers.register)
  app.post('/kayit', controllers.registerPost)
}
