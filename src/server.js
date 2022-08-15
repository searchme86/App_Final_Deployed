import express from 'express';
import cors from 'cors';
import logger from 'morgan';

import UserRouter from './router/UserRouter';
import ProductRouter from './router/ProductRouter';
import CategoryRouter from './router/CategoryRouter';

const app = express();

const loggerMiddleware = logger('dev');
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(loggerMiddleware);
app.use(cors({ origin: '*', credentials: true }));

app.use('/api/users', UserRouter);
app.use('/api/product', ProductRouter);
app.use('/api/category', CategoryRouter);

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

export default app;
