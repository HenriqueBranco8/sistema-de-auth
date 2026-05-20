import * as http from 'http'
import { painelADM, UserRegister, usersController } from './controller/auth-controller'
import { HttpMethod } from './utills/http-methods'

const server = http.createServer ( async (request: http.IncomingMessage, response: http.ServerResponse) => {


    //localhost:3636/api/login?p=admin
    const [baseUrl, queryString] = request.url?.split('?') ?? ['','']
    console.log(queryString)

    
    if(request.method === HttpMethod.POST && baseUrl === '/api/login'){
        await usersController(request, response)
        
    } 

    if(request.method === HttpMethod.GET && baseUrl === '/api/register'){
        await UserRegister(request, response)
    }

    if(request.method === HttpMethod.POST && baseUrl === '/api/painel'){
        await painelADM(request, response)
    }

})

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Servidor Iniciado na porta ${port}`)
})