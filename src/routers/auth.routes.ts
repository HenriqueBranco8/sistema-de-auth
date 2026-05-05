import {IncomingMessage, ServerResponse} from 'http'
import { httpMethods } from '../utills/http-methods'

//Take the e-mail and password and after return e-mail and password formatted
const authRegister = async (request:IncomingMessage, response: ServerResponse ) => {
    if(request.method === httpMethods.POST){
        let body = ''

        request.on('data', chunk => {
            body += chunk
        })
    }
}