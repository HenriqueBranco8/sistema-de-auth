import * as z from 'zod'
import { userModel } from '../models/interface'

//Função que analisa se o formato de dados está correto.
export const validatorLogin = (inputUser: unknown) => {

    //Modelo padrão que tem que vir do client
    const register = z.strictObject({
        email: z.email().trim(),
        password: z.string().trim().regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?!.*[^\x00-\x7F])\S{8,23}$/)
    })

    //transforma o inputEmail em um objeto compativel com o Modelo padrão, caso o input tenha campos a mais ou fora do padrão irá dar erro
    const data:userModel = register.parse(inputUser)
    return data
}
