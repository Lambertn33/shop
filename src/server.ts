import express, {Request, Response, NextFunction} from 'express';
import connection from './util/db';
import { json } from 'body-parser';
import { seedCategories } from './seeds/categories';
import { seedRoles } from './seeds/roles';

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

connection.sync({ force: true }).then(()=> {
    seedCategories();
    seedRoles();
    app.listen(3000);
});

