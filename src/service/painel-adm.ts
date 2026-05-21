import { IncomingMessage, request } from "node:http"
import { emailUser } from "./emails"


export const viewEmails = async (acessADM: string | undefined) => {
    const emails = emailUser()

    //localhost:3636/api/login?p=****
    const acess = acessADM?.split('?p=')[1] || ''

    if(acess !== 'admin'){
        console.log('erro')
    } else {
        return emails
    }
}

