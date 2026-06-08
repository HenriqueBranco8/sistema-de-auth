
import { IncomingMessage, ServerResponse } from "http";
import { HttpMethod } from "../utills/http-methods";
import { ContentType } from "../utills/content-types";
import {parseRequestBody } from '../utills/body-parser';
import { usersController } from "../controller/auth-controller";

import { userModel } from "../models/interface";


export const authCompile = async (request: IncomingMessage, response: ServerResponse) => {

    //Guarda o que vem do client em um objeto
    const body:userModel = await parseRequestBody(request)

    //manda para o controller o que veio do client já convertido em objeto
    await usersController(body, response)
        
}