import {IncomingMessage, request, ServerResponse} from 'http'
import { ContentType } from '../utills/content-types'

import { registerUser } from '../service/register'
import { viewEmails } from '../service/painel-adm'
import { StatusCode } from '../utills/status-code'
import { authCompile } from '../routers/auth-routers'
import { verifEmail } from '../service/verif-user'
import { validatorLogin } from '../validators/auth-register-validator'
import { userModel } from '../models/interface'
import { sendError, sendSucess } from '../utills/send-response'


export const usersController = async (inputUser:userModel, response: ServerResponse) => {
    
    
    //Guardar o objeto formatado no padrão correto sem campos extras e lógica de e-mail e senha
    const validatedUser:userModel = validatorLogin(inputUser)

    //Recebe o resultado da verificação, se o email existe ou não.
    const foundEmail = await verifEmail(validatedUser.email)
    
    //Se o email for encontrado, aparecerá conforme o email seja encontrado ou não
    if(foundEmail){
        sendSucess(response)
        
    } else {
        sendError(response)
    } 
         
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
