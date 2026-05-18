import {IncomingMessage, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { verifEmail } from '../service/verif-user'


export const usersController = async (request: IncomingMessage, response: ServerResponse) => {
    const userEmail = await verifEmail('GHB@gmail.com')
    response.writeHead(200, {'content-type' : ContentType.jsonUTF8})
    response.end(JSON.stringify(userEmail))
}