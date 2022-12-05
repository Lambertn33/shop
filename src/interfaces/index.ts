// Models
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

interface UserInterface {
    id: string,
    names: string,
    email: string,
    isAdmin: boolean,
    password: string
}

//Inputs

type newUserInputs = {
    names: string,
    email: string,
    password: string
}

export {
    CategoryInterface,
    CartInterface,
    CartProductInterface,
    ProductInterface,
    UserInterface,
    newUserInputs
}
