
import { IncomingMessage} from "http"
import { userModel } from "../models/interface"




export const parseRequestBody = async (request: IncomingMessage) => {

    // envolve request.on em Promise para usar async/await
    return new Promise<userModel>((resolve, reject) => {

        //variável guardará os dados vindo do client
        let rawBody = ''

        //Função que ouvirá o input do client. 
        request.on('data', chunk => {

            //Chegando dado do client o rawBody vai guardar as informações do chunk em formato de string
            rawBody += chunk.toString()
        })

        //Função que após ter as informações do client irá retornar se há algum erro ou não
        request.on('end', () => {

            try{
                //Se o rawBody estiver sem dados, retornará um erro.
                if(rawBody === ''){
                    reject('[ERRO] Não há dados')
                   
                }else{
                    
                    //Se não, retorna o dado convertido para usar em outro lugar
                    const parsedBody = JSON.parse(rawBody)
                    resolve(parsedBody)
                    
                }

            //Caso as conversões derem errado, aparecerá um erro de catch
            }catch(error){
                reject('[ERRO] JSON inválido')
            }
        })
    })
}