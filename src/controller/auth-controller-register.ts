import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

export const usersController = async (request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify({
        email: 'henriquebrancodasilvadias@gmail.com',
        password: 'Seila@123.mudar',
    }))
}