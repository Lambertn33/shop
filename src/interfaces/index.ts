
interface CategoryInterface {
    id: string,
    name: string
}

interface CartInterface {
    id: string,
    userId: string
}

interface CartProductInterface {
    id: string,
    cartId: string,
    productId: string,
    quantity: number
}

interface ProductInterface {
    id: string,
    name: string,
    categoryId: string,
    price: number
}

interface RoleInterface {
    id: string,
    name: string
}

interface UserInterface {
    id: string,
    names: string,
    email: string,
    roleId: string,
    password: string
}

export {
    CategoryInterface,
    CartInterface,
    CartProductInterface,
    ProductInterface,
    RoleInterface, 
    UserInterface
}
