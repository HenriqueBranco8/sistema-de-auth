import * as z from 'zod'
import { IncomingMessage, ServerResponse } from "http";
import { HttpMethod } from "../utills/http-methods";
import { ContentType } from "../utills/content-types";
import { convertChunk } from './body';


export const authCompile = async (request: IncomingMessage, response: ServerResponse) => {
     // Verifica se o método é POST
    if (request.method === HttpMethod.POST) {
       const body:any = await convertChunk(request)
       console.log(body.email)
    } else {
        if (request.method === HttpMethod.GET){
            // Resposta para métodos não permitidos
            response.writeHead(405, { 'Content-Type': ContentType.text });
            response.end('Método não permitido');
        }
        
    }
}