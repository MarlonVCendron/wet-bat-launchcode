import { Router, Request, Response } from 'express';
import { getQuotes } from '../services/quotesService';

const quotesRouter = (router: Router) => {
  router.get('/quotes', async (req: Request, res: Response) => {
    try {
      const data = await getQuotes();
      res.json(data);
    } catch (e) {
      console.error(e);
      res.sendStatus(404);
    }
  });
};

export default quotesRouter;
