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

@InputType()
export class UserInput implements Pick<User, "names" | "email" | "password"> {
    @Field()
    names!: string

    @Field()
    email!: string

    @Field()
    password!: string;
}