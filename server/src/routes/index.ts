import express, { Express, Request, Response } from 'express';

import quotesRouter from './quotesRouter';
import statsRouter from './statsRouter';

const router = express.Router();

quotesRouter(router);
statsRouter(router);

export default router;
