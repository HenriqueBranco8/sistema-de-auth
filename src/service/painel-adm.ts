import { emailUser } from "./emails"


export const viewEmails = async (acessADM: string) => {
    const emails = emailUser()
    
    if(acessADM !== 'admin'){
        console.log('erro')
    } else {
        return emails
    }
}