import * as http from 'http'
import { UserRegister, usersController } from './controller/auth-controller'
import { HttpMethod } from './utills/http-methods'

const server = http.createServer ( async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if(request.method === HttpMethod.POST && request.url === '/api/login'){
        await usersController(request, response)
    } 
    if(request.method === HttpMethod.GET && request.url === '/api/register'){
        await UserRegister(request, response)
    }
})

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}`)
})