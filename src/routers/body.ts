
import { IncomingMessage, ServerResponse} from "http"
import { ContentType } from "../utills/content-types"



export const convertChunk = async (request: IncomingMessage, response: ServerResponse) => {
    return new Promise((resolve, reject) => {
        let rawbBody = ''
        request.on('data', chunk => {
            rawbBody += chunk.toString()
        })
        request.on('end', () => {
            try{
                if(rawbBody === ''){
                    response.writeHead(400, { 'Content-Type': ContentType.jsonUTF8 });
                    response.end(JSON.stringify({ error: 'Nada Adicionado' }));
                }else{
                    const parsedBody = JSON.parse(rawbBody)
                    resolve(parsedBody)
                }
                    
            }catch(error){
                reject(error)
            }
        })
    })
}