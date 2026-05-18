import { emailUser } from "./emails"


export const verifEmail = async (userEmail: string)  => {
    const email = await emailUser()
    const found = email.find((tur: any) => tur.email === userEmail)
    if(found !== undefined){
        console.log('Email, encontado')
        //Se o email fosse encontado, o usuário iria para página inicial (ainda vou implementar essa função)
        return found
    } else {
        console.log('E-mail, não encontado.')
    }
}


