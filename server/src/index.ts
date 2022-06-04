import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();

const PORT = process.env.PORT || 4000;
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app: Express = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use('/', router);

app.use((req: Request, res: Response) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${HOSTNAME}:${PORT}`);
});
