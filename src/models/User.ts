import { Table, Model, DataType, Column, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { UserInterface } from '../interfaces';
import { Cart } from './Cart';
import { Role } from './Role';

@Table({
    timestamps: true,
    tableName: 'users'
})

export class User extends Model<UserInterface> {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.STRING
    })
    id!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    names!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    email!: string;

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    password!: string;

    @ForeignKey(() => Role)
    @Column
    roleId!: string

    @BelongsTo(() => Role)
    role!: Role

    @HasOne(() => Cart)
    cart!: Cart

}