import { ServerResponse } from 'http'
import { StatusCode } from './status-code'
import { ContentType } from './content-types'

//Guarda os tipos de mensagem que serão enviadas
let responseMessage = ''

export const sendSucess = (response: ServerResponse) => {
    responseMessage  = 'Dado Válido! Carregando...'


    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(responseMessage))
}


export const sendError = (response: ServerResponse) => {
    responseMessage  = '[ERRO] Dados inválidos'

    response.writeHead(StatusCode.UNAUTHENTICATED, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(responseMessage))
}