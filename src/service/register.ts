import fs from 'fs'
import { Encoding } from '../utills/encoding'
import { pathData } from './emails'


export const register = async (email: string, passowrd: string) => {

    const rawData = fs.readFileSync(pathData, Encoding.UTF8)
    const jsonFile = JSON.parse(rawData)
    

    const rawUser: object = { "email": email, passowrd: passowrd} 

    jsonFile.push(rawUser)
    const convertFile = JSON.stringify(jsonFile)
    const addUser = fs.writeFileSync(pathData, convertFile, Encoding.UTF8)
    

    return addUser
}