import fs from 'fs'
import path from 'path'
import { Encoding } from '../utills/encoding'
import { userModel } from '../models/interface'


export const pathData = path.join(__dirname, "../repositories/emails.json")

export const emailUser = async (): Promise<userModel[]> => {
    const rawData = fs.readFileSync(pathData, Encoding.UTF8)
    const jsonFile = JSON.parse(rawData)
    
    return jsonFile
} 