
import { IncomingMessage, ServerResponse } from "http";
import { HttpMethod } from "../utills/http-methods";
import { ContentType } from "../utills/content-types";
import {parseRequestBody } from '../utills/body-parser';
import { registerValidator } from '../validators/auth-register-validator';
import { usersController } from "../controller/auth-controller";

import { userModel } from "../models/interface";


export const authCompile = async (request: IncomingMessage, response: ServerResponse) => {
    // Verifica se o método é POST
    if (request.method === HttpMethod.POST) {

        //Guarda o que vem do client em um objeto
        const body:userModel = await parseRequestBody(request)

        //manda para o controller o que veio do client
        await usersController(body, response)
        

    } else {
        
        response.writeHead(405, { 'Content-Type': ContentType.jsonUTF8 });
        response.end('Método não permitido');

        
    }
}