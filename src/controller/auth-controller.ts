import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { verifEmail } from '../service/verif-user'
import { registerUser } from '../service/register'
import { viewEmails } from '../service/painel-adm'


export const usersController = async (request: IncomingMessage, response: ServerResponse) => {


    //O content irá receber uma função que busca o e-mail adicionado no Db. Porém, como esse projeto está em estado de desenvolvimento, busca em um json (emails.json)
    const content = await verifEmail('henriquebrancodasilvadias@gmail.com')

    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
}

export const UserRegister = async (request: IncomingMessage, response:ServerResponse) => {
    const content = await registerUser('sdtrliogjjerilore@gmail.com','sdada@!@#454507*-+')

    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
} 

export const painelADM = async(request: IncomingMessage, response: ServerResponse) => {

    //localhost:3636/api/login?p=admin
    const queryString = request.url?.split('?p=')[1] ?? ''
    const content = await viewEmails(queryString)

    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
}