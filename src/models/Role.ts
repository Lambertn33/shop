import { Table, Model, DataType, Column, HasMany } from 'sequelize-typescript';
import { RoleInterface } from '../interfaces';
import { User } from './User';

@Table({
    timestamps: true,
    tableName: 'roles'
})

export class Role extends Model<RoleInterface> {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.STRING
    })
    id!: string;

    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.STRING
    })
    name!: string;

    @HasMany(() => User)
    users!: User[]
}