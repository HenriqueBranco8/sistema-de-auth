import * as z from 'zod'


export const registerValidator = async (inputEmail: object) => {
    
    const register = z.strictObject({
        email: z.email().trim(),
        password: z.string().trim().regex(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9])(?!.*[^\x00-\x7F])\S{8,23}$/)
    })
//register.parse({ email: inputEmail, password:inputPassword })
    const data:object = register.parse(inputEmail)
    return data
}
