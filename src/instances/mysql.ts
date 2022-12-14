import {Sequelize} from 'sequelize'

import dotenv from 'dotenv'

dotenv.config()

//criando uma constante para configurar o banco
export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port: parseInt(process.env.MYSQL_POST as string)
    }
)