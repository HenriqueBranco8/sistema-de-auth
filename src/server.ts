import * as http from 'http'
import { usersController } from './controller/auth-controller-register'
import { HttpMethod } from './utills/http-methods'

const server = http.createServer ( async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if(request.method === HttpMethod.POST){
        await usersController(request, response)
    }
})

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}`)
})