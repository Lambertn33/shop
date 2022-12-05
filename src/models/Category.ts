import { Table, Model, DataType, Column, HasMany } from 'sequelize-typescript';
import { Product } from './Product';
import { CategoryInterface } from '../interfaces';

@Table({
    timestamps: true,
    tableName: 'categories'
})

export class Category extends Model<CategoryInterface> {
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

    @HasMany(() => Product)
    products!: Product[]
}