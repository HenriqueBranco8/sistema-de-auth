import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { registerUser } from '../service/register'
import { viewEmails } from '../service/painel-adm'
import { StatusCode } from '../utills/status-code'
import { authCompile } from '../routers/auth-routers'
import { verifEmail } from '../service/verif-user'


export const usersController = async (request: IncomingMessage, response: ServerResponse) => {
    //O content irá receber uma função que busca o e-mail adicionado no Db. Porém, como esse projeto está em estado de desenvolvimento, busca em um json (emails.json)
    
    const t:any = await authCompile(request, response)
    const content = await verifEmail(t.email, t.password)
    const msg = 'Email encontrado com sucesso! Carregando página inicial...'
    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(msg))
}

export const UserRegister = async (request: IncomingMessage, response:ServerResponse) => {
    const content = await registerUser('henriquebrancodasilvadias@gmail.com','sdada@!@#454507*-+')
    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
} 

export const painelADM = async(request: IncomingMessage, response: ServerResponse) => {
    const teste = await authCompile(request, response)
    const content = await viewEmails(request.url)
    console.log(teste)

    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
}