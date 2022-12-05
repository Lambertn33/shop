import express, {Request, Response, NextFunction} from 'express';
import { json } from 'body-parser';
import { seedCategories } from './seeds/categories';
import { seedUsers } from './seeds/users';
import { AuthResolver } from './graphql/auth/auth.resolvers';
import connection from './util/db';

async function main() {
    const app = express();
    app.use(json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Contrl-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).send({ message: 'invalid route' });
    });

    await connection.sync();
    await seedCategories();
    await seedUsers();
    app.listen(3000);
}

main();

