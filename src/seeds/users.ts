import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";
import { UserInterface } from "../interfaces";
import { User } from "../models/User";

export const seedUsers = async() => {
    const hashedPassword = await hash('admin12345', 12);

    const newAdmin: UserInterface = {
        id: uuidV4(),
        names: 'system admin',
        email: 'admin@gmail.com',
        password: hashedPassword,
        isAdmin: true
    }

    await User.create(newAdmin);
}