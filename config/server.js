//importação dos módulos express, consign, body-parser e express-validator
var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

// iniciando objeto do express
var app = express();

// varivaies view-engine e views do express
app.set('view engine', 'ejs')
app.set('views', './app/views')

// configuração middleware express.static
app.use(express.static('./app/public'))

//consfiguração middleware body-parser
app.use(bodyParser.urlencoded({extended: true}))

//configuração middleware express-validator
app.use(expressValidator())

// efetua o autoload das rotas, dos models e dos controllers para o objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

//exportar objeto app
module.exports = app;
