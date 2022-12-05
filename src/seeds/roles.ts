import { v4 as uuidV4 } from 'uuid';
import { Role } from "../models/Role";
import { RoleInterface, UserInterface } from '../interfaces';
import { RoleEnum } from '../enums/index'
import { hash } from 'bcryptjs';
import { User } from '../models/User';


const roles: Array<RoleInterface> = [
    {
        id: uuidV4(),
        name: RoleEnum.ADMIN
    },    
    {
        id: uuidV4(),
        name: RoleEnum.CLIENT
    },
]


export const seedRoles = async() => {
    for (const r of roles) {
        const role = await Role.findOne({ where: {name: r.name} });

        if (!role) await Role.create(r as RoleInterface);
    }

    //Seed System Admin
    const newAdmin: UserInterface = {
        id: uuidV4(),
        names: 'system admin',
        email: 'admin@gmail.com',
        password: await hash('admin12345', 12),
        roleId: roles[0].id
    } 

    await User.create(newAdmin);
}

