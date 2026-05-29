import * as z from 'zod'
import { IncomingMessage, ServerResponse } from "http";
import { HttpMethod } from "../utills/http-methods";
import { ContentType } from "../utills/content-types";
import { convertChunk } from './body';
import { registerValidator } from '../validators/auth-register-validator';


export const authCompile = async (request: IncomingMessage, response: ServerResponse) => {
     // Verifica se o método é POST
    if (request.method === HttpMethod.POST) {
       const body:any = await convertChunk(request, response)

       const validatorBody = await registerValidator(body)
       if(validatorBody){
            //response.writeHead(200, { 'Content-Type': ContentType.jsonUTF8 });
            //response.end(JSON.stringify({validatorBody}))
            return validatorBody
       }

    } else {
        if (request.method === HttpMethod.GET){
            // Resposta para métodos não permitidos
            response.writeHead(405, { 'Content-Type': ContentType.text });
            response.end('Método não permitido');
        }
        
    }
}