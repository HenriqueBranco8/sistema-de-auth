import fs from 'fs'
import path from 'path'
import { Encoding } from '../utills/encoding'
import { UserEmail } from '../models/interface'


const pathData = path.join(__dirname, "../repositories/emails.json")

export const emailUser = async (): Promise<UserEmail> => {
    const rawData = fs.readFileSync(pathData, Encoding.UTF8)
    const jsonFile = JSON.parse(rawData)
    return jsonFile
} 