import express from 'express'
import { conectar, agregarContacto} from './src/mysql_connector.js'
const app = express()

app.listen('8000', function(){
    console.log('aplicacion iniciada en el puerto 8000')
})
//config Pug
app.set('views', './vistas')
app.set('view engine', 'pug')

//config static files
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/', function(req,res){
    //res.send('app iniciada ok')

    res.render('index', {titulo:'Aplicacion de contactos', dato:'cualquier texto'})
})
app.get('/agregar/:nombre/:numero', function(req, res) {
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(nombre, numero)
    res.redirect('/')
})