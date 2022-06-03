import express from 'express';
import cors from 'cors';
import router from './routes';

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use('/api', router);

app.use((req, res) => {
  res.status(404);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${HOSTNAME}:${PORT}`);
});
