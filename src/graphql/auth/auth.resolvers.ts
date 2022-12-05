import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { v4 as uuidV4 } from 'uuid';
import { hash, compare } from 'bcryptjs';
import  jwt  from 'jsonwebtoken';
import { SignupInputs, SigninInputs, User as UserSchema, LoginResponse, User } from './auth.schema';
import { User as UserModel } from '../../models/User';

@Resolver(() => UserSchema)

export class AuthResolver {
    @Mutation(() => UserSchema)
    async signup(@Arg("input") input: SignupInputs): Promise<UserSchema> {
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

    @Query(() => LoginResponse)
    async signin(@Arg("input") input: SigninInputs): Promise<LoginResponse> {
        const { email, password } = input;
        const user = await UserModel.findOne({ where: { email: email } });
        if (!user) throw new Error('invalid email');

        const checkPassword = await compare(password, user.password);
        if (!checkPassword) throw new Error('invalid password');

        let userToken = jwt.sign({ userId: user.id, userNames: user.names, userEmail: user.email }, 'mySecretKey', {expiresIn: '1h'});
        return {
            token: userToken,
            userId: user.id
        }
    }
}