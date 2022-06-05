import { Router, Request, Response } from 'express';
import {
  getRevenueData,
  getPotentialRevenueData,
  getCloseRatiosData,
} from '../services/statsService';

const statsRouter = (router: Router) => {
  router.get('/stats/revenue', (req: Request, res: Response) => {
    try {
      const data = getRevenueData();
      res.json(data);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });

  router.get('/stats/potential_revenue', (req: Request, res: Response) => {
    try {
      const data = getPotentialRevenueData();
      res.json(data);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });

  router.get('/stats/close_ratios', (req: Request, res: Response) => {
    try {
      const data = getCloseRatiosData();
      res.json(data);
    } catch (e) {
      console.error(e);
      res.sendStatus(400);
    }
  });
};

export default statsRouter;
