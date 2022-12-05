import { Table, Column, BelongsToMany, Model, BelongsTo, DataType, ForeignKey } from 'sequelize-typescript';
import { CartInterface } from '../interfaces';
import { CartProduct } from './CartProduct';
import { Product } from './Product';
import { User } from './User';

@Table({
    timestamps: true,
    tableName: 'carts'
})

export class Cart extends Model<CartInterface> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false
    })
    id!: string

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    userId!: string

    @BelongsTo(() => User)
    user!: User

    @BelongsToMany(() => Product, () => CartProduct)
    products!: Product[]
}