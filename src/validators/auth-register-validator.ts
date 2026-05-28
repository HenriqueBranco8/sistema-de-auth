import * as z from 'zod'

export const RegisterValidator = async (input: object) => {
    const register = z.object({
        email: z.email().trim(),

    })

    const data = register.parse({email: input})
    return data
}
