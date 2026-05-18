import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { verifEmail } from '../service/verif-user'


export const usersController = async (request: IncomingMessage, response: ServerResponse) => {
    //O content irá receber uma função que busca o e-mail adicionado no Db. Porém, como esse projeto está em estado de desenvolvimento, busca em um json (emails.json)
    const content = await verifEmail('GHB@gmail.com')

    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(content))
}

export const registerUser = async (request: IncomingMessage, response:ServerResponse) => {

} 