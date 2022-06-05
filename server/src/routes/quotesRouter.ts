import { Router, Request, Response } from 'express';
import {
  getQuotes,
  getQuote,
  insertQuote,
  deleteQuote,
  updateQuote,
} from '../services/quotesService';

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

  router.get('/quote/:quoteId', async (req: Request, res: Response) => {
    try {
      const { quoteId } = req.params;
      const data = await getQuote(quoteId);
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

  router.put('/quote', async (req: Request, res: Response) => {
    try {
      const quote = req.body;
      await updateQuote(quote);
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
