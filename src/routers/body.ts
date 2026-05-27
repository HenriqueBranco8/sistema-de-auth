import { error } from "console"
import { IncomingMessage} from "http"



export const convertChunk = async (request: IncomingMessage) => {
    return new Promise((resolve, reject) => {
        let rawbBody = ''
        request.on('data', chunk => {
            rawbBody += chunk.toString()
        })
        request.on('end', () => {
            try{
                const parsedBody = JSON.parse(rawbBody)
                resolve(parsedBody)
            }catch(error){
                reject(error)
            }
        })
    })
}