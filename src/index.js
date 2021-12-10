const express  = require('express')
const cors     = require('cors') // Cross-Origin Resource Sharing
const routes   = require('./routes')
const connection = require('../infra/connection')
const tables = require('../infra/tables')


const servidor = express()
servidor.disable('x-powered-by')
const porta = 8080

function MensagemDeInicio(){
  console.log('\nIniciado o servidor na porta ' + porta + '.\n')
}

connection.connect(erro => {
    if(erro){
        console.log(erro)
    }else{
        console.log('Conectado com sucesso')
        tables.init(connection)
    
        servidor.use(cors()) 
        servidor.use(express.json())
        servidor.use(routes)

        servidor.listen(porta, MensagemDeInicio())
    }
})