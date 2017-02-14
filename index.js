// Uygulamadaki yakalanmayan tum exception'lari yaklamak için
// Böylece uygulama hiçbir zaman çökmeyecek/durmayacak
process.on('uncaughtException', function (err) {
  console.error(err.stack || err)
})

// DotEnv ile .env dosyasındaki konfigürasyonu yüklüyoruz
// Yüklenen değişkenler process.env.DEGISKENADI şeklinde erişilebilir
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// Express modülünü yüklüyoruz
// https://www.npmjs.com/package/express
const express = require('express')

// Uygulama instance'ımızı oluşturuyoruz
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());  
// Middleware modülümüzü yüklüyor ve uygulamamıza bağlıyoruz
app.use(express.static('toastr'));
// Routes modülümüzü yüklüyor ve uygulamamıza bağlıyoruz
require('./routes')(app)

// Uygulamayi dinlemek için PORT değişkenini ortam değişkeni olarak aliyoruz
const port = process.env.PORT

// Uygulamayı web sunucusu haline getirip dinliyoruz
app.listen(port, function () {
  console.log(`${port} de uygulama hazir.`)
})
