
import { IncomingMessage, ServerResponse } from "http";
import { HttpMethod } from "../utills/http-methods";
import { ContentType } from "../utills/content-types";
import {parseRequestBody } from '../utills/body-parser';
import { registerValidator } from '../validators/auth-register-validator';


export const authCompile = async (request: IncomingMessage, response: ServerResponse) => {
    // Verifica se o método é POST
    if (request.method === HttpMethod.POST) {

        //Guarda o que vem do client em um objeto
        const body:object = await parseRequestBody(request)

        //valida se o que veio do client está no padrão correto
        const validatorBody = await registerValidator(body)
        return validatorBody

    } else {
        
        response.writeHead(405, { 'Content-Type': ContentType.jsonUTF8 });
        response.end('Método não permitido');

        
    }
}