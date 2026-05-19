import fs from 'fs'
import { Encoding } from '../utills/encoding'
import { pathData } from './emails'


//Função irá retornar void (Retorna nada) porque vai escrever em um arquivo usando a função 'fs.' que retorna sempre undefined, ela não tem que retornar nada, apenas escrever o no arquivo. No futuro, essa função se conectará ao DB, mas por ser um protótipo ainda será um arquivo .json.

export const registerUser = async (email: string, password : string): Promise<void> => {

    //lê o arquivo email.json e me entrega as informações espelhadas em String
    const rawData = fs.readFileSync(pathData, Encoding.UTF8)

    //Transforma essas informações do rawData em um array
    const dataArray = JSON.parse(rawData)
    
    //pega e organiza os parâmetros da função em um objeto
    const user: object = { "email": email, "password": password} 

    //Adiciona o user no array que contém as informações espelhadas do e-mail.json
    dataArray.push(user)

    //Converte esse json.file para um string Json para a próxima variável aceitar o valor
    const dataString = JSON.stringify(dataArray)

    //Essa variável vai guardar o caminho, pegar o convertFile onde tem tudo formatado das variáveis anteriores e sobrescrever o arquivo email.json com as informações atualizadas
    const addUser = fs.writeFileSync(pathData, dataString, Encoding.UTF8)
    
    console.log('E-mail cadastrado')
    
}