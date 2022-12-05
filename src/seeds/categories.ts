import { v4 as uuidV4 } from 'uuid';
import { Category } from '../models/Category';
import { CategoryInterface } from '../interfaces';


const categories: Array<CategoryInterface> = [
    {
        id: uuidV4(),
        name: 'Technology'
    }, 
    {
        id: uuidV4(),
        name: 'Sport'
    }, 
    {
        id: uuidV4(),
        name: 'Furniture'
    }, 
    {
        id: uuidV4(),
        name: 'Accounting'
    }, 
    
];

export const seedCategories = async() => {

    for (const cat of categories) {
        const category = await Category.findOne({ where: {name: cat.name} });

        if (!category) await Category.create(cat as CategoryInterface);
    }   
}