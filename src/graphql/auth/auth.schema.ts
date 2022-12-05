import { Field, ObjectType, InputType } from 'type-graphql';

@ObjectType()
export class User {
    @Field()
    id!: string

    @Field()
    names!: string

    @Field()
    email!: string

    @Field()
    password!: string
}

@ObjectType()
export class LoginResponse {
    @Field()
    userId!: string

    @Field()
    token!: string
}

@InputType()
export class SignupInputs implements Pick<User, "names" | "email" | "password"> {
    @Field()
    names!: string

    @Field()
    email!: string

    @Field()
    password!: string;
}

@InputType()
export class SigninInputs implements Pick<User, "email" | "password"> {
    @Field()
    email!: string

    @Field()
    password!: string;
}