import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcryptjs';
import { UserInput, User as UserSchema } from './auth.schema';
import { User as UserModel } from '../../models/User';

@Resolver(() => UserSchema)

export class AuthResolver {
    @Mutation(() => UserSchema)
    async signup(@Arg("input") input: UserInput): Promise<UserSchema> {
        const { names , email, password } = input;
        const hashedPassword = await hash(password, 12);
        const newUser = {
            id: uuidV4(),
            names: names,
            email: email,
            password: hashedPassword,
            isAdmin: false
        }
        const createdUser = await UserModel.create(newUser);
        return createdUser;
    }
}