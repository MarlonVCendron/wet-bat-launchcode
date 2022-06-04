import { Router, Request, Response } from 'express';

const quotesRouter = (router: Router) => {
  router.post('/itens', (req: Request, res: Response) => {
    res.send('post');
  });

  router.get('/itens', (req: Request, res: Response) => {
    res.send('get');
  });
};

export default quotesRouter;
