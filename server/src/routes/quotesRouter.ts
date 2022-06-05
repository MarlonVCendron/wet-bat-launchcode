import { Router, Request, Response } from 'express';
import { getQuotes, insertQuote, deleteQuote } from '../services/quotesService';

const quotesRouter = (router: Router) => {
  router.get('/quotes', async (req: Request, res: Response) => {
    try {
      const data = await getQuotes();
      res.json(data);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });

  router.post('/quote', async (req: Request, res: Response) => {
    try {
      const quote = req.body;
      await insertQuote(quote);
      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });

  router.delete('/quote/:quoteId', async (req: Request, res: Response) => {
    try {
      const { quoteId } = req.params;
      await deleteQuote(quoteId);
      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });
};

export default quotesRouter;
