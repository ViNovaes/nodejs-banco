import {Model, DataTypes} from 'sequelize'

import {sequelize} from '../instances/mysql'

interface UserInstance extends Model{
    id: number
    name: string
    age: number
}

export const User = sequelize.define<UserInstance>("User,",{
    id:{
        primaryKey: true,
        type: DataTypes.NUMBER
    },
    name:{
        type: DataTypes.STRING
    },
    age:{
        type: DataTypes.NUMBER,
        defaultValue: 18
    }
},{
    tableName: 'Users',
    timestamps: false
})