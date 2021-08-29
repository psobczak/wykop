import * as dotenv from 'dotenv'

dotenv.config()

export interface EnvVariables {
    KEY: string,
    SECRET: string,
    BASE_URL: string,
}

export const env: EnvVariables = {
    KEY: process.env.KEY,
    SECRET: process.env.SECRET,
    BASE_URL: process.env.BASE_URL,
}
