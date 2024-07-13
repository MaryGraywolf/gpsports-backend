import express from 'express';
import userRoutes from './routes/userRoutes';
import { json } from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use('/api/users', userRoutes);

app.set('port', port);

export default app;
