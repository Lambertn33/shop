import { Table, Model, DataType, Column, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import { Category } from './Category';
import { ProductInterface } from '../interfaces';
import { CartProduct } from './CartProduct';
import { Cart } from './Cart';

@Table({
    timestamps: true,
    tableName: 'products'
})

export class Product extends Model<ProductInterface> {
    @Column({
        allowNull: false,
        primaryKey: true,
        type: DataType.STRING
    })
    id!: string

    @Column({
        allowNull: false,
        type: DataType.STRING
    })
    name!: string

    @Column({
        allowNull: false,
        type: DataType.DOUBLE
    })

    price!: number
    
    @ForeignKey(() => Category)
    @Column
    categoryId!: string;


    @BelongsTo(() => Category)
    category!: Category

    @BelongsToMany(() => Cart, () => CartProduct)
    carts!: Cart[]

}