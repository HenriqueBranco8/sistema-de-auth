import { ServerResponse } from 'http'
import { StatusCode } from './status-code'
import { ContentType } from './content-types'

//Guarda os tipos de mensagem que serão enviadas


export const sendSucess = (response: ServerResponse) => {
    let responseMessage = ''
    responseMessage  = 'Dado Válido! Carregando...'


    response.writeHead(StatusCode.OK, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(responseMessage))
}


export const sendError = (response: ServerResponse) => {
    let responseMessage = ''
    responseMessage  = '[ERRO] Dados inválidos'

    response.writeHead(StatusCode.UNAUTHENTICATED, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(responseMessage))
}