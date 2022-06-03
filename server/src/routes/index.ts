import express from 'express';

const router = express.Router();

router.post('/itens', (req, res) => {
  res.send('post');
});

router.get('/itens', (req, res) => {
  res.send('get');
});

export default router;
