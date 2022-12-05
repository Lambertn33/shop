import { Table, Column, ForeignKey, Model, DataType } from 'sequelize-typescript';
import { CartProductInterface } from '../interfaces';
import { Cart } from './Cart';
import { Product } from './Product';

@Table({
    timestamps: true,
    tableName: 'cart_products'
})

export class CartProduct extends Model<CartProductInterface> {
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false
    })
    id!: string

    @ForeignKey(() => Product)
    @Column
    productId!: string

    @ForeignKey(() => Cart)
    @Column
    cartId!: string

    @Column
    quantity!: number
}