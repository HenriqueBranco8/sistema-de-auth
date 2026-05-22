import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { verifEmail } from '../service/verif-user'
import { registerUser } from '../service/register'
import { viewEmails } from '../service/painel-adm'
import { StatusCode } from '../utills/status-code'
import { authCompile } from '../routers/auth-routers'


export const usersController = async (request: IncomingMessage, response: ServerResponse) => {


    //O content irá receber uma função que busca o e-mail adicionado no Db. Porém, como esse projeto está em estado de desenvolvimento, busca em um json (emails.json)
    const content = await verifEmail('henriquebrancodasilvadias@gmail.com')

    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
}

export const UserRegister = async (request: IncomingMessage, response:ServerResponse) => {
    const content = await registerUser('11','sdada@!@#454507*-+')
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