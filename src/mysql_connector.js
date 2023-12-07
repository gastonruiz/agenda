//importar mysql
import mysql from 'mysql'

//crear la conexion
const connector = mysql.createConnection({
    
    host: 'localhost',
    user: 'db_gaston',
    password: 'db_password',
    database: 'video_db'
})

const conectar = ()=>{
    connector.connect(err=> {
        if(err) throw err
        console.log('conectado')
    })
    connector.end();
}
//agrego desde la web los datos a la db
const agregarContacto = (nombre, numero) => {
    const sql =`INSERT INTO Agenda (id_agenda, nombre_contacto, numero_contacto) VALUES (${null}, "${nombre}", ${numero})`
    connector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    }) 
}

export {conectar,agregarContacto}