import { userModel } from "../models/interface"
import { emailUser } from "./emails"

//Função que vai verificar o email do usuário. Recebe como parâmetro e-mail do usuário
export const verifEmail = async (userEmail: string)  => {

    //Essa função email recebe o emailUser que busca os dados que estão no json (emails.json)
    const email = await emailUser()


    //essa função procura o email da pessoa com o método find
    const emailFound: {} | any = email.find((emails: userModel) => emails.email === userEmail) as {email: string} | undefined

    //Se o email for encontrado, no momento o "console.log" avisa que deu certo, porém ao decorrer do projeto esse "console" irá sair para apontar para rota de página inicial
    if(emailFound !== undefined){
        console.log('Email, encontado')
        //Se o email fosse encontado, o usuário iria para página inicial (ainda vou implementar essa função)
        return {email: emailFound.email}
    } else {
        console.log('E-mail, não encontado.')
    }
}


